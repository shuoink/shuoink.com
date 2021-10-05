import type {FC} from 'react';
import {Form} from 'react-final-form';
import {FORM_ERROR} from 'final-form';
import type {SetRequired} from 'type-fest';
import * as value from '../utils/validate';
import type {ContactRequestBody} from '../types';
import Button from './Button';
import {TextAreaField} from './TextAreaField';
import {TextField} from './TextField';
import Alert from './Alert';
import RadioFields from './RadiosField';
import RadioField from './RadioField';

type Values = {
  name?: string;
  message?: string;
  contactMethod?: 'email' | 'phone' | 'text';
  email?: string;
  phone?: string;
};

type ValidValues = SetRequired<Values, 'contactMethod' | 'message' | 'name'>;

const ContactForm: FC = () => {
  return (
    <Form<ValidValues>
      onSubmit={async ({
        name,
        contactMethod,
        email = '',
        phone = '',
        message,
      }) => {
        window.dataLayer.push({event: 'contact-submit'});
        const body: ContactRequestBody = {
          name,
          email,
          message,
          phone,
          contactMethod,
        };
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          return {
            [FORM_ERROR]: 'There was an error sending your message.',
          };
        }
      }}
      render={({
        handleSubmit,
        submitError,
        submitSucceeded,
        submitFailed,
        invalid,
      }) =>
        submitSucceeded ? (
          <Alert type="success">Thank you! Your message has been sent.</Alert>
        ) : (
          <form className="space-y-8" noValidate onSubmit={handleSubmit}>
            <TextField
              name="name"
              displayName="Name"
              validate={value.required}
            />

            <TextAreaField
              name="message"
              displayName="Message"
              rows={3}
              validate={value.required}
            />

            <TextField
              name="email"
              displayName="Email"
              type="email"
              validate={value.compose(
                value.conditional<string, Values>(
                  (_, all) => all.contactMethod === 'email',
                  value.required
                ),
                value.email
              )}
            />

            <TextField
              name="phone"
              displayName="Phone"
              type="tel"
              validate={value.compose(
                value.conditional<string, Values>(
                  (_, all) =>
                    all.contactMethod === 'phone' ||
                    all.contactMethod === 'text',
                  value.required
                )
              )}
            />

            <RadioFields
              name="contactMethod"
              displayName="How would you like to be contacted?"
              errorDisplayName="Contact Method"
              validate={value.required}
            >
              <div className="flex justify-between">
                <RadioField value="email" displayName="Email Me" />
                <RadioField value="text" displayName="Text Me" />
                <RadioField value="phone" displayName="Call Me" />
              </div>
            </RadioFields>

            {submitError != null ? (
              <Alert type="error">{submitError}</Alert>
            ) : submitFailed && invalid ? (
              <Alert type="error">Please correct the field errors above.</Alert>
            ) : null}

            <div className="text-center">
              <Button type="submit">Send</Button>
            </div>
          </form>
        )
      }
    />
  );
};

export default ContactForm;
