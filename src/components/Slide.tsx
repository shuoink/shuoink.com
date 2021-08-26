import Image from 'next/image';
import {FC} from 'react';

const Slide: FC<{backgroundImage?: StaticImageData}> = ({
  backgroundImage,
  children,
}) => (
  <div className="min-h-screen w-full">
    {/* {backgroundImage && (
      <Image
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        alt="laptop"
        className="absolute inset-0 z-0"
      />
    )} */}
    <div className="bg-gray-900 bg-opacity-90 text-gray-100 flex flex-col justify-center p-4 lg:p-24">
      {children}
    </div>
  </div>
);

export default Slide;
