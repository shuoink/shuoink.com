import Image from 'next/image';
import type {VFC} from 'react';
import Link from 'next/link';
import Heading from '../components/Heading';
import HyperLink from '../components/HyperLink';
import Section from '../components/Section';
import stephen from '../../public/images/stephen.jpg';
import resize from '../utils/resize';
import {YEAR} from '../constants';
import ButtonLink from '../components/ButtonLink';
import MetaTags from '../components/MetaTags';

const About: VFC = () => (
  <>
    <MetaTags
      title="About"
      description="About Stephen Sorensen"
      pathname="/about"
    />
    <Section
      id="about"
      className="w-full mx-auto bg-white lg:rounded-md md:flex xl:w-10/12 overflow-hidden"
    >
      <div className="md:w-1/2">
        <div className="flex-1 relative aspect-w-1 aspect-h-1">
          <Image
            src={stephen}
            alt="Stephen Sorensen"
            layout="fill"
            objectFit="cover"
            {...resize(stephen, {width: 640})}
          />
        </div>
      </div>
      <div className="flex items-center flex-1">
        <div className="p-10 md:p-22 sm:p-16 space-y-4">
          <Heading>Stephen Sorensen</Heading>
          <p className="leading-loose text-black xxl:text-xl">
            Hi, I&apos;m Stephen Sorensen. I make web sites. In fact, I&apos;ve
            been creating web sites for nearly 30 years now.
          </p>
          <p className="leading-loose text-black xxl:text-xl">
            I started early, as a teenager, and have been passionate about web
            development ever since. I&apos;ve spent the last{' '}
            {Math.round((Date.now() - new Date(2014, 0, 2).getTime()) / YEAR)}{' '}
            years working as a Senior/Lead JavaScript Developer for{' '}
            <HyperLink
              href="https://www.ice.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intercontinental Exchange
            </HyperLink>{' '}
            &amp;{' '}
            <HyperLink
              href="https://www.nyse.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              The New York Stock Exchange
            </HyperLink>
            , where I built and maintained an in-house content management system
            and countless React components used to create many high-traffic web
            sites.
          </p>
          <p>
            Now, I&apos;m starting a new journey as a freelance developer. I
            specialize in JavaScript &amp; React.
          </p>
          <Link href="/contact" passHref>
            <ButtonLink>Let&apos;s Connect</ButtonLink>
          </Link>
        </div>
      </div>
    </Section>
  </>
);

export default About;
