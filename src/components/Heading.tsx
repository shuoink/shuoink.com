import classNames from 'classnames';
import type {FC} from 'react';
import {useContext} from 'react';
import type {HeadingLevel} from '../contexts/HeadingContext';
import {HeadingContext} from '../contexts/HeadingContext';

const Heading: FC<
  JSX.IntrinsicElements['h1'] & {
    level?: HeadingLevel;
    color?: 'black' | 'complementary' | 'primary' | 'secondary' | 'white';
    center?: boolean;
  }
> = ({
  level: levelProperty,
  center,
  children,
  color = 'primary',
  className,
  ...rest
}) => {
  const levelContext = useContext(HeadingContext) ?? 1;
  const level = levelProperty ?? levelContext;
  const Tag: `h${HeadingLevel}` = `h${level}`;
  return (
    <Tag
      className={
        className ??
        classNames('font-semibold text-center', {
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
          'lg:text-left': center !== true,
        })
      }
      // spread intentionally after className so it can be overridden
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Heading;
