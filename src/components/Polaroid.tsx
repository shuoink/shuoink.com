import classNames from 'classnames';
import type {FC} from 'react';

const Polaroid: FC = ({children}) => (
  <div
    className={classNames(
      'bg-gray-200 p-2 transform -rotate-3 hover:rotate-0 hover:scale-105 shadow duration-75 relative'
    )}
  >
    {children}
  </div>
);

export default Polaroid;
