import type {FC, MouseEvent, ReactElement, ReactNode} from 'react';
import classNames from 'classnames';
import {IncrementHeadingLevel} from '../contexts/HeadingContext';
import Heading from './Heading';

const Card: FC<{
  media?: ReactElement;
  href?: string;
  target?: string;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  rel?: string;
  grow?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}> = ({href, target, rel, title, body, footer, media, grow, onClick}) => {
  const linkProperties = {href, target, rel, onClick};
  return (
    <IncrementHeadingLevel>
      <div
        className={classNames(
          'flex flex-col bg-white rounded-lg transform hover:-translate-y-2 hover:scale-105 shadow-lg duration-75 w-full',
          {'flex-grow': grow}
        )}
      >
        {media && (
          <a
            {...linkProperties}
            className="block relative rounded-t-lg overflow-hidden"
          >
            {media}
          </a>
        )}
        <div className="flex-grow flex flex-col p-6 text-gray-800">
          {title && (
            <Heading className="font-bold">
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

export default Card;
