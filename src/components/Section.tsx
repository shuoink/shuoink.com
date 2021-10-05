import type {FC} from 'react';
import type {HeadingLevel} from '../contexts/HeadingContext';
import {IncrementHeadingLevel} from '../contexts/HeadingContext';

const Section: FC<
  JSX.IntrinsicElements['section'] & {
    level?: HeadingLevel;
  }
> = ({level, children, ...rest}) => {
  return (
    <IncrementHeadingLevel level={level}>
      <section {...rest}>{children}</section>
    </IncrementHeadingLevel>
  );
};

export default Section;
