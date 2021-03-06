import type {FC, ReactNode} from 'react';
import {forwardRef, Fragment, useState} from 'react';
import {useRouter} from 'next/dist/client/router';
import Hamburger from 'hamburger-react';
import classNames from 'classnames';
import Link from 'next/link';
import Overlay from './Overlay';
import ButtonLink from './ButtonLink';
import A11ySkipLink from './A11ySkipLink';
import IconLink from './IconLink';
import ShuoinkLogo from './ShuoinkLogo';

type LinkDescriptor = {href: string; text: string};

const NavLink = forwardRef<
  HTMLAnchorElement,
  {href?: string; isActive?: boolean; children: ReactNode}
>(({href, isActive, children}, reference) => (
  <a
    ref={reference}
    href={href}
    className={classNames(
      'px-2 py-1 rounded-md group-hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600',
      {
        'text-primary-600': isActive,
      }
    )}
  >
    {children}
  </a>
));

NavLink.displayName = 'NavLink';

const Header: FC<{links: Array<LinkDescriptor>}> = ({links}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(is => !is);
  };
  const close = () => {
    setIsOpen(false);
  };
  const {pathname} = useRouter();
  return (
    <>
      <A11ySkipLink href="#main">Skip to Content</A11ySkipLink>
      <nav className="text-sm text-gray-500 bg-white">
        <div className="relative xl:w-10/12 mx-auto">
          <div className="flex items-center justify-between lg:p-4">
            <div className="pl-4 lg:p-0">
              <Link href="/" passHref>
                <IconLink ariaLabel="Home">
                  <ShuoinkLogo height={48} />
                </IconLink>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-12 text-lg font-medium">
                {links.map(link => (
                  <li key={link.href} className="relative group">
                    <NavLink href={link.href} isActive={pathname === link.href}>
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <Link href="/contact" passHref>
                <ButtonLink>{"Let's Work Together!"}</ButtonLink>
              </Link>
            </div>
            <button
              type="button"
              className="p-1 rounded-md lg:hidden focus:ring-primary-600 focus:ring-2 focus:outline-none"
              onClick={toggle}
            >
              <Hamburger toggled={isOpen} size={25} label="Toggle Menu" />
            </button>
          </div>
          {isOpen && <Overlay visible close={close} />}
          <div
            className={classNames(
              'absolute inset-x-0 z-10 pb-4 top-20 lg:hidden',
              {
                hidden: !isOpen,
              }
            )}
          >
            <div className="p-4 mx-4 font-medium bg-white rounded-md shadow-xl">
              {links.map(link => (
                <Fragment key={link.href}>
                  <ul className="space-y-2">
                    <li className="font-semibold tracking-wide uppercase text-md text-primary-600">
                      <a href={link.href} onClick={close}>
                        {link.text}
                      </a>
                    </li>
                  </ul>
                  <hr className="my-3" />
                </Fragment>
              ))}
              <div className="text-center">
                <Link href="/contact" passHref>
                  <ButtonLink>{"Let's Work Together!"}</ButtonLink>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export type {LinkDescriptor};
export default Header;
