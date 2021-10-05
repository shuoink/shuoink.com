import type {FC} from 'react';
import {createContext, useContext} from 'react';
import type {FieldRenderProps, UseFieldConfig} from 'react-final-form';
import {useField} from 'react-final-form';
import FieldFeedback from './FieldFeedback';
import Label from './Label';

const RadioFieldsContext = createContext<FieldRenderProps<
  string,
  HTMLInputElement
> | null>(null);

const useRadioFieldsContext = (): FieldRenderProps<
  string,
  HTMLInputElement
> => {
  const inputProperties = useContext(RadioFieldsContext);

  if (inputProperties === null) {
    throw new Error('Missing RadioFieldsContext');
  }

  return inputProperties;
};

const RadioFields: FC<
  Pick<UseFieldConfig<string>, 'validate'> & {
    name: string;
    displayName: string;
    errorDisplayName?: string;
  }
> = ({name, displayName, errorDisplayName, validate, children}) => {
  const fieldRenderProperties = useField(name, {validate});
  const {meta} = fieldRenderProperties;
  return (
    <RadioFieldsContext.Provider value={fieldRenderProperties}>
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

export {useRadioFieldsContext};
export default RadioFields;
