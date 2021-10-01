import Image from 'next/image';
import Masonry from '../components/Masonry';
import Tile from '../components/Tile';
import {FaGithub, FaPlay} from 'react-icons/fa';
import IconLink from '../components/IconLink';
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
import resize from '../utils/resize';
import {VFC} from 'react';

const Portfolio: VFC = () => (
  <Section
    id="portfolio"
    className="w-full mx-auto rounded-md xl:w-10/12 lg:my-32 p-10 lg:p-0 space-y-4
        "
  >
    <Heading center>Portfolio</Heading>
    <Masonry columns={5}>
      <Tile
        img={
          <Image
            src={sadiesDonuts}
            alt="Sadie's Donut Shop Screenshot"
            {...resize(sadiesDonuts, {width: 350})}
          />
        }
        href="https://sadies-donut-shop.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
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
        img={
          <Image
            src={scriptureStudy}
            alt="scripture-study app screenshot"
            {...resize(scriptureStudy, {width: 350})}
          />
        }
        href="https://scripture-study.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
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
        img={
          <Image
            src={patterns}
            alt="advanced-react-design-patterns screenshot"
            {...resize(patterns, {width: 350})}
          />
        }
        href="https://react-patterns.stephensorensen.com/AdvancedReactDesignPatterns"
        target="_blank"
        rel="noopener noreferrer"
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
        img={
          <Image
            src={ice}
            alt="ice.com screenshot"
            {...resize(ice, {width: 350})}
          />
        }
        href="https://ice.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="ice.com"
        body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for Intercontinental Exchange, Inc."
        footer={
          <>
            <div className="text-xs">Intercontinental Exchange, Inc.</div>
          </>
        }
      />

      <Tile
        img={
          <Image
            src={nyse}
            alt="nyse.com screenshot"
            {...resize(nyse, {width: 350})}
          />
        }
        href="https://nyse.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="nyse.com"
        body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for the New York Stock Exchange."
        footer={
          <>
            <div className="text-xs">Intercontinental Exchange, Inc.</div>
          </>
        }
      />
      <Tile
        img={
          <Image
            src={ctaplan}
            alt="ctaplan.com screenshot"
            {...resize(ctaplan, {width: 350})}
          />
        }
        href="https://ctaplan.com"
        target="_blank"
        rel="noopener noreferrer"
        body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for the Consolidated Tape Association."
        title="ctaplan.com"
        footer={
          <>
            <div className="text-xs">Intercontinental Exchange, Inc.</div>
          </>
        }
      />
      <Tile
        img={
          <Image
            src={esignal}
            alt="esignal.com screenshot"
            {...resize(esignal, {width: 350})}
          />
        }
        href="https://esignal.com/"
        target="_blank"
        rel="noopener noreferrer"
        body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for eSignal."
        title="esignal.com"
        footer={
          <>
            <div className="text-xs">Intercontinental Exchange, Inc.</div>
          </>
        }
      />
      <Tile
        img={
          <Image
            src={globalotc}
            alt="globalotc.com screenshot"
            {...resize(globalotc, {width: 350})}
          />
        }
        href="https://globalotc.com/"
        target="_blank"
        rel="noopener noreferrer"
        body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for GlobalOTC."
        title="globalotc.com"
        footer={
          <>
            <div className="text-xs">Intercontinental Exchange, Inc.</div>
          </>
        }
      />
      <Tile
        img={
          <Image
            src={mersinc}
            alt="mersinc.org screenshot"
            {...resize(mersinc, {width: 350})}
          />
        }
        href="https://mersinc.org/"
        target="_blank"
        rel="noopener noreferrer"
        body="I created and maintained the internal CMS system, React components, and CSS styles used to create the website for MERS."
        title="mersinc.org"
        footer={
          <>
            <div className="text-xs">Intercontinental Exchange, Inc.</div>
          </>
        }
      />
      <Tile
        href="https://github.com/spudly/eslint-config"
        target="_blank"
        rel="noopener noreferrer"
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
    </Masonry>
  </Section>
);

export default Portfolio;
