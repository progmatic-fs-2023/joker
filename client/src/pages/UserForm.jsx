import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { API_URL } from '../constants';
import Payment from './Payment';

function UserForm() {
  const { cart, orderId } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
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

    // after a successful order, we navigate to the successfulorder page
    navigate('/successfulorder');
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="form-container">
            <Form className="shipping-form" onSubmit={handleSubmit}>
              <h3>Kapcsolattartási adatok</h3>
              <Form.Group controlId="first-name">
                <Form.Label>Keresztnév</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Keresztnév"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="last-name">
                <Form.Label>Vezetéknév</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Vezetéknév"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="pl.: felhasznalo@joker.com"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone-number">
                <Form.Label>Telefonszám</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  placeholder="06201234567"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <h3>Szállítási cím</h3>
              <Form.Group controlId="address">
                <Form.Label>Cím</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="utca, házszám, emelet, ajtó"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="zip-code">
                <Form.Label>Irányítószám</Form.Label>
                <Form.Control type="text" name="zipCode" onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>Város</Form.Label>
                <Form.Control type="text" name="city" onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="country">
                <Form.Label>Ország</Form.Label>
                <Form.Control type="text" name="country" onChange={handleChange} required />
              </Form.Group>
              <Payment/>
              <Form.Group controlId="terms">
                <Form.Check
                  type="checkbox"
                  label="Elfogadom az általános szerződési feltételeket."
                  name="terms"
                  id="terms_id"
                  required
                />
              </Form.Group>
              
              <Button type="submit">Rendelés megerősítése</Button>
            </Form>
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
