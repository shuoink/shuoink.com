import {VFC} from 'react';
import classnames from 'classnames';
import {FIELD_CLASSES} from '../constants';
import {FormGroup} from './FormGroup';

export const TextField: VFC<
  JSX.IntrinsicElements['input'] & {
    id: string;
    displayName: string;
    setValue: (value: string) => void;
  }
> = ({id, displayName, className, setValue, ...rest}) => (
  <FormGroup labelFor={id} label={displayName}>
    <input
      {...rest}
      id={id}
      className={classnames(className, FIELD_CLASSES)}
      onChange={e => setValue(e.currentTarget.value)}
    />
  </FormGroup>
);
