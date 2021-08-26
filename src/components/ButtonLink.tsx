import {FC, forwardRef} from 'react';
import classnames from 'classnames';
import {BUTTON_CLASSES} from '../constants';

const ButtonLink = forwardRef<HTMLAnchorElement, JSX.IntrinsicElements['a']>(
  ({className, ...rest}, ref) => (
    <a {...rest} ref={ref} className={classnames(className, BUTTON_CLASSES)} />
  )
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
