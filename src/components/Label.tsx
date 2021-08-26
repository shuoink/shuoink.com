import {FC} from 'react';
import classnames from 'classnames';

const Label: FC<{
  htmlFor?: string;
  touched?: boolean;
  invalid?: boolean;
}> = ({touched, invalid, htmlFor, children}) => (
  <label
    htmlFor={htmlFor}
    className={classnames('block text-2xl uppercase', {
      'text-green-500': touched && !invalid,
      'text-red-500': touched && invalid,
    })}
  >
    {children}
  </label>
);

export default Label;
