import {forwardRef} from 'react';
import classnames from 'classnames';
import {BUTTON_CLASSES} from '../constants';

const ButtonLink = forwardRef<HTMLAnchorElement, JSX.IntrinsicElements['a']>(
  ({className, children, ...rest}, reference) => (
    <a
      {...rest}
      ref={reference}
      className={classnames(className, BUTTON_CLASSES)}
    >
      {children}
    </a>
  )
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
