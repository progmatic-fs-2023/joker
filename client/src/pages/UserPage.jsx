import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { API_URL } from '../constants';
import AlertDismissible from '../components/micro/AlertDismissible';

function UserPage({ user }) {
  const [currentUser, setCurrentUser] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...currentUser }),
    };
    const response = await fetch(`${API_URL}/users/${user.id}`, fetchOptions);
    if (!response) {
      throw new Error('Saving new user data failed!');
    } else {
      // navigate('/lounge')
      // TODO error handling with red alert! empty the inputs
      setCurrentUser('');
      setShowAlert(true);
    }
  };

  return (
    user && (
      <div style={{ maxWidth: '50%', margin: 'auto' }}>
        <Form onSubmit={handleSubmit} className="m-5">
          <AlertDismissible
            variant="success"
            head="Adatok elmentve!"
            body="Az email címed módosításához kérjük vedd fel velünk a kapcsolatot elérhetőségeinken."
            setShowAlert={setShowAlert}
            showAlert={showAlert}
          />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Felhasználónév</Form.Label>
              <Form.Control
                disabled
                name="email"
                onChange={(e) => handleInputChange(e)}
                type="email"
                placeholder={`${user.email}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Vezetéknév</Form.Label>
              <Form.Control
                name="lastName"
                onChange={(e) => handleInputChange(e)}
                type="lastName"
                placeholder={`${user.lastName || 'nincs megadva'}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>Keresztnév</Form.Label>
              <Form.Control
                name="firstName"
                onChange={(e) => handleInputChange(e)}
                type="firstName"
                placeholder={`${user.firstName || 'nincs megadva'}`}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="password">
              <Form.Label>Jelszó</Form.Label>
              <Form.Control
                disabled
                name="password"
                onChange={(e) => handleInputChange(e)}
                type="password"
                placeholder="új jelszó"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword2">
              <Form.Label>Jelszó ellenőrzés</Form.Label>
              <Form.Control
                disabled
                name="password2"
                type="password"
                placeholder="új jelszó mégegyszer"
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="streetAddress">
            <Form.Label>Cím</Form.Label>
            <Form.Control
              name="streetAddress"
              onChange={(e) => handleInputChange(e)}
              placeholder={`${user.streetAddress || 'nincs megadva'}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Telefonszám (pl. 36301234567)</Form.Label>
            <Form.Control
              name="phone"
              onChange={(e) => handleInputChange(e)}
              placeholder={`${user.phone || 'nincs megadva'}`}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>Város</Form.Label>
              <Form.Control
                name="city"
                onChange={(e) => handleInputChange(e)}
                placeholder={`${user.city || 'nincs megadva'}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Ország</Form.Label>
              {/* // TODO save select option to db */}
              <Form.Select name="country" defaultValue="Válassz...">
                <option>Válassz...</option>
                <option>Magyarország</option>
                <option>Ausztria</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="postalCode">
              <Form.Label>Irányítószám</Form.Label>
              <Form.Control
                name="postalCode"
                onChange={(e) => handleInputChange(e)}
                placeholder={`${user.postalCode || 'nincs megadva'}`}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Ellenőriztem az adatokat" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Mentés
          </Button>
        </Form>
      </div>
    )
  );
}

UserPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    streetAddress: PropTypes.string,
    phone: PropTypes.number,
    postalCode: PropTypes.number,
    map: PropTypes.func,
    length: PropTypes.func,
    slice: PropTypes.func,
  }),
};

UserPage.defaultProps = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    streetAddress: PropTypes.string,
    phone: PropTypes.number,
    postalCode: PropTypes.number,
    map: PropTypes.func,
    length: PropTypes.func,
    slice: PropTypes.func,
  }),
};

export default UserPage;
