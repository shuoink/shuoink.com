import {FC} from 'react';
import {Form} from 'react-final-form';
import {FORM_ERROR} from 'final-form';
import Button from './Button';
import {TextAreaField} from './TextAreaField';
import {TextField} from './TextField';
import Alert from './Alert';
import * as val from '../utils/validate';

const ContactForm: FC = () => {
  return (
    <Form<{name: string; email: string; message: string}>
      onSubmit={async ({name, email, message}) => {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email, message}),
        });
        if (!response.ok) {
          return {
            [FORM_ERROR]: 'There was an error sending your message.',
          };
        }
      }}
      render={({handleSubmit, submitError, submitFailed, submitSucceeded}) =>
        submitSucceeded ? (
          <Alert type="success">You Did it!</Alert>
        ) : (
          <form className="space-y-4" noValidate onSubmit={handleSubmit}>
            <TextField name="name" displayName="Name" validate={val.required} />
            <TextField
              name="email"
              displayName="Email"
              type="email"
              validate={val.compose(val.required, val.email)}
            />
            <TextAreaField name="message" displayName="Message" validate={val.required} />

            {submitFailed && <Alert type="error">{submitError}</Alert>}

            <Button type="submit">Send</Button>
          </form>
        )
      }
    />
  );
};

export default ContactForm;
