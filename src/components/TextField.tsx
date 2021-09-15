import {VFC} from 'react';
import {useField, UseFieldConfig} from 'react-final-form';
import {useId} from '@reach/auto-id';
import getFieldClasses from '../utils/getFieldClasses';
import Label from './Label';
import FieldFeedback from './FieldFeedback';

export const TextField: VFC<
  Omit<JSX.IntrinsicElements['input'], 'id'> &
    Pick<UseFieldConfig<string>, 'validate'> & {
      name: string;
      displayName: string;
      errorDisplayName?: string;
    }
> = ({name, displayName, errorDisplayName, className, validate, ...rest}) => {
  const {input, meta} = useField(name, {validate});
  const id = useId() ?? '';
  return (
    <div>
      <Label {...meta} htmlFor={id}>
        <div>{displayName}</div>
        <input
          {...input}
          {...rest}
          id={id}
          className={getFieldClasses({
            ...meta,
            dock: {bottom: meta.touched && meta.invalid},
          })}
        />
      </Label>
      <FieldFeedback
        displayName={errorDisplayName ?? displayName}
        dock={{top: true}}
        {...meta}
      />
    </div>
  );
};
