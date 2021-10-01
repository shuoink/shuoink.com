import {Children, cloneElement, FC, isValidElement, MouseEvent} from 'react';

const HashLink: FC<{href: string}> = ({href, children}) => {
  const child = Children.only(children);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(e.currentTarget.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname) {
      return;
    }
    e.preventDefault();
    const node = document.querySelector(url.hash);
    if (node) {
      (node as HTMLAnchorElement).scrollIntoView({
        behavior: 'smooth',
      });
    }
    history.pushState(null, '', href);
  };
  return isValidElement(child)
    ? cloneElement(child, {href, onClick: handleClick})
    : null;
};

export default HashLink;
