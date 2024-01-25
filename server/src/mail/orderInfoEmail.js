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

function orderInfoEmail(receiver, orderedHerbs) {
  const message = {
    from: 'Herbalism.hu <info@herbalism.hu>',
    to: receiver,
    subject: 'Rendelés visszaigazolás',
    // text: `Kedves XYZ! Köszönjük, hogy nálunk vásárolsz! A rendelésed tételei egyesével a következők:`,
    html: `<h3 style="text-align: center, color: cadetblue" >Kedves ${orderedHerbs.customer}!</h3>
      <h5>Rendelés azonosító: ${orderedHerbs.orderId}</h5>
      <p>Köszönjük, hogy nálunk vásárolsz! Rendelésed részletei:</p>
      <div>
      ${orderedHerbs.map(
        herb =>
          `<ol>
        <li>Gyógynövény neve: ${herb.herbName}</li>
        <li>Mennyiség: ${herb.quantity} gramm</li>
        <li>Ár: ${herb.price} Ft/gramm</li>
        <li>Érték: ${herb.price * herb.quantity} Ft</li>
        </ol>`,
      )}
      </div>
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

export default orderInfoEmail;
