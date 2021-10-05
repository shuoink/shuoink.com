import type {FC} from 'react';
import classnames from 'classnames';
import {BUTTON_CLASSES} from '../constants';

const Button: FC<JSX.IntrinsicElements['button']> = ({
  type = 'button',
  className,
  ...rest
}) => (
  <button
    {...rest}
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classnames(className, BUTTON_CLASSES)}
  />
);

export default Button;
