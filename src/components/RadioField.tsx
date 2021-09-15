import {useId} from '@reach/auto-id';
import {VFC} from 'react';
import getFieldClasses from '../utils/getFieldClasses';
import Label from './Label';
import {useRadioFieldsContext} from './RadiosField';

const RadioField: VFC<
  Omit<JSX.IntrinsicElements['input'], 'id'> & {
    value: string;
    displayName: string;
  }
> = ({displayName, value, ...rest}) => {
  const id = useId() ?? '';
  const {
    input: {value: checkedValue, ...inputProps},
    meta,
  } = useRadioFieldsContext();
  return (
    <Label small htmlFor={id} {...meta}>
      <input
        {...inputProps}
        {...rest}
        id={id}
        type="radio"
        value={value}
        checked={value === checkedValue}
        className={getFieldClasses({...meta, block: false, circular: true})}
      />{' '}
      {displayName}
    </Label>
  );
};

export default RadioField;
