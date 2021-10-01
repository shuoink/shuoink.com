import Head from 'next/head';
import {BsArrowRight, BsArrowDown} from 'react-icons/bs';
import ButtonLink from '../components/ButtonLink';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Slant from '../components/Slant';
import Strong from '../components/Strong';
import About from '../content/About';
import Portfolio from '../content/Portfolio';
import Pricing from '../content/Pricing';
import HashLink from '../components/HashLink';
import {FaFacebookMessenger, FaTwitter} from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen Sorensen - Custom Web Development</title>
        <meta
          name="description"
          content="I create custom websites with dynamic, interactive content, forms, integrated e-commerce, and engaging landing pages to help you
          reach your business goals."
        />
      </Head>
      <Section className="lg:py-16 bg-white">
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
              <HashLink href="/#contact">
                <ButtonLink>
                  <span>I&apos;m ready!</span>
                  <BsArrowRight className="text-2xl ml-2" />
                </ButtonLink>
              </HashLink>
              <HashLink href="/#learn-more">
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

      <About />

      <Portfolio />

      {/* <FullImageSectionWithSlant src={lightbulbs} alt="lightbulbs">
        <blockquote className="text-4xl font-medium md:text-5xl before:content-[open-quote] after:content-[close-quote] md:leading-tight">
          I haven&apos;t had my first freelance client yet, but when I do,
          there&apos;s going to be a rockstar testimonial here!
        </blockquote>
        <p className="pt-8 text-xl md:text-2xl">&mdash; Me, LOL</p>
      </FullImageSectionWithSlant> */}

      <Pricing />

      <Section
        id="contact"
        className="py-16 bg-gray-100 p-10 md:p-22 sm:p-16 space-y-4"
      >
        <div className="max-w-xl mx-auto">
          <Heading center>Contact</Heading>
          <p className="mb-4 text-center">
            Need a website, or changes to an existing one? Send me a message on
            your favorite social media platform or fill out the form below!
          </p>
          <div className="text-center">
            <a
              target="_blank"
              href="https://twitter.com/messages/compose?recipient_id=266518162"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-l-full rounded-r-full bg-[#1d9bf0] hover:bg-[#0c7abf] px-4 py-2 text-white"
              onClick={() => window.dataLayer.push({event: 'twitter-dm-click'})}
            >
              <FaTwitter className="mr-2" />
              <span>Twitter</span>
            </a>{' '}
            <a
              target="_blank"
              href="http://m.me/stephenjohnsorensen"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-l-full rounded-r-full bg-[#2D88FF] hover:bg-[#4294ff] px-4 py-2 text-white"
              onClick={() =>
                window.dataLayer.push({event: 'facebook-messenger-click'})
              }
            >
              <FaFacebookMessenger className="mr-2" />
              <span>Facebook Messenger</span>
            </a>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
