import type {VFC} from 'react';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTshirt,
} from 'react-icons/fa';
import Copyright from './Copyright';
import IconLink from './IconLink';

const Footer: VFC = () => (
  <footer className="isolate">
    <div className="bg-gray-500 pt-2">
      <div
        className="bg-gray-600 h-24 relative"
        style={{
          clipPath: 'polygon(0 50%,100% 0,100% 100%,0 100%)',
        }}
      >
        <div
          className="bg-gray-700 h-6 w-full absolute bottom-0"
          style={{
            clipPath: 'polygon(100% 100%,0 0,0 100%,100% 100%)',
          }}
        />
      </div>
    </div>
    <div className="bg-gray-700 relative">
      <div className="px-4 pb-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <ul className="flex justify-around sm:justify-center mt-8 sm:space-x-12 text-2xl">
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

          <li>
            <IconLink
              href="https://shuoink.creator-spring.com/"
              ariaLabel="Swag"
              title="Swag"
            >
              <FaTshirt />
            </IconLink>
          </li>
        </ul>
        <p className="mt-8 text-base text-center text-gray-300">
          <Copyright holder="Shuoink LLC" start={2021} />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
