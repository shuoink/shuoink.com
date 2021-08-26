import Head from 'next/head';
import Link from 'next/link';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import ButtonLink from '../components/ButtonLink';
import Slide from '../components/Slide';
import HyperLink from '../components/HyperLink';
import ScreenCenter from '../components/ScreenCenter';

const About = () => (
  <>
    <Head>
      <title>Stephen Sorensen - About Me</title>
      <meta
        name="description"
        content="Stephen Sorensen creates web sites for your business"
      />
    </Head>
    <ScreenCenter>
      <Grid>
        <div className="col-span-6 self-center">
          <Heading level={1}>About Me</Heading>
        </div>
        <div className="col-span-6 self-center space-y-4 leading-relaxed text-2xl">
          <p>
            Hi, I&apos;m Stephen. I make web sites. In fact, I&apos;ve been
            creating web sites for nearly 30 years now.
          </p>
          <p>
            I started early, as a teenager, and have been passionate about web
            development ever since. I&apos;ve spent the last 8 years working as
            a Senior/Lead Frontend Developer for{' '}
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
            , where I built and maintained an in-house content management system
            and countless react components used to create those and many other
            high-traffic web sites.
          </p>
          <div className="text-center sm:text-left">
            <Link href="/contact" passHref>
              <ButtonLink className="my-4">Let&apos;s Work Together</ButtonLink>
            </Link>
          </div>
        </div>
      </Grid>
    </ScreenCenter>
  </>
);

export default About;
