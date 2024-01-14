import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useCart } from '../hooks/useCart';
import {API_URL} from '../constants';

function UserForm() {
  const { cart, orderId } = useCart();
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentOrderID = orderId;
    // Send data to the backend
    const response = await fetch(`${API_URL}/orders/finalizeOrder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID: currentOrderID }), // use here the actual orderID
    });

    if (!response.ok) {
      throw new Error('Hiba történt a rendelés véglegesítése során.');
    }

    // after successful order we navigate to successfulorder page
    navigate('/successfulorder');
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="form-container">
            <form className="shipping-form">
              <h3>Kapcsolattartási adatok</h3>
              <div className="input-container">
                <label htmlFor="first-name">
                  Keresztnév
                  <input
                    type="text"
                    id="first-name"
                    className="input-field first-name"
                    onChange={handleChange}
                    name="firstName"
                    placeholder="Keresztnév"
                    required
                  />
                </label>
              </div>
              <div className="input-container">
                <label htmlFor="last-name">
                  Vezetéknév
                  <input
                    type="text"
                    id="last-name"
                    className="input-field last-name"
                    onChange={handleChange}
                    name="lastName"
                    placeholder="Vezetéknév"
                    required
                  />
                </label>
              </div>
              <div className="input-container">
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    className="input-field email"
                    name="email"
                    placeholder="pl.:felhasznalo@joker.com"
                    required
                  />
                </label>
              </div>
              <div className="input-container">
                <label htmlFor="phone-number">
                  Telefonszám
                  <input
                    type="tel"
                    id="phone-number"
                    className="input-field phone-number"
                    onChange={handleChange}
                    name="phoneNumber"
                    placeholder="06201234567"
                    required
                  />
                </label>
              </div>

              <h3>Szállítási cím</h3>
              <div className="input-container">
                <label htmlFor="adress">
                  Cím
                  <input
                    type="text"
                    id="adress"
                    className="input-field adress"
                    onChange={handleChange}
                    name="adress"
                    placeholder="utca, házszám, emelet, ajtó"
                    required
                  />
                </label>
              </div>
              <div className="input-container">
                <label htmlFor="zip-code">
                  Irányítószám
                  <input
                    type="text"
                    id="zip-code"
                    className="input-field zip"
                    onChange={handleChange}
                    name="zipCode"
                    required
                  />
                </label>
              </div>
              <div className="input-container">
                <label htmlFor="city">
                  Város
                  <input
                    type="text"
                    id="city"
                    className="input-field city"
                    onChange={handleChange}
                    name="city"
                    required
                  />
                </label>
              </div>
              <div className="input-container">
                <label htmlFor="country">
                  Ország
                  <input
                    type="text"
                    id="country"
                    className="input-field country"
                    onChange={handleChange}
                    name="country"
                    required
                  />
                </label>
              </div>
              <div className="customer-checkbox">
                <input type="checkbox" name="aszf" id="terms_id" required />
                <label htmlFor="terms_id">
                  Elfogadom az{' '}
                  <a href="https://www.pirex.hu/vasarloi-informaciok/altalanos-szerzodesi-feltetelek?gad_source=1&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT8ZsTGLKcxaORLwHmrTAcUrmSukmUj_yWUI1eL-d5gPV6wcHkjvbEMaArW-EALw_wcB">
                    {/* we create our own here  */}
                    általános szerződési feltételeket.
                  </a>
                </label>
              </div>
            </form>
            <Button type="submit" onClick={handleSubmit}>
              Rendelés megerősítése
            </Button>
          </div>
        </Col>
        <Col md={6}>
          {cart.length > 0 && (
            <>
              <h3>Rendelt termékek</h3>
              <ListGroup>
                {cart.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <img
                      src={item.image[0]}
                      alt={item.herbName}
                      style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '10px' }}
                      className="img-fluid"
                    />
                    {item.herbName} - {item.quantity}gr - Ár: {item.price * item.quantity} Ft
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserForm;
