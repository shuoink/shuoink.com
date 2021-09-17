import Head from 'next/head';
import Image from 'next/image';
import {BsArrowRight, BsArrowDown} from 'react-icons/bs';
import ButtonLink from '../components/ButtonLink';
import stephen from '../../public/images/stephen.jpg';
import ContactForm from '../components/ContactForm';
import HyperLink from '../components/HyperLink';
import TiltedImageSection from '../components/TiltedImageSection';
import FullImageSectionWithSlant from '../components/FullImageSectionWithSlant';
import lightbulbs from '../../public/images/lightbulb.jpg';
import Masonry from '../components/Masonry';
import Tile from '../components/Tile';
import {FaGithub, FaPlay} from 'react-icons/fa';
import IconLink from '../components/IconLink';
import {Children, cloneElement, FC, isValidElement, MouseEvent} from 'react';
import {YEAR} from '../constants';
import sadiesDonuts from '../../public/images/portfolio/sadies-donuts.png';
import scriptureStudy from '../../public/images/portfolio/scripture-study.png';
import {RiSlideshow2Line} from 'react-icons/ri';
import ice from '../../public/images/portfolio/ice.png';
import nyse from '../../public/images/portfolio/nyse.png';
import ctaplan from '../../public/images/portfolio/ctaplan.png';
import esignal from '../../public/images/portfolio/esignal.png';
import globalotc from '../../public/images/portfolio/globalotc.png';
import mersinc from '../../public/images/portfolio/mersinc.png';
import patterns from '../../public/images/portfolio/patterns.png';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Slant from '../components/Slant';
import resize from '../utils/resize';

const HashLink: FC<{href: string}> = ({href, children}) => {
  const child = Children.only(children);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const node = document.querySelector(href);
    if (node) {
      (node as HTMLElement).scrollIntoView({
        behavior: 'smooth',
      });
    }
    history.pushState(null, '', href);
  };
  return isValidElement(child)
    ? cloneElement(child, {href, onClick: handleClick})
    : null;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen Sorensen - Custom Web Development</title>
        <meta
          name="description"
          content="I create custom websites with dynamic, interactive content, forms,
          integrated e-commerce, and engaging landing pages to help you
          reach your business goals."
        />
      </Head>
      <Section className="lg:py-16 bg-white">
        <div className="flex flex-col max-w-6xl px-4 mx-auto lg:flex-row sm:px-6 lg:px-8 items-center">
          <div className="flex-1 flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
            <Heading color="black">
              Reach more customers, build credibility, showcase your brand, and
              maximize your revenue.
            </Heading>
            <p className="w-4/6 lg:text-lg text-gray-600">
              I create custom websites with dynamic, interactive content, forms,
              integrated e-commerce, and engaging landing pages to help you
              reach your business goals.
            </p>
            <div className="flex flex-col w-full mt-6 space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row lg:px-0">
              <HashLink href="#contact">
                <ButtonLink>
                  <span>I&apos;m ready!</span>
                  <BsArrowRight className="text-2xl ml-2" />
                </ButtonLink>
              </HashLink>
              <HashLink href="#learn-more">
                <ButtonLink>
                  <span>Tell Me More</span>
                  <BsArrowDown className="text-2xl ml-2" />
                </ButtonLink>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="mb-[6vw]" />
      </Section>
      <div id="learn-more" />

      <Slant />

      <Section
        id="about"
        className="w-full mx-auto bg-white lg:rounded-md md:flex xl:w-10/12 overflow-hidden"
      >
        <div className="md:w-1/2">
          <div className="flex-1 relative aspect-w-1 aspect-h-1">
            <Image
              src={stephen}
              alt="me"
              layout="fill"
              objectFit="cover"
              {...resize(stephen, {width: 640})}
            />
          </div>
        </div>
        <div className="flex items-center flex-1">
          <div className="p-10 md:p-22 sm:p-16 space-y-4">
            <Heading>Who is this guy?</Heading>
            <p className="leading-loose text-black xxl:text-xl">
              Hi, I&apos;m Stephen Sorensen. I make web sites. In fact,
              I&apos;ve been creating web sites for nearly 30 years now.
            </p>
            <p className="leading-loose text-black xxl:text-xl">
              I started early, as a teenager, and have been passionate about web
              development ever since. I&apos;ve spent the last{' '}
              {Math.round((Date.now() - new Date(2014, 0, 2).getTime()) / YEAR)}{' '}
              years working as a Senior/Lead Frontend Developer for{' '}
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
                className="text-brand-orange underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The New York Stock Exchange
              </HyperLink>
              , where I built and maintained an in-house content management
              system and countless React components used to create many
              high-traffic web sites.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="portfolio"
        className="w-full mx-auto rounded-md xl:w-10/12 lg:my-32 p-10 lg:p-0 space-y-4
        "
      >
        <Heading>Portfolio</Heading>
        <Masonry columns={5}>
          <Tile
            src={sadiesDonuts}
            href="https://sadies-donut-shop.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Sadie's Donut Shop Screenshot"
            body="This was an experimental design I created using Next.JS."
            title="Sadie's Donut Shop"
            footer={
              <>
                <IconLink
                  href="https://github.com/spudly/sadies-donut-shop"
                  ariaLabel="sadies-donut-shop repository on GitHub"
                >
                  <FaGithub />
                </IconLink>
                <div>Sep 2021</div>
              </>
            }
          />
          <Tile
            src={scriptureStudy}
            href="https://scripture-study.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            alt="scripture-study app screenshot"
            body="A web application I created for personal use. It allows you to highlight pieces of text to indicate whose words they are."
            title="Scripture.Study"
            footer={
              <>
                <IconLink
                  href="https://github.com/spudly/scripture.study"
                  ariaLabel="scripture.study repository on GitHub"
                >
                  <FaGithub />
                </IconLink>
              </>
            }
          />

          <Tile
            href="https://github.com/spudly/eslint-config"
            target="_blank"
            rel="noopener noreferrer"
            alt="@spudly/eslint-config screenshot"
            body="This is a shareable configuration for ESLint, a tool for checking and enforcing best practices. This helps to ensure that the code I write is high quality."
            title="@spudly/eslint-config"
            footer={
              <>
                <IconLink
                  href="https://github.com/spudly/eslint-config"
                  ariaLabel="eslint-config repository on GitHub"
                >
                  <FaGithub />
                </IconLink>
              </>
            }
          />
          <Tile
            href="https://github.com/spudly/pushpop"
            target="_blank"
            rel="noopener noreferrer"
            alt="pushpop screenshot"
            title="@spudly/pushpop"
            body="A function library for reusing common functions."
            footer={
              <>
                <IconLink
                  href="https://github.com/spudly/pushpop"
                  ariaLabel="pushpop repository on GitHub"
                >
                  <FaGithub />
                </IconLink>
              </>
            }
          />
          <Tile
            href="https://github.com/spudly/talk-like-a-pirate"
            target="_blank"
            rel="noopener noreferrer"
            alt="talk-like-a-pirate screenshot"
            body="This be a JavaScript library to alter text to make like a pirate be talking. Yo ho!"
            title="talk-like-a-pirate"
            footer={
              <>
                <IconLink
                  href="https://github.com/spudly/talk-like-a-pirate"
                  ariaLabel="talk-like-a-pirate repository on GitHub"
                >
                  <FaGithub />
                </IconLink>
              </>
            }
          />
          <Tile
            href="https://github.com/spudly/strip-brackets"
            target="_blank"
            rel="noopener noreferrer"
            alt="strip-brackets screenshot"
            body="A utility for removing unnecessary brackets from a string of text"
            title="strip-brackets"
            footer={
              <>
                <IconLink
                  href="https://github.com/spudly/strip-brackets"
                  ariaLabel="strip-brackets repository on GitHub"
                >
                  <FaGithub />
                </IconLink>
              </>
            }
          />
          <Tile
            href="https://react-patterns.stephensorensen.com/AdvancedReactDesignPatterns"
            target="_blank"
            rel="noopener noreferrer"
            src={patterns}
            alt="advanced-react-design-patterns screenshot"
            body="This was a talk I gave at Connect.Tech, a frontend development conference held annually in Atlanta, GA."
            title="advanced-react-design-patterns"
            footer={
              <>
                <div className="flex">
                  <IconLink
                    href="https://github.com/spudly/scripture.study"
                    ariaLabel="scripture.study repository on GitHub"
                  >
                    <FaGithub />
                  </IconLink>
                  <IconLink
                    href="https://github.com/spudly/scripture.study"
                    ariaLabel="Presentation"
                  >
                    <RiSlideshow2Line />
                  </IconLink>
                  <IconLink
                    href="https://github.com/spudly/scripture.study"
                    ariaLabel="Video of Talk"
                  >
                    <FaPlay />
                  </IconLink>
                </div>
                <div>Oct 2019</div>
              </>
            }
          />

          <Tile
            href="https://ice.com/"
            target="_blank"
            rel="noopener noreferrer"
            src={ice}
            alt="ice.com screenshot"
            title="ice.com"
            body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for Intercontinental Exchange, Inc."
            footer={
              <>
                <div className="text-xs">Intercontinental Exchange, Inc.</div>
              </>
            }
          />

          <Tile
            href="https://nyse.com/"
            target="_blank"
            rel="noopener noreferrer"
            src={nyse}
            alt="nyse.com screenshot"
            title="nyse.com"
            body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for the New York Stock Exchange."
            footer={
              <>
                <div className="text-xs">Intercontinental Exchange, Inc.</div>
              </>
            }
          />
          <Tile
            href="https://ctaplan.com"
            target="_blank"
            rel="noopener noreferrer"
            src={ctaplan}
            alt="ctaplan.com screenshot"
            body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for the Consolidated Tape Association."
            title="ctaplan.com"
            footer={
              <>
                <div className="text-xs">Intercontinental Exchange, Inc.</div>
              </>
            }
          />
          <Tile
            href="https://esignal.com/"
            target="_blank"
            rel="noopener noreferrer"
            src={esignal}
            alt="esignal.com screenshot"
            body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for eSignal."
            title="esignal.com"
            footer={
              <>
                <div className="text-xs">Intercontinental Exchange, Inc.</div>
              </>
            }
          />
          <Tile
            href="https://globalotc.com/"
            target="_blank"
            rel="noopener noreferrer"
            src={globalotc}
            alt="globalotc.com screenshot"
            body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for GlobalOTC."
            title="globalotc.com"
            footer={
              <>
                <div className="text-xs">Intercontinental Exchange, Inc.</div>
              </>
            }
          />
          <Tile
            href="https://mersinc.org/"
            target="_blank"
            rel="noopener noreferrer"
            src={mersinc}
            alt="mersinc.org screenshot"
            body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for MERS."
            title="mersinc.org"
            footer={
              <>
                <div className="text-xs">Intercontinental Exchange, Inc.</div>
              </>
            }
          />
        </Masonry>
      </Section>

      <FullImageSectionWithSlant src={lightbulbs} alt="lightbulbs">
        <blockquote className="text-4xl font-medium md:text-5xl before:content-[open-quote] after:content-[close-quote] md:leading-tight">
          I haven&apos;t had my first freelance client yet, but when I do,
          there&apos;s going to be a rockstar testimonial here!
        </blockquote>
        <p className="pt-8 text-xl md:text-2xl">&mdash; Me, LOL</p>
      </FullImageSectionWithSlant>

      <Section
        id="contact"
        className="py-16 bg-gray-100 p-10 md:p-22 sm:p-16 space-y-4"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <Heading>Contact</Heading>
            <p className="mb-4">
              Need a website, or changes to an existing one? Tell me how I can
              help!
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
