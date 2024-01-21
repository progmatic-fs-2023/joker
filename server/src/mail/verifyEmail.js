import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSW,
  },
});

const message = {
  from: 'Herbalism.hu <info@herbalism.hu>',
  to: '',
  subject: 'Regisztráció megerősítés',
  text: 'Kedves XYZ! A regisztrációd megerősítését az alábbi linkre kattintva tudod megtenni: ... link',
};

function mailer(email) {
  transporter.sendMail(email, (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent!', success.response);
      transporter.close();
    }
  });
  return null;
}

mailer(message);
