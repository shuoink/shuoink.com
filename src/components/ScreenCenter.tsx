import type {FC} from 'react';

const ScreenCenter: FC = ({children}) => (
  <div className="sm:min-h-screen sm:flex flex-col justify-center">
    {children}
  </div>
);

export default ScreenCenter;
