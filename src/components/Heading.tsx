import classNames from 'classnames';
import {FC, useContext} from 'react';
import HeadingContext, {HeadingLevel} from '../contexts/HeadingContext';

const Heading: FC<
  JSX.IntrinsicElements['h1'] & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    color?: 'primary' | 'secondary' | 'complementary' | 'white' | 'black';
  }
> = ({level: levelProp, children, color = 'primary', ...rest}) => {
  const levelContext = useContext(HeadingContext) ?? 1;
  const level = levelProp ?? levelContext;
  const Tag = `h${level}` as `h${HeadingLevel}`;
  return (
    <Tag
      className={classNames('font-semibold text-center lg:text-left', {
        'text-primary-600': color === 'primary',
        'text-secondary-600': color === 'secondary',
        'text-complementary-600': color === 'complementary',
        'text-black': color === 'black',
        'text-white': color === 'white',
        'text-3xl lg:text-5xl my-8': level === 1,
        'text-4xl my-6': level === 2,
        'text-3xl my-4': level === 3,
        'text-2xl my-2': level === 4,
        'text-xl': level === 5,
        'text-lg': level === 6,
      })}
      // spread intentionally after className so it can be overridden
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Heading;
