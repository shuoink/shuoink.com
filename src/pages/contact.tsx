import {useState} from 'react';
import Button from '../components/Button';
import Corset from '../components/Corset';
import {TextField} from '../components/TextField';
import {TextAreaField} from '../components/TextAreaField';
import Script from 'next/script';
import Head from 'next/head';
import {Form} from 'react-final-form';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <>
    <Head>
      <title>Stephen Sorensen - Contact</title>
      <meta name="description" content="Contact Stephen Sorensen" />
    </Head>
    <Corset>
      <h1 className="text-4xl font-bold mt-10 mb-8 sm:mt-14 sm:mb-10 text-gray-900">Contact</h1>
      <ContactForm />
    </Corset>
  </>
);

export default Contact;
