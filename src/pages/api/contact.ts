import {NextApiHandler} from 'next';
import {EMAIL_ADDRESS, SENDGRID_API_KEY} from '../../constants';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(SENDGRID_API_KEY);

const contact: NextApiHandler = async (req, resp) => {
  try {
    const {name, email, message} = req.body;

    await sgMail.send({
      to: EMAIL_ADDRESS,
      from: EMAIL_ADDRESS,
      subject: 'shuoink.com contact form',
      replyTo: email,
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    });

    resp.status(204).end();
  } catch (e) {
    resp.status(500).json({error: e.message});
  }
};

export default contact;
