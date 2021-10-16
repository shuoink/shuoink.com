import type {ReactNode} from 'react';
import {forwardRef} from 'react';

const IconLink = forwardRef<
  HTMLAnchorElement,
  {children?: ReactNode; href?: string; ariaLabel: string; title?: string}
>(({href, ariaLabel, title, children}, reference) => (
  <a
    href={href}
    aria-label={ariaLabel}
    title={title}
    ref={reference}
    className="flex justify-center items-center text-gray-300 hover:text-gray-200 transform hover:scale-125 duration-75 min-w-[48px] min-h-[48px]"
  >
    {children}
  </a>
));

IconLink.displayName = 'IconLink';

export default IconLink;
