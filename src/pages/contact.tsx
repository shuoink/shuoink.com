import type {VFC} from 'react';
import {FaFacebookMessenger, FaTwitter} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import Heading from '../components/Heading';
import Section from '../components/Section';
import MetaTags from '../components/MetaTags';

const Contact: VFC = () => (
  <>
    <MetaTags
      title="Contact"
      description="Contact Stephen Sorensen / Shuoink LLC"
      pathname="/contact"
    />
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
            className="inline-flex items-center rounded-l-full rounded-r-full bg-[#1d9bf0] hover:bg-[#0c7abf] px-4 py-2 text-white m-2"
            onClick={() => window.dataLayer.push({event: 'twitter-dm-click'})}
          >
            <FaTwitter className="mr-2" />
            <span>Twitter</span>
          </a>
          <a
            target="_blank"
            href="http://m.me/shuoink"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-l-full rounded-r-full bg-[#2D88FF] hover:bg-[#4294ff] px-4 py-2 text-white m-2"
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

export default Contact;
