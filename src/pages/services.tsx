import Head from 'next/head';
import Link from 'next/link';
import {FC, ReactNode} from 'react';
import {FaCode} from 'react-icons/fa';
import Button from '../components/Button';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import ButtonLink from '../components/ButtonLink';
import Slide from '../components/Slide';
import HyperLink from '../components/HyperLink';
import ScreenCenter from '../components/ScreenCenter';

const Service: FC<{
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  cta: ReactNode;
}> = ({icon, title, description, cta}) => (
  <div className="flex flex-col sm:flex-row items-center">
    <div className="text-9xl">{icon}</div>
    <div className="flex flex-col sm:pl-12 items-start space-y-8">
      <Heading level={2}>{title}</Heading>
      <p className="text-2xl text-justify sm:text-left leading-relaxed">
        {description}{' '}
        <Link href="/contact" passHref>
          <HyperLink>{cta}</HyperLink>
        </Link>
      </p>
    </div>
  </div>
);

const Services = () => (
  <>
    <Head>
      <title>Stephen Sorensen - Services</title>
      <meta name="description" content="Stephen Sorensen - Services" />
    </Head>{' '}
    <ScreenCenter>
      <Grid>
        <div className="col-span-6 self-center">
          <Heading level={1}>Services</Heading>
        </div>
        <div className="col-span-6 self-center space-y-16">
          <Service
            icon={<FaCode />}
            title="Web Development"
            description="I specialize in creating web sites with dynamic, interactive content. Depending on your needs, this might include custom forms, CMS integration, e-commerce, or any number of other solutions to meet your needs."
            cta="Let's Talk"
          />
        </div>
      </Grid>
    </ScreenCenter>
  </>
);

export default Services;
