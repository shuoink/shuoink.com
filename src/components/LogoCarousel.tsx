import type {VFC} from 'react';

const LogoCarousel: VFC<{
  logos: Array<{href?: string; src: string; alt: string}>;
}> = ({logos}) => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="relative h-48">
        <div className="absolute top-0 left-0 whitespace-nowrap animate-infinite-scroll-to-left space-x-16">
          {[0, 1].flatMap(i =>
            logos.map(logo => (
              <a
                key={[i, logo.src].join('-')}
                href={logo.href}
                title={logo.alt}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block grayscale hover:grayscale-0 hover:scale-110 duration-75"
              >
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-48 h-48 object-contain max-w-none"
                />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
