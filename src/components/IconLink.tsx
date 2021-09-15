import {FC, forwardRef, ReactNode} from 'react';

const IconLink = forwardRef<
  HTMLAnchorElement,
  {children?: ReactNode; href?: string}
>(({href, children}, ref) => (
  <a
    href={href}
    ref={ref}
    className="flex justify-center items-center text-gray-400 hover:text-gray-300 transform hover:scale-125 duration-75 min-w-[48px] min-h-[48px]"
  >
    {children}
  </a>
));

IconLink.displayName = 'IconLink';

export default IconLink;
