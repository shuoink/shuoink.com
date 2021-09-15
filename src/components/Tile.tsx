import {FC, ReactNode} from 'react';
import Image from 'next/image';
import Heading from './Heading';
import {IncrementHeadingLevel} from '../contexts/HeadingContext';

const Tile: FC<{
  src?: StaticImageData;
  alt?: string;
  href?: string;
  target?: string;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}> = ({href, target, src, alt, title, body, footer}) => (
  <IncrementHeadingLevel>
    <div className="block bg-white rounded-lg transform hover:-translate-y-2 hover:scale-105 shadow-lg duration-75">
      {src && (
        <a
          href={href}
          target={target}
          className="block relative rounded-t-lg overflow-hidden"
        >
          <Image src={src} alt={alt} />
        </a>
      )}
      <div className="flex flex-col p-6 text-gray-800">
        {title && (
          <Heading className="text-2xl">
            <a href={href}>{title}</a>
          </Heading>
        )}
        {body && <p className="mt-3 text-gray-600">{body}</p>}
        {footer != null && (
          <>
            <hr className="w-full my-5 divider" />
            <div className="flex items-center justify-between text-sm uppercase">
              {footer}
            </div>
          </>
        )}
      </div>
    </div>
  </IncrementHeadingLevel>
);

export default Tile;
