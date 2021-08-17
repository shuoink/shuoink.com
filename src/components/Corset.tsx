import {FC} from 'react';

const Corset: FC = ({children}) => (
  <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
    {children}
  </div>
);

export default Corset;
