import { useState } from 'react';
import './ShippingForm.css';

export default function ShippingForm() {
  const [form, setForm] = useState({
    firsName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    adress: '',
    zipCode: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <form className="shipping-form">
        <h3>Kapcsolattartási adatok</h3>

        <label htmlFor="first-name">Keresztnév</label>
        <input
          type="text"
          id="first-name"
          className="input-field first-name"
          onChange={handleChange}
          name="firstName"
          placeholder="Keresztnév"
          required
        />
        <label htmlFor="last-name">Vezetéknév</label>
        <input
          type="text"
          id="last-name"
          className="input-field last-name"
          onChange={handleChange}
          name="lastName"
          placeholder="Vezetéknév"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          className="input-field email"
          name="email"
          placeholder="pl.:felhasznalo@joker.com"
          required
        />
        <label htmlFor="phone-number">Telefonszám</label>
        <input
          type="tel"
          id="phone-number"
          className="input-field phone-number"
          onChange={handleChange}
          name="phoneNumber"
          placeholder="06201234567"
          required
        />
        <h3>Szállítási cím</h3>
        <label htmlFor="adress">Cím</label>
        <input
          type="text"
          id="adress"
          className="input-field adress"
          onChange={handleChange}
          name="adress"
          placeholder="utca, házszám, emelet, ajtó"
          required
        />
        <label htmlFor="zip-code">Irányítószám</label>
        <input
          type="text"
          id="zip-code"
          className="input-field zip"
          onChange={handleChange}
          name="zipCode"
          required
        />
        <label htmlFor="city">Város</label>
        <input
          type="text"
          id="city"
          className="input-field city"
          onChange={handleChange}
          name="city"
          required
        />
        <label htmlFor="country">Ország</label>
        <input
          type="text"
          id="country"
          className="input-field country"
          onChange={handleChange}
          name="country"
          required
        />
        <div className="customer-checkbox">
          <input type="checkbox" name="aszf" id="terms_id" required />
          <label htmlFor="terms_id">
            Elfogadom az{' '}
            <a href="https://www.pirex.hu/vasarloi-informaciok/altalanos-szerzodesi-feltetelek?gad_source=1&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT8ZsTGLKcxaORLwHmrTAcUrmSukmUj_yWUI1eL-d5gPV6wcHkjvbEMaArW-EALw_wcB">
              {/* ide majd generálunk egy sajátot  */}
              általános szerződési feltételeket
            </a>
            .
          </label>
        </div>
        <button className="pay-button fullwidth">Fizetés és megrendelés</button>
      </form>
      {/* <div>Ide jöhetne a jelenleg kosárban lévő termékek megjelenítése.</div> */}
    </div>
  );
}
