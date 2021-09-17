import classNames from 'classnames';
import React, {FC, Children} from 'react';

const Masonry: FC<{columns: 3 | 4 | 5 | 6}> = ({children, columns = 3}) => {
  const tiles = Children.toArray(children);
  return (
    <div
      className={classNames('lg:grid gap-4 isolate', {
        'grid-cols-3': columns === 3,
        'grid-cols-4': columns === 4,
        'grid-cols-5': columns === 5,
        'grid-cols-6': columns === 6,
      })}
    >
      {Array(columns)
        .fill(0)
        .map((_, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {tiles.filter((_, tileIndex) => tileIndex % columns === colIndex)}
          </div>
        ))}
    </div>
  );
};

export default Masonry;
