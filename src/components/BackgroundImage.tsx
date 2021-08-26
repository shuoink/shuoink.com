import Image from 'next/image';
import {ComponentProps, VFC} from 'react';

const BackgroundImage: VFC<
  Omit<ComponentProps<typeof Image>, 'layout' | 'objectFit'>
> = ({alt, ...props}) => (
  <div
    className="fixed inset-0 bg-gray-900 mix-blend-soft-light"
    style={{zIndex: -1}}
  >
    <Image {...props} alt="alt" layout="fill" objectFit="cover" />
  </div>
);

export default BackgroundImage;
