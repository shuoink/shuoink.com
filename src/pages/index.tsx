import Head from 'next/head';
import Image from 'next/image';
import {FaGithub, FaTwitter} from 'react-icons/fa';
import Link from 'next/link';
import Corset from '../components/Corset';
import ButtonLink from '../components/ButtonLink';
import Strong from '../components/Strong';
import Slide from '../components/Slide';
import Polaroid from '../components/Polaroid';
import Heading from '../components/Heading';
import bg from '../../public/images/laptop.jpg';
import Grid from '../components/Grid';
import ScreenCenter from '../components/ScreenCenter';
import stephen from '../../public/images/stephen.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen Sorensen</title>
        <meta
          name="description"
          content="custom web development for your business"
        />
      </Head>
      <ScreenCenter>
        <Grid>
          <div className="col-start-10 col-span-2 self-center lg:order-last">
            <div className="flex flex-col items-center">
              <Polaroid>
                <Image src={stephen} alt="me" />
              </Polaroid>
            </div>
          </div>
          <div className="col-span-8 self-center">
            <div className="flex flex-col justify-center items-start">
              <Heading level={1}>Stephen Sorensen</Heading>
              <p className="lg:text-justify text-2xl lg:text-4xl text-brand-orange py-8 leading-tight">
                I create websites with dynamic, interactive content, forms,
                integrated e-commerce, and engaging landing pages to help you
                reach more customers, build credibility, showcase your brand,
                and maximize your revenue.
              </p>
              <div className="w-full text-center sm:text-left">
                <Link href="/services" passHref>
                  <ButtonLink className="my-4">
                    Let&apos;s work together!
                  </ButtonLink>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </ScreenCenter>
    </>
  );
}
