import Head from 'next/head';
import Link from 'next/link';
import ButtonLink from '../components/LinkButton';

const About = () => (
  <div>
    <Head>
      <title>Stephen Sorensen - About Me</title>
      <meta name="description" content="Stephen Sorensen creates web sites for your business" />
    </Head>
    <Link href="/contact" passHref>
      <ButtonLink className="my-4">Let&apos;s Work Together</ButtonLink>
    </Link>
  </div>
);

export default About;
