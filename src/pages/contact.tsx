import {useState} from 'react';
import Button from '../components/Button';
import Corset from '../components/Corset';
import {TextField} from '../components/TextField';
import {TextAreaField} from '../components/TextAreaField';
import Script from 'next/script';
import Head from 'next/head';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'sending' | 'sent' | 'error' | null>(null);

  return (
    <>
      <Head>
        <title>Stephen Sorensen - Contact</title>
        <meta name="description" content="Contact Stephen Sorensen" />
      </Head>
      <Corset>
        <h1 className="text-4xl font-bold mt-10 mb-8 sm:mt-14 sm:mb-10 text-gray-900">Contact</h1>
        <form
          onSubmit={async e => {
            e.preventDefault();
            try {
              setStatus('sending');
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, message}),
              });
              if (!response.ok) {
                throw new Error('Request Failed :(');
              }
              const result = await response.json();
              setStatus('sent');
            } catch {
              setStatus('error');
            }
          }}
          className="space-y-4"
        >
          <TextField id="name" displayName="Name" value={name} setValue={setName} />
          <TextField
            id="email"
            displayName="Email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <TextAreaField
            id="message"
            displayName="How can I help you?"
            value={message}
            setValue={setMessage}
          />
          <Button type="submit">Send</Button>
        </form>
      </Corset>
    </>
  );
};

export default Contact;
