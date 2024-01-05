import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './UserForm.css';
import Cart from '../components/Cart';

function UserForm() {
  const navigate = useNavigate();
  const { cart } = useCart();
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
  const handleSubmit = () => {
    // Validation of form can be here
    // if everything is okay you can navigate to successfulorder page
    navigate('/successfulorder');
  };

  return (
    <div className="form-container flex flex-row justify-center p-5">
      <form className="shipping-form bg-emerald-400/10 py-5 pl-55 pr-5 flex flex-col h-full w-3/4 max-w-full items-start">
        <h3 className="p-10 text-center text-2xl">Kapcsolattartási adatok</h3>
        <div className="input-container flex flex-col">
          <label className="flex flex-col" htmlFor="first-name">
            Keresztnév
            <input
              type="text"
              id="first-name"
              className="input-field first-name p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="firstName"
              placeholder="Keresztnév"
              required
            />
          </label>
        </div>
        <div className="input-container flex flex-col">
          <label className="flex flex-col" htmlFor="last-name">
            Vezetéknév
            <input
              type="text"
              id="last-name"
              className="input-field last-name p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="lastName"
              placeholder="Vezetéknév"
              required
            />
          </label>
        </div>
        <div className="input-container flex flex-col">
          <label className=" flex flex-col" htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="input-field email p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              name="email"
              placeholder="pl.:felhasznalo@joker.com"
              required
            />
          </label>
        </div>
        <div className="input-container flex flex-col">
          <label className=" flex flex-col" htmlFor="phone-number">
            Telefonszám
            <input
              type="tel"
              id="phone-number"
              className="input-field phone-number p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="phoneNumber"
              placeholder="06201234567"
              required
            />
          </label>
        </div>

        <h3 className="p-10 text-center text-2xl">Szállítási cím</h3>
        <div className="input-container flex flex-col">
          <label className=" flex flex-col" htmlFor="adress">
            Cím
            <input
              type="text"
              id="adress"
              className="input-field adress p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="adress"
              placeholder="utca, házszám, emelet, ajtó"
              required
            />
          </label>
        </div>
        <div className="input-container flex flex-col">
          <label className="flex flex-col" htmlFor="zip-code">
            Irányítószám
            <input
              type="text"
              id="zip-code"
              className="input-field zip p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="zipCode"
              required
            />
          </label>
        </div>
        <div className="input-container flex flex-col">
          <label className="flex flex-col" htmlFor="city">
            Város
            <input
              type="text"
              id="city"
              className="input-field city p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="city"
              required
            />
          </label>
        </div>
        <div className="input-container flex flex-col">
          <label className="flex flex-col" htmlFor="country">
            Ország
            <input
              type="text"
              id="country"
              className="input-field country p-15 mx-15 mt-10 text-base rounded-md w-/5 border-zinc-400 border"
              onChange={handleChange}
              name="country"
              required
            />
          </label>
        </div>
        <div className="customer-checkbox flex flex-row">
          <input type="checkbox" name="aszf" id="terms_id" className="ml-15 mr-10" required />
          <label className="p-5 flex flex-row" htmlFor="terms_id">
            Elfogadom az{' '}
            <a href="https://www.pirex.hu/vasarloi-informaciok/altalanos-szerzodesi-feltetelek?gad_source=1&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT8ZsTGLKcxaORLwHmrTAcUrmSukmUj_yWUI1eL-d5gPV6wcHkjvbEMaArW-EALw_wcB">
              {/* ide majd generálunk egy sajátot  */}
              általános szerződési feltételeket.
            </a>
          </label>
        </div>
        <button
          type="button"
          className="pay-button self-center fullwidth p-10 m-5
        bg-emerald-500 hover:bg-emerald-600 rounded-md border-emerald-500 hover:border-emerald-600"
        >
          <p className="text-slate-200 hover:text-slate-200">Fizetés és megrendelés</p>
        </button>
      </form>
      {/* Cart and its content display */}
      {cart[0] && <Cart onCheckout={handleSubmit} />}
    </div>
  );
}

export default UserForm;
