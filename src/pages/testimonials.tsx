import Head from 'next/head';
import Link from 'next/link';
import ButtonLink from '../components/LinkButton';

const Testimonials = () => (
  <div>
    <Head>
      <title>Stephen Sorensen - Testimonials</title>
      <meta name="description" content="Stephen Sorensen - Testimonials" />
    </Head>
    <Link href="/contact" passHref>
      <ButtonLink className="my-4">Get Started</ButtonLink>
    </Link>
  </div>
);

export default Testimonials;
