import Link from 'next/link';
import {FC, useState} from 'react';
import classnames from 'classnames';
import {useRouter} from 'next/dist/client/router';
import {Overlay} from './Overlay';
import Hamburger from 'hamburger-react';
import classNames from 'classnames';

const LINKS: {href: string; text: string}[] = [
  {href: '/', text: 'Home'},
  {href: '/about', text: 'About'},
  {href: '/services', text: 'Services'},
  // {href: '/portfolio', text: 'Portfolio'},
  // {href: '/testimonials', text: 'Testimonials'},
  // {href: '/blog', text: 'Blog'},
  {href: '/contact', text: 'Contact'},
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(is => !is);
  const close = () => setIsOpen(false);
  const {pathname} = useRouter();
  return (
    <>
      {isOpen && <Overlay onClick={close} />}
      <div className="pb-12 sm:pb-0" />
      <header
        className={classNames(
          'fixed top-0 left-0 right-0 z-10 flex justify-between items-start sm:items-center bg-gray-800 text-gray-100 text-2xl leading-10 select-none duration-100',
          {
            'bg-opacity-75': !isOpen,
            'bg-opacity-90': isOpen,
          }
        )}
      >
        <nav className="flex-grow">
          <ul className="list-none flex flex-col sm:flex-row p-1">
            {LINKS.map(({href, text}, index) => (
              <li
                key={href}
                className={classNames(
                  'sm:block sm:pr-4 hover:text-brand-orange',
                  {
                    'hidden pb-0': pathname !== href && !isOpen,
                  }
                )}
              >
                <Link href={href}>
                  <a
                    className={classnames(
                      'block border-l-4 sm:border-l-0 sm:border-b-4 pl-2 sm:px-2',
                      {
                        'border-transparent': pathname !== href,
                        'border-brand-orange': pathname === href,
                      }
                    )}
                    onClick={e => {
                      if (pathname === href && !isOpen) {
                        e.preventDefault();
                        open();
                      } else {
                        close();
                      }
                    }}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="sm:hidden" onClick={toggle} aria-label="Menu">
          <Hamburger toggled={isOpen} />
        </button>
      </header>
    </>
  );
};
