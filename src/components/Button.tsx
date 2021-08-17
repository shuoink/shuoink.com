import {FC} from 'react';
import classnames from 'classnames';
import {BUTTON_CLASSES} from '../constants';

const Button: FC<JSX.IntrinsicElements['button']> = ({type = 'button', className, ...rest}) => (
  <button {...rest} type={type} className={classnames(className, BUTTON_CLASSES)} />
);

export default Button;
