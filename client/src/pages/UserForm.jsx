import { useState, useEffect } from 'react';
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
import useAuth from '../hooks/useAuth';

function UserForm() {
  const { cart, orderId } = useCart();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { userId } = auth;
  const [userInfo, setUserInfo] = useState([]);
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

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch(`${API_URL}/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUserInfo(data);
      }
    };
    fetchUserInfo();
  }, [userId]);
  const UserInfo = userInfo;
  useEffect(() => {
    if (UserInfo != null) {
      setForm({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phoneNumber: userInfo.phone,
        address: userInfo.streetAddress,
        zipCode: userInfo.postalCode,
        city: userInfo.city,
        country: userInfo.country,
      });
    }
  }, [userInfo]);
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
              <h3 className="modifiedTextColor">Kapcsolattartási adatok</h3>
              <Form.Group controlId="first-name">
                <Form.Label className="modifiedTextColor">Keresztnév</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Keresztnév"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="last-name">
                <Form.Label className="modifiedTextColor">Vezetéknév</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Vezetéknév"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label className="modifiedTextColor">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="pl.: felhasznalo@joker.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone-number">
                <Form.Label className="modifiedTextColor">Telefonszám</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  placeholder="06201234567"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <h3 className="modifiedTextColor">Szállítási cím</h3>
              <Form.Group controlId="address">
                <Form.Label className="modifiedTextColor">Cím</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="utca, házszám, emelet, ajtó"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="zip-code">
                <Form.Label className="modifiedTextColor">Irányítószám</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label className="modifiedTextColor">Város</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="country">
                <Form.Label className="modifiedTextColor">Ország</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Payment />
              <Form.Group controlId="terms">
                <Form.Check
                  className="modifiedTextColor"
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
              <h3 className="modifiedTextColor">Rendelt termékek</h3>
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
