import classNames from 'classnames';
import type {FC, VFC} from 'react';
import {FaGithub, FaTwitter, FaLinkedin, FaFacebook} from 'react-icons/fa';
import Copyright from './Copyright';
import IconLink from './IconLink';

const SkewTop: FC<{bgClass: string}> = ({bgClass, children}) => (
  <div className="isolate">
    <div
      className={classNames(
        'w-full h-[6vw] skew-y-2 transform translate-y-1/2',
        bgClass
      )}
    />
    <div className={classNames('relative z-10', bgClass)}>{children}</div>
  </div>
);

const Footer: VFC = () => (
  <footer>
    <SkewTop bgClass="bg-gray-700">
      <div className="px-4 pb-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <ul className="flex justify-center mt-8 space-x-12 text-2xl">
          <li>
            <IconLink
              href="https://www.linkedin.com/in/stephensorensen/"
              ariaLabel="Stephen Sorensen's LinkedIn Profile"
              title="Stephen Sorensen's LinkedIn Profile"
            >
              <FaLinkedin />
            </IconLink>
          </li>

          <li>
            <IconLink
              href="https://twitter.com/shuoink"
              ariaLabel="Stephen Sorensen's Twitter Profile"
              title="Stephen Sorensen's Twitter Profile"
            >
              <FaTwitter />
            </IconLink>
          </li>

          <li>
            <IconLink
              href="https://github.com/spudly"
              ariaLabel="Stephen Sorensen's GitHub Profile"
              title="Stephen Sorensen's GitHub Profile"
            >
              <FaGithub />
            </IconLink>
          </li>

          <li>
            <IconLink
              href="https://www.facebook.com/shuoink"
              ariaLabel="Shuoink Facebook Page"
              title="Shuoink Facebook Page"
            >
              <FaFacebook />
            </IconLink>
          </li>
        </ul>
        <p className="mt-8 text-base text-center text-gray-300">
          <Copyright holder="Shuoink LLC" start={2021} />
        </p>
      </div>
    </SkewTop>
  </footer>
);

export default Footer;
