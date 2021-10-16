import type {VFC} from 'react';
import {IoLogoJavascript} from 'react-icons/io';
import {
  MdAccessibility,
  MdImportantDevices,
  MdOutlineTimer,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import {FaReact} from 'react-icons/fa';
import {RiListSettingsLine} from 'react-icons/ri';
import Link from 'next/link';
import MetaTags from '../components/MetaTags';
import Section from '../components/Section';
import Card from '../components/Card';
import ButtonLink from '../components/ButtonLink';

const Services: VFC = () => (
  <>
    <MetaTags
      title="Services"
      description="Services offered by Stephen Sorensen / Shuoink LLC"
      pathname="/services"
    />
    <Section className="w-full mx-auto rounded-md xl:w-10/12 lg:my-32 p-10 lg:p-0 space-y-4">
      <div className="flex flex-row justify-center flex-wrap">
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <MdImportantDevices className="inline-block text-secondary-400" />
            </div>
          }
          title="Custom Web Sites"
          body="I'll get you started with a professionally designed custom website built to your exact specifications."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{'Build My Website'}</ButtonLink>
              </Link>
            </div>
          }
        />
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <IoLogoJavascript className="inline-block text-secondary-400" />
            </div>
          }
          title="JavaScript Development"
          body="I've been writing JavaScript code for over 20 years. I've got a real passion for it. Whether you need someone to add new features or fix bugs, if you need a JavaScript expert, I'm your man."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{"Let's Go"}</ButtonLink>
              </Link>
            </div>
          }
        />
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <FaReact className="inline-block text-secondary-400" />
            </div>
          }
          title="ReactJS Development"
          body="React was barely six months old when I started using it in early 2014. I've been creating React components for a long time. I've even developed an entire content management system based on React. If you need a React developer, look no further."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{'I Need Components'}</ButtonLink>
              </Link>
            </div>
          }
        />
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <MdAccessibility className="inline-block text-secondary-400" />
            </div>
          }
          title="Accessibility Audit"
          body="Accessibility is hard to get right but critical for reaching as many people as possible. I'll do a full accessibility audit of your existing website using actual screen readers, not just automated tools. I'll generate a detailed report with suggestions and, if you want, I'll fix them all for you."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{'Expand Your Reach'}</ButtonLink>
              </Link>
            </div>
          }
        />
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <MdOutlineTimer className="inline-block text-secondary-400" />
            </div>
          }
          title="Performance Audit"
          body="Did you know that 40% of your users will leave your site if it takes longer than 3 seconds to load? When the success of your business depends on your website, performance has to be a top priority. I'll diagnose what's slowing you down and provide a detailed report with actionable steps you can take to speed things up. If you like, I'll fix them too."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{'Speed Me Up'}</ButtonLink>
              </Link>
            </div>
          }
        />
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <MdOutlineShoppingCart className="inline-block text-secondary-400" />
            </div>
          }
          title="E-Commerce Integration"
          body="Are you selling something? I can seamlessly integrate your website with leading e-commerce providers to provide an excellent shopping experience for your customers."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{'Set up Shop'}</ButtonLink>
              </Link>
            </div>
          }
        />
        <Card
          spaced
          media={
            <div className="text-9xl min-w-[300px] text-center">
              <RiListSettingsLine className="inline-block text-secondary-400" />
            </div>
          }
          title="CMS Integration"
          body="A content management system (CMS) makes it easy to add or edit the content of your website. I can seamlessly integrate your website with a top-rated CMS provider."
          footer={
            <div className="text-center w-full">
              <Link href="/contact" passHref>
                <ButtonLink>{'Make it Easy'}</ButtonLink>
              </Link>
            </div>
          }
        />
      </div>
    </Section>
  </>
);

export default Services;
