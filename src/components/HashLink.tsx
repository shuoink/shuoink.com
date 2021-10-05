import type {FC, MouseEvent} from 'react';
import {Children, cloneElement, isValidElement} from 'react';

const HashLink: FC<{href: string}> = ({href, children}) => {
  const child = Children.only(children);
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(event.currentTarget.href);
    if (
      url.origin !== window.location.origin ||
      url.pathname !== window.location.pathname
    ) {
      return;
    }
    event.preventDefault();
    const node = document.querySelector(url.hash);
    if (node) {
      (node as HTMLAnchorElement).scrollIntoView({
        behavior: 'smooth',
      });
    }
    window.history.pushState(null, '', href);
  };
  return isValidElement(child)
    ? cloneElement(child, {href, onClick: handleClick})
    : null;
};

export default HashLink;
