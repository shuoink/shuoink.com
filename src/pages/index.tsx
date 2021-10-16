import {BsArrowRight, BsArrowDown} from 'react-icons/bs';
import type {VFC} from 'react';
import Link from 'next/link';
import ButtonLink from '../components/ButtonLink';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Strong from '../components/Strong';
import MetaTags from '../components/MetaTags';

const Home: VFC = () => (
  <>
    <MetaTags
      title="React / JavaScript Consulting"
      description="Stephen Sorensen (Shuoink LLC) is a freelance javascript developer specializing in JavaScript, Node, and React."
      pathname="/"
    />
    <Section className="lg:py-16">
      <div className="flex flex-col xl:w-10/12 px-4 mx-auto lg:flex-row sm:px-6 lg:px-8 items-center">
        <div className="flex-1 flex flex-col items-center justify-center text-center lg:text-left lg:items-start space-y-8 py-8 xl:space-y-16 xl:py-32">
          <Heading className="text-black text-3xl xl:text-6xl font-bold leading-tight">
            Reach more customers, build credibility, showcase your brand, and
            maximize your revenue.
          </Heading>
          <p className="w-4/6 lg:text-2xl text-gray-500 lg:leading-snug">
            I create <Strong>custom</Strong> websites with{' '}
            <Strong>dynamic</Strong>, <Strong>interactive</Strong> content,
            forms, <Strong>integrated</Strong> e-commerce, and{' '}
            <Strong>engaging</Strong> landing pages to help you{' '}
            <Strong>reach your business goals</Strong>.
          </p>
          <div className="flex flex-col w-full mt-6 space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row lg:px-0">
            <Link href="/contact" passHref>
              <ButtonLink>
                <span>I&apos;m ready!</span>
                <BsArrowRight className="text-2xl ml-2" />
              </ButtonLink>
            </Link>
            <ButtonLink href="/services">
              <ButtonLink>
                <span>Tell Me More</span>
                <BsArrowDown className="text-2xl ml-2" />
              </ButtonLink>
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>

    {/* <FullImageSectionWithSlant src={lightbulbs} alt="lightbulbs">
        <blockquote className="text-4xl font-medium md:text-5xl before:content-[open-quote] after:content-[close-quote] md:leading-tight">
          I haven&apos;t had my first freelance client yet, but when I do,
          there&apos;s going to be a rockstar testimonial here!
        </blockquote>
        <p className="pt-8 text-xl md:text-2xl">&mdash; Me, LOL</p>
      </FullImageSectionWithSlant> */}
  </>
);

export default Home;
