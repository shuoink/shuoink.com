import {useId} from '@reach/auto-id';
import {createContext, FC, useContext} from 'react';
import {FieldRenderProps, useField, UseFieldConfig} from 'react-final-form';
import FieldFeedback from './FieldFeedback';
import Label from './Label';

const RadioFieldsContext = createContext<FieldRenderProps<
  string,
  HTMLInputElement
> | null>(null);

export const useRadioFieldsContext = (): FieldRenderProps<
  string,
  HTMLInputElement
> => {
  const inputProps = useContext(RadioFieldsContext);

  if (inputProps === null) {
    throw new Error('Missing RadioFieldsContext');
  }

  return inputProps;
};

const RadioFields: FC<
  Pick<UseFieldConfig<string>, 'validate'> & {
    name: string;
    displayName: string;
    errorDisplayName?: string;
  }
> = ({name, displayName, errorDisplayName, validate, children}) => {
  const fieldRenderProps = useField(name, {validate});
  const {meta} = fieldRenderProps;
  return (
    <RadioFieldsContext.Provider value={fieldRenderProps}>
      {/* div wrapper prevents space-x/y utilities from
      creating space between the label and form control */}
      <div>
        <Label {...meta}>{displayName}</Label>
        {children}
        <FieldFeedback
          displayName={errorDisplayName ?? displayName}
          {...meta}
        />
      </div>
    </RadioFieldsContext.Provider>
  );
};

export default RadioFields;
