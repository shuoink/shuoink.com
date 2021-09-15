import {FC} from 'react';
import classnames from 'classnames';

const Label: FC<{
  htmlFor?: string;
  touched?: boolean;
  invalid?: boolean;
  small?: boolean;
}> = ({touched, invalid, htmlFor, small, children}) => (
  <label
    htmlFor={htmlFor}
    className={classnames('block text-2xl', {
      'text-green-500': touched && !invalid,
      'text-red-500': touched && invalid,
      'text-2xl': !small,
      'text-base': small,
    })}
  >
    {children}
  </label>
);

export default Label;
