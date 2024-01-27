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

// test/verify connection configuration
// export function testConnection() {
//   transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//       return null
//     }
//   })
//   return null
// }

function verifyEmail(receiver, verifyString) {
  const message = {
    from: 'Herbalism.hu <info@herbalism.hu>',
    to: receiver,
    subject: 'Regisztráció megerősítés',
    // text: `Kedves XYZ! Köszönjük, hogy nálunk vásárolsz! A rendelésed tételei egyesével a következők:`,
    html: `<h3 style="text-align: center, color: cadetblue" >Kedves ${receiver}!</h3>
    <p>Köszönjük, hogy regisztráltál webshopunkba!</p>
    <p>A regisztrációd megerősítését a következő linkre kattintva tudod megtenni: <a href=http://localhost:3000/register/${verifyString}><strong>igen, regisztrálok!</strong></a></p>
    <p>Üdvözlettel: Herbalism.hu csapata</p>`,
  };
  transporter.sendMail(message, (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent!', success.response);
      transporter.close();
    }
  });
  return null;
}

export default verifyEmail;
