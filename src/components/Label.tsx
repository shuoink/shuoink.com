import {FC} from 'react';
import classnames from 'classnames';

const Label: FC<{
  touched?: boolean;
  invalid?: boolean;
}> = ({touched, invalid, children}) => (
  <label
    className={classnames('block text-sm', {
      'text-green-500': touched && !invalid,
      'text-red-500': touched && invalid,
    })}
  >
    {children}
  </label>
);

export default Label;
