import Image from 'next/image';
import {FaGithub, FaPlay} from 'react-icons/fa';
import {RiSlideshow2Line} from 'react-icons/ri';
import type {VFC} from 'react';
import {format} from 'date-fns';
import Masonry from '../components/Masonry';
import Card from '../components/Card';
import IconLink from '../components/IconLink';
import sadiesDonuts from '../../public/images/portfolio/sadies-donuts.png';
import scriptureStudy from '../../public/images/portfolio/scripture-study.png';
import ice from '../../public/images/portfolio/ice.png';
import nyse from '../../public/images/portfolio/nyse.png';
import ctaplan from '../../public/images/portfolio/ctaplan.png';
import esignal from '../../public/images/portfolio/esignal.png';
import globalotc from '../../public/images/portfolio/globalotc.png';
import mersinc from '../../public/images/portfolio/mersinc.png';
import patterns from '../../public/images/portfolio/patterns.png';
import Section from '../components/Section';
import Heading from '../components/Heading';
import MetaTags from '../components/MetaTags';

type PortfolioItem = {
  id: string;
  src: StaticImageData;
  alt: string;
  url: string;
  description: string;
  title: string;
  sourceCodeUrl?: string;
  slidesUrl?: string;
  playUrl?: string;
  date?: Date;
};

const items: Array<PortfolioItem> = [
  {
    id: '0',
    src: sadiesDonuts,
    alt: "Sadie's Donut Shop Screenshot",
    url: 'https://sadies-donut-shop.vercel.app/',
    description: 'This was an experimental design I created using Next.JS.',
    title: "Sadie's Donut Shop",
    sourceCodeUrl: 'https://github.com/spudly/sadies-donut-shop',
    date: new Date(2021, 8),
  },
  {
    id: '1',
    src: scriptureStudy,
    alt: 'scripture-study app screenshot',
    url: 'https://scripture-study.herokuapp.com/',
    description:
      'A web application I created for personal use. It allows you to highlight pieces of text to indicate whose words they are.',
    title: 'Scripture.Study',
    sourceCodeUrl: 'https://github.com/spudly/scripture.study',
  },
  {
    id: '2',
    src: patterns,
    alt: 'advanced-react-design-patterns screenshot',
    url: 'https://react-patterns.stephensorensen.com/AdvancedReactDesignPatterns',
    description:
      'This was a talk I gave at Connect.Tech, a frontend development conference held annually in Atlanta, GA.',
    title: 'advanced-react-design-patterns',
    sourceCodeUrl: 'https://github.com/spudly/advanced-react-design-patterns', // TODO: this is wrong
    slidesUrl: 'https://react-patterns.stephensorensen.com/', // TODO: this is wrong
    playUrl:
      'https://www.recallact.com/presentation/advanced-react-design-patterns',
    date: new Date(2019, 9),
  },
  {
    id: '3',
    src: ice,
    alt: 'ice.com screenshot',
    url: 'https://ice.com/',
    title: 'ice.com',
    description:
      'I created and maintained the internal CMS system, React components, and CSS styles used to create the website for ,Intercontinental Exchange, Inc.',
  },
  {
    id: '4',
    src: nyse,
    alt: 'nyse.com screenshot',
    url: 'https://nyse.com/',
    title: 'nyse.com',
    description:
      'I created and maintained the internal CMS system, React components, and CSS styles used to create the website for the New York Stock Exchange.',
  },
  {
    id: '5',
    src: ctaplan,
    alt: 'ctaplan.com screenshot',
    url: 'https://ctaplan.com',
    description:
      'I created and maintained the internal CMS system, React components, and CSS styles used to create the website for the ,Consolidated Tape Association.',
    title: 'ctaplan.com',
  },
  {
    id: '6',
    src: esignal,
    alt: 'esignal.com screenshot',
    url: 'https://esignal.com/',
    description:
      'I created and maintained the internal CMS system, React components, and CSS styles used to create the website for eSignal.',
    title: 'esignal.com',
  },
  {
    id: '7',
    src: globalotc,
    alt: 'globalotc.com screenshot',
    url: 'https://globalotc.com/',
    description:
      'I created and maintained the internal CMS system, React components, and CSS styles used to create the website for GlobalOTC.',
    title: 'globalotc.com',
  },
  {
    id: '8',
    src: mersinc,
    alt: 'mersinc.org screenshot',
    url: 'https://mersinc.org/',
    description:
      'I created and maintained the internal CMS system, React components, and CSS styles used to create the website for MERS.',
    title: 'mersinc.org',
  },
];

const Portfolio: VFC = () => {
  return (
    <>
      <MetaTags
        title="Portfolio"
        description="Stephen Sorensen's Web Development Portfolio"
        pathname="/portfolio"
      />
      <Section
        id="portfolio"
        className="w-full mx-auto rounded-md xl:w-10/12 lg:my-32 p-10 lg:p-0 space-y-4"
      >
        <Heading center>Portfolio</Heading>
        <Masonry>
          {items.map(item => (
            <Card
              key={item.id}
              media={<Image src={item.src} alt={item.alt} />}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              body={item.description}
              title={item.title}
              footer={
                <>
                  {item.sourceCodeUrl && (
                    <IconLink
                      href={item.sourceCodeUrl}
                      ariaLabel={`Source Code for ${item.title}`}
                    >
                      <FaGithub />
                    </IconLink>
                  )}
                  {item.slidesUrl && (
                    <IconLink
                      href={item.slidesUrl}
                      ariaLabel="Presentation Slides"
                    >
                      <RiSlideshow2Line />
                    </IconLink>
                  )}
                  {item.playUrl && (
                    <IconLink href={item.playUrl} ariaLabel="Play">
                      <FaPlay />
                    </IconLink>
                  )}
                  {item.date && <div>{format(item.date, 'MMM yyyy')}</div>}
                </>
              }
            />
          ))}
        </Masonry>
      </Section>
    </>
  );
};

export default Portfolio;
