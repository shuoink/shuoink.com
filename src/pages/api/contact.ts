import type {NextApiHandler} from 'next';
import sgMail from '@sendgrid/mail';
import {EMAIL_ADDRESS, SENDGRID_API_KEY} from '../../constants';
import type {ContactRequestBody} from '../../types';

sgMail.setApiKey(SENDGRID_API_KEY);

const contact: NextApiHandler = async (request, resp) => {
  try {
    const {name, email, message, phone, contactMethod} =
      request.body as ContactRequestBody;

    await sgMail.send({
      to: EMAIL_ADDRESS,
      from: EMAIL_ADDRESS,
      subject: 'shuoink.com contact form',
      replyTo: email,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Contact Method: ${contactMethod}
Message: ${message}`,
    });

    resp.status(204).end();
  } catch (error: unknown) {
    resp.status(500).json({error: (error as Error).message});
  }
};

export default contact;
