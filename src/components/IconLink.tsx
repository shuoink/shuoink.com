import {FC, forwardRef, ReactNode} from 'react';

const IconLink = forwardRef<
  HTMLAnchorElement,
  {children?: ReactNode; href: string; ariaLabel: string}
>(({href, ariaLabel, children}, ref) => (
  <a
    href={href}
    aria-label={ariaLabel}
    ref={ref}
    className="flex justify-center items-center text-gray-300 hover:text-gray-200 transform hover:scale-125 duration-75 min-w-[48px] min-h-[48px]"
  >
    {children}
  </a>
));

IconLink.displayName = 'IconLink';

export default IconLink;
