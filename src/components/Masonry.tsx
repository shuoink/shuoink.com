import type {FC} from 'react';
import React, {Children} from 'react';

const Masonry: FC = ({children}) => {
  const tiles = Children.toArray(children);
  const columns = 5;
  return (
    <div className="grid gap-4 isolate grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {/* eslint-disable-next-line unicorn/no-new-array */}
      {new Array(columns).fill(0).map((_col, colIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={colIndex} className="space-y-4">
          {tiles.filter((_tile, tileIndex) => tileIndex % columns === colIndex)}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
