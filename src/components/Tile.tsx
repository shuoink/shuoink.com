import type {FC, ReactElement, ReactNode} from 'react';
import {IncrementHeadingLevel} from '../contexts/HeadingContext';
import Heading from './Heading';

const Tile: FC<{
  img?: ReactElement;
  href?: string;
  target?: string;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  rel?: string;
}> = ({href, target, rel, title, body, footer, img}) => {
  const linkProperties = {href, target, rel};
  return (
    <IncrementHeadingLevel>
      <div className="flex flex-col bg-white rounded-lg transform hover:-translate-y-2 hover:scale-105 shadow-lg duration-75">
        {img && (
          <a
            {...linkProperties}
            className="block relative rounded-t-lg overflow-hidden"
          >
            {img}
          </a>
        )}
        <div className="flex-grow flex flex-col p-6 text-gray-800">
          {title && (
            <Heading className="text-2xl">
              <a {...linkProperties}>{title}</a>
            </Heading>
          )}
          {body && <div className="mt-3 text-gray-600">{body}</div>}
          <div className="flex-grow" />
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
};

export default Tile;
