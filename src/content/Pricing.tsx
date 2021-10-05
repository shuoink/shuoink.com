import type {VFC} from 'react';
import ButtonLink from '../components/ButtonLink';
import HashLink from '../components/HashLink';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Tile from '../components/Tile';

const Basic: VFC<{pages?: number; revisions?: number}> = ({
  pages = 3,
  revisions = 2,
}) => (
  <>
    <li>Custom Web Design</li>
    <li>{pages} Pages</li>
    <li>{revisions} Revisions</li>
    <li>Domain Registration Support</li>
    <li>Hosting Support</li>
  </>
);

const Standard: VFC = () => (
  <>
    <li>Optimized for Accessibility</li>
    <li>Optimized for Performance</li>
    <li>Google Analytics Integration</li>
  </>
);

const Deluxe: VFC = () => (
  <>
    <li>Contact Form</li>
  </>
);

const Premium: VFC = () => (
  <>
    <li>CMS Integration or E-Commerce Integration</li>
    <li>Search Engine Optimization (SEO)</li>
  </>
);

const Pricing: VFC = () => (
  <Section
    id="pricing"
    className="xl:space-y-32 mx-auto xl:w-10/12 lg:my-32 p-10 lg:p-0"
  >
    <Heading center>Website Packages / Pricing</Heading>
    <div className="space-y-4 xl:space-y-0 xl:grid grid-cols-4 gap-20">
      <Tile
        title="Basic"
        body={
          <>
            <ul>
              <Basic />
            </ul>
          </>
        }
        footer={
          <>
            <span className="text-2xl">$2500</span>
            <HashLink href="/#contact">
              <ButtonLink>Let&apos;s Go</ButtonLink>
            </HashLink>
          </>
        }
      />
      <Tile
        title="Standard"
        body={
          <>
            <ul>
              <Basic pages={5} revisions={3} />
              <Standard />
            </ul>
          </>
        }
        footer={
          <>
            <span className="text-2xl">$2750</span>
            <HashLink href="/#contact">
              <ButtonLink>Let&apos;s Go</ButtonLink>
            </HashLink>
          </>
        }
      />
      <Tile
        title="Deluxe"
        body={
          <>
            <ul>
              <Basic pages={10} revisions={3} />
              <Standard />
              <Deluxe />
            </ul>
          </>
        }
        footer={
          <>
            <span className="text-2xl">$3000</span>
            <HashLink href="/#contact">
              <ButtonLink>Let&apos;s Go</ButtonLink>
            </HashLink>
          </>
        }
      />
      <Tile
        title="Premium"
        body={
          <>
            <ul>
              <Basic pages={20} revisions={5} />
              <Standard />
              <Deluxe />
              <Premium />
            </ul>
          </>
        }
        footer={
          <>
            <span className="text-2xl">$5000</span>
            <HashLink href="/#contact">
              <ButtonLink>Let&apos;s Go</ButtonLink>
            </HashLink>
          </>
        }
      />
    </div>
  </Section>
);

export default Pricing;
