import {useState} from 'react';
import Button from '../components/Button';
import Corset from '../components/Corset';
import {TextField} from '../components/TextField';
import {TextAreaField} from '../components/TextAreaField';
import Script from 'next/script';
import Head from 'next/head';
import {Form} from 'react-final-form';
import ContactForm from '../components/ContactForm';
import Heading from '../components/Heading';
import Slide from '../components/Slide';
import ScreenCenter from '../components/ScreenCenter';
import Grid from '../components/Grid';

const Contact = () => (
  <>
    <Head>
      <title>Stephen Sorensen - Contact</title>
      <meta name="description" content="Contact Stephen Sorensen" />
    </Head>
    <ScreenCenter>
      <Grid>
        <div className="col-span-6 self-center">
          <Heading level={1}>Contact</Heading>
        </div>
        <div className="col-span-6 self-center">
          <ContactForm />
        </div>
      </Grid>
    </ScreenCenter>
  </>
);

export default Contact;
