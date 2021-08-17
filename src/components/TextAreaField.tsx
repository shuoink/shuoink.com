import {VFC} from 'react';
import classnames from 'classnames';
import {FIELD_CLASSES} from '../constants';
import {FormGroup} from './FormGroup';

export const TextAreaField: VFC<
  JSX.IntrinsicElements['textarea'] & {
    id: string;
    displayName: string;
    setValue: (value: string) => void;
  }
> = ({id, displayName, className, setValue, ...rest}) => (
  <FormGroup labelFor={id} label={displayName}>
    <textarea
      {...rest}
      id={id}
      onChange={e => setValue(e.currentTarget.value)}
      className={classnames(className, FIELD_CLASSES)}
    />
  </FormGroup>
);
