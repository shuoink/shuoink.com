import Head from 'next/head';
import Image from 'next/image';
import {FaGithub, FaTwitter} from 'react-icons/fa';
import Link from 'next/link';
import Corset from '../components/Corset';
import ButtonLink from '../components/LinkButton';
import Strong from '../components/Strong';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen Sorensen</title>
        <meta name="description" content="custom web development for your business" />
      </Head>
      <Corset>
        <div className="sm:flex justify-around items-center sm:min-h-screen-3/4">
          <div className="flex-grow">
            <p className="text-4xl font-bold mt-10 mb-8 sm:mt-14 sm:mb-10 text-gray-900">
              Reach more customers, build credibility, showcase your brand, and generate more leads.
            </p>
            <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              Let&apos;s <Strong>maximize your revenue</Strong> with a modern web site custom-built
              for your business.
            </p>
            <div className="text-center lg:text-left">
              <Link href="/contact" passHref>
                {/* TODO: this should eventually link to /services */}
                <ButtonLink className="my-4">Tell Me More</ButtonLink>
              </Link>
            </div>
          </div>
          <div className="whitespace-nowrap mt-16 lg:mt-0">
            <div className="text-center">
              <Image
                src="https://www.gravatar.com/avatar/8db4c1b03b20a1b5614f8e4a2cfbc188?s=300"
                alt="me"
                width="300"
                height="300"
                className="rounded-full"
              />
              <p>
                <Strong>Stephen Sorensen</Strong>
              </p>
              <p>JavaScript Developer</p>
              <div>
                <a
                  href="https://twitter.com/shuoink"
                  aria-label="Twitter Profile"
                  className="inline-block m-2 border-gray-900 border-2 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-gray-100 rounded-full p-2 text-small duration-75"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/spudly"
                  aria-label="Github Profile"
                  className="inline-block m-2 border-gray-900 border-2 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-gray-100 rounded-full p-2 text-small duration-75"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* TODO: brand logos here */}
      </Corset>
    </>
  );
}
