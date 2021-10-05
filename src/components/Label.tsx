import type {FC} from 'react';
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
      'text-green-500': touched === true && invalid !== true,
      'text-red-500': touched === true && invalid,
      'text-2xl': small !== true,
      'text-base': small === true,
    })}
  >
    {children}
  </label>
);

export default Label;
