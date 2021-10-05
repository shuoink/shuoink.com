import type {FC} from 'react';
import {createContext, useContext} from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const HeadingContext = createContext<HeadingLevel | null>(null);

export const IncrementHeadingLevel: FC<{level?: HeadingLevel}> = ({
  level: levelProperty,
  children,
}) => {
  const previousLevel = useContext(HeadingContext) ?? 0;
  const nextLevel = (
    previousLevel < 6 ? previousLevel + 1 : previousLevel
  ) as HeadingLevel;
  const level = levelProperty ?? nextLevel;
  return (
    <HeadingContext.Provider value={level}>{children}</HeadingContext.Provider>
  );
};
