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
      <div className="absolute z-10 object-cover object-center w-full h-full bg-black bg-opacity-60"></div>
      <div className="absolute z-0 object-cover object-center w-full h-full">
        <Image src={src} alt={alt} {...resize(src, {width: 1280})} />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="relative z-20 flex flex-col max-w-xl px-4 py-24 transform lg:py-56 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
    <div className="w-full absolute bottom-0 transform translate-y-1/2 -skew-y-3 bg-gray-100 h-[6vw] z-10"></div>
  </Section>
);

export default FullImageSectionWithSlant;
