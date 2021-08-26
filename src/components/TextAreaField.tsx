import {VFC} from 'react';
import {useField, UseFieldConfig} from 'react-final-form';
import {useId} from '@reach/auto-id';
import getFieldClasses from '../utils/getFieldClasses';
import Label from './Label';
import FieldFeedback from './FieldFeedback';

export const TextAreaField: VFC<
  Omit<JSX.IntrinsicElements['textarea'], 'id'> &
    Pick<UseFieldConfig<string>, 'validate'> & {
      name: string;
      displayName: string;
    }
> = ({name, displayName, className, validate, ...rest}) => {
  const {input, meta} = useField(name, {validate});
  const id = useId() ?? '';
  return (
    <div>
      <Label {...meta} htmlFor={id}>
        <div>{displayName}:</div>
        <textarea
          {...input}
          {...rest}
          id={id}
          className={getFieldClasses({...meta, dock: {bottom: meta.touched && meta.invalid}})}
        />
      </Label>
      <FieldFeedback dock={{top: true}} {...meta} />
    </div>
  );
};
