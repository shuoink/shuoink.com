import LinkDescriptor from 'next/link';
import {FC, forwardRef, Fragment, ReactNode, useState} from 'react';
import {useRouter} from 'next/dist/client/router';
import {Overlay} from './Overlay';
import Hamburger from 'hamburger-react';
import classNames from 'classnames';
import ButtonLink from './ButtonLink';
import A11ySkipLink from './A11ySkipLink';
import IconLink from './IconLink';
import ShuoinkLogo from './ShuoinkLogo';

export type LinkDescriptor = {href: string; text: string};

const NavLink = forwardRef<
  HTMLAnchorElement,
  {href?: string; isActive?: boolean; children: ReactNode}
>(({href, isActive, children}, ref) => (
  <a
    ref={ref}
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
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(is => !is);
  const close = () => setIsOpen(false);
  const {pathname} = useRouter();
  return (
    <>
      <A11ySkipLink href="#main">Skip to Content</A11ySkipLink>
      <nav className="text-sm text-gray-500 bg-white">
        <div className="relative xl:w-10/12 mx-auto">
          <div className="flex items-center justify-between lg:p-4">
            <div className="pl-4 lg:p-0">
              <IconLink href="/" ariaLabel="Home">
                <ShuoinkLogo height={48} />
              </IconLink>
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
              <ButtonLink href="#contact">{"Let's Work Together!"}</ButtonLink>
            </div>
            <button
              className="p-1 rounded-md lg:hidden focus:ring-primary-600 focus:ring-2 focus:outline-none"
              onClick={toggle}
            >
              <Hamburger toggled={isOpen} size={25} label="Toggle Menu" />
            </button>
          </div>
          {isOpen && <Overlay visible onClick={close} />}
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
                <ButtonLink href="#contact">
                  {"Let's Work Together!"}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
