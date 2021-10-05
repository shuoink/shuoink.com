import type {FC} from 'react';
import Image from 'next/image';
import resize from '../utils/resize';
import Section from './Section';

const TiltedImageSection: FC<{src: StaticImageData; alt: string}> = ({
  src,
  alt,
  children,
}) => (
  <Section className="w-full py-8 bg-gray-100 sm:py-16">
    <div className="flex flex-col max-w-6xl px-4 mx-auto sm:px-6 md:px-8 sm:flex-row">
      <div className="relative flex mx-auto sm:w-3/5 sm:order-2">
        <div className="relative mx-auto">
          <div className="relative bottom-0 left-0 w-full">
            <div className="relative w-full h-full -ml-2 sm:ml-0 skewed-3d-left">
              <div className="relative top-0 left-0 w-full h-auto border shadow-xl rounded-xl">
                <Image
                  src={src}
                  unoptimized
                  alt={alt}
                  {...resize(src, {width: 768})}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full pt-12 sm:w-2/5 sm:pt-0">
        <div className="mx-auto sm:pr-6">{children}</div>
      </div>
    </div>
  </Section>
);

export default TiltedImageSection;
