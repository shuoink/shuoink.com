/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {BsArrowRight, BsArrowDown} from 'react-icons/bs';
import type {VFC} from 'react';
import Link from 'next/link';
import ButtonLink from '../components/ButtonLink';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Strong from '../components/Strong';
import MetaTags from '../components/MetaTags';
import cssLogo from '../../public/images/logos/css.svg';
import cypressLogo from '../../public/images/logos/cypress.svg';
import eslintLogo from '../../public/images/logos/eslint.svg';
import graphqlLogo from '../../public/images/logos/graphql.svg';
import htmlLogo from '../../public/images/logos/html.svg';
import javascriptLogo from '../../public/images/logos/javascript.svg';
import jestLogo from '../../public/images/logos/jest.svg';
import nextLogo from '../../public/images/logos/next.svg';
import nodeLogo from '../../public/images/logos/node.svg';
import reactLogo from '../../public/images/logos/react.svg';
import tailwindcssLogo from '../../public/images/logos/tailwindcss.svg';
import typescriptLogo from '../../public/images/logos/typescript.svg';
import webpackLogo from '../../public/images/logos/webpack.svg';
import reactQueryLogo from '../../public/images/logos/react-query.svg';
import viteLogo from '../../public/images/logos/vite.svg';
import LogoCarousel from '../components/LogoCarousel';

const logos: Array<{href?: string; src: string; alt: string}> = [
  {src: htmlLogo.src, alt: 'HTML'},
  {src: cssLogo.src, alt: 'CSS'},
  {src: javascriptLogo.src, alt: 'JavaScript'},
  {href: 'https://reactjs.org/', src: reactLogo.src, alt: 'ReactJS'},
  {href: 'https://nodejs.org/en/', src: nodeLogo.src, alt: 'Node'},
  {href: 'https://nextjs.org/', src: nextLogo.src, alt: 'NextJS'},
  {href: 'https://graphql.org/', src: graphqlLogo.src, alt: 'GraphQL'},
  {href: 'https://www.cypress.io/', src: cypressLogo.src, alt: 'Cypress'},
  {href: 'https://eslint.org/', src: eslintLogo.src, alt: 'ESLint'},
  {href: 'https://jestjs.io/', src: jestLogo.src, alt: 'Jest'},
  {
    href: 'https://tailwindcss.com/',
    src: tailwindcssLogo.src,
    alt: 'Tailwind CSS',
  },
  {
    href: 'https://www.typescriptlang.org/',
    src: typescriptLogo.src,
    alt: 'TypeScript',
  },
  {href: 'https://webpack.js.org/', src: webpackLogo.src, alt: 'Webpack'},
  {
    href: 'https://react-query.tanstack.com/',
    src: reactQueryLogo.src,
    alt: 'react-query',
  },
  {href: 'https://vitejs.dev/', src: viteLogo.src, alt: 'Vite'},
];

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
            <Link href="/services" passHref>
              <ButtonLink>
                <span>Tell Me More</span>
                <BsArrowDown className="text-2xl ml-2" />
              </ButtonLink>
            </Link>
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

    <LogoCarousel logos={logos} />
  </>
);

export default Home;
