import classNames from 'classnames';
import {FC} from 'react';

const Heading: FC<{level: 1 | 2 | 3 | 4 | 5 | 6}> = ({level, children}) => (
  <h1
    className={classNames('uppercase w-full text-center sm:text-left', {
      'text-3xl sm:text-8xl': level === 1,
      'pb-4 border-b-4 border-brand-orange': level === 1,
      'text-2xl sm:text-5xl': level === 2,
    })}
  >
    {children}
  </h1>
);

export default Heading;
