import {forwardRef} from 'react';

const HyperLink = forwardRef<HTMLAnchorElement, JSX.IntrinsicElements['a']>(
  ({className, children, ...rest}, reference) => (
    <a {...rest} ref={reference} className="text-primary-600 underline">
      {children}
    </a>
  )
);

HyperLink.displayName = 'ButtonLink';

export default HyperLink;
