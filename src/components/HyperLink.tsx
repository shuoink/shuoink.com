import {FC, forwardRef} from 'react';
import classnames from 'classnames';
import {BUTTON_CLASSES} from '../constants';

const HyperLink = forwardRef<HTMLAnchorElement, JSX.IntrinsicElements['a']>(
  ({className, ...rest}, ref) => (
    <a {...rest} ref={ref} className="text-brand-orange underline" />
  )
);

HyperLink.displayName = 'ButtonLink';

export default HyperLink;
