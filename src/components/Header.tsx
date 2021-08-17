import Link from 'next/link';
import {FC, useState} from 'react';
import classnames from 'classnames';
import {FaTimes} from 'react-icons/fa';
import {useRouter} from 'next/dist/client/router';
import {Overlay} from './Overlay';
import {FaBars} from 'react-icons/fa';

const LINKS: {href: string; text: string}[] = [
  {href: '/', text: 'Home'},
  // {href: '/about', text: 'About'},
  // {href: '/services', text: 'Services'},
  // {href: '/portfolio', text: 'Portfolio'},
  // {href: '/testimonials', text: 'Testimonials'},
  // {href: '/blog', text: 'Blog'},
  {href: '/contact', text: 'Contact'},
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useRouter();
  return (
    <>
      {isOpen && <Overlay visible onClick={() => setIsOpen(false)} />}
      <header className="w-full bg-gray-900 text-gray-100 flex justify-between text-2xl leading-10 items-center bg-opacity-75 select-none p-2">
        <button className="lg:hidden" onClick={() => setIsOpen(is => !is)} aria-label="Toggle Menu">
          <FaBars />
        </button>
        <nav
          className={classnames(
            'fixed lg:static w-3/4 lg:w-auto top-0 left-0 bottom-0 bg-gray-100 lg:bg-transparent text-gray-900 lg:text-current shadow-right lg:shadow-none transform duration-100 lg:flex lg:justify-between lg:flex-grow lg:items-center',
            {
              '-translate-x-full lg:translate-x-0': !isOpen,
              'translate-x-0': isOpen,
            }
          )}
        >
          <div className="p-2 flex justify-between flex-row-reverse">
            <button aria-label="Close Menu" className="lg:hidden" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
            <div>Stephen Sorensen</div>
          </div>
          <ul className="list-none pl-2 lg:pl-0 lg:flex lg:flex-row lg:space-x-4 lg:pr-4 overflow-auto">
            {LINKS.map(({href, text}) => (
              <li key={href}>
                <Link href={href}>
                  <a
                    className={classnames('border-l-4 lg:border-l-0 lg:border-b-4 pl-2 lg:pl-0', {
                      'border-gray-300 lg:border-transparent': pathname !== href,
                      'border-blue-900 lg:border-current': pathname === href,
                    })}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
