import {FC} from 'react';

const Grid: FC = ({children}) => (
  <div className="w-full block space-y-8 sm:space-y-0 sm:grid grid-cols-12 gap-8 p-8">
    {children}
  </div>
);

export default Grid;
