import {FC} from 'react';
import Image from 'next/image';
import Section from './Section';
import resize from '../utils/resize';

const FullImageSectionWithSlant: FC<{src: StaticImageData; alt: string}> = ({
  src,
  alt,
  children,
}) => (
  <Section className="relative w-full bg-gray-50 mt-8 overflow-hidden">
    <div className="relative text-white">
      <div className="absolute object-cover object-center w-full h-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          {...resize(src, {width: 1280})}
        />
      </div>
      <div className="absolute object-cover object-center w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative flex flex-col xl:w-10/12 mx-auto py-24 lg:py-56">
        <div className="px-8 xl:px-0 xl:w-1/2">{children}</div>
      </div>
    </div>
    <div className="w-full absolute bottom-0 transform translate-y-1/2 -skew-y-3 bg-gray-100 h-[6vw] z-10"></div>
  </Section>
);

export default FullImageSectionWithSlant;
