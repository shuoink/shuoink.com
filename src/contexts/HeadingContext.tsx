import {createContext, FC, useContext} from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const HeadingContext = createContext<HeadingLevel | null>(null);

export const IncrementHeadingLevel: FC<{level?: HeadingLevel}> = ({
  level: levelProp,
  children,
}) => {
  const prevLevel = useContext(HeadingContext) ?? 0;
  const nextLevel = (prevLevel < 6 ? prevLevel + 1 : prevLevel) as HeadingLevel;
  const level = levelProp ?? nextLevel;
  return (
    <HeadingContext.Provider value={level}>{children}</HeadingContext.Provider>
  );
};

export default HeadingContext;
