import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { API_URL } from '../constants';
import AlertDismissible from '../components/micro/AlertDismissible';

function UserPage({ fetchUsers, selectedUser, setSelectedUser, setShowList }) {
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
    const response = await fetch(`${API_URL}/users/${selectedUser.id}`, fetchOptions);
    if (!response) {
      throw new Error('Saving new user data failed!');
    } else {
      // navigate('/lounge')
      // TODO error handling with red alert! empty the inputs
      const updatedUser = await response.json();
      await setSelectedUser(updatedUser);
      setCurrentUser({});
      setShowAlert(true);
      fetchUsers();
      setShowList(false);
    }
  };

  return (
    selectedUser && (
      <div style={{ maxWidth: '50%', margin: 'auto' }}>
        <Form onSubmit={handleSubmit} className="m-5">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Felhasználónév</Form.Label>
              <Form.Control
                disabled
                name="email"
                onChange={(e) => handleInputChange(e)}
                type="email"
                placeholder={selectedUser.email}
                value={selectedUser.email}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Vezetéknév</Form.Label>
              <Form.Control
                name="lastName"
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder={`${selectedUser.lastName || 'nincs megadva'}`}
                value={currentUser.lastName}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>Keresztnév</Form.Label>
              <Form.Control
                name="firstName"
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder={`${selectedUser.firstName || 'nincs megadva'}`}
                value={currentUser.firstName}
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
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder={`${selectedUser.streetAddress || 'nincs megadva'}`}
              value={currentUser.streetAddress}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Telefonszám (pl. 36301234567)</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder={`${selectedUser.phone || 'nincs megadva'}`}
              value={currentUser.phone}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>Város</Form.Label>
              <Form.Control
                name="city"
                type="text"
                onChange={(e) => handleInputChange(e)}
                placeholder={`${selectedUser.city || 'nincs megadva'}`}
                value={currentUser.city}
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
                type="text"
                onChange={(e) => handleInputChange(e)}
                placeholder={`${selectedUser.postalCode || 'nincs megadva'}`}
                value={currentUser.postalCode}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Ellenőriztem az adatokat" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Mentés
          </Button>
          <AlertDismissible
            variant="success"
            head="Adatok elmentve!"
            body="Az email címed módosításához kérjük vedd fel velünk a kapcsolatot elérhetőségeinken."
            setShowAlert={setShowAlert}
            showAlert={showAlert}
          />
        </Form>
      </div>
    )
  );
}

UserPage.propTypes = {
  selectedUser: PropTypes.shape({
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
  fetchUsers: PropTypes.func,
  setSelectedUser: PropTypes.func,
  setShowList: PropTypes.func,
};

UserPage.defaultProps = {
  selectedUser: PropTypes.shape({
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
  fetchUsers: PropTypes.func,
  setSelectedUser: PropTypes.func,
  setShowList: PropTypes.func,
};

export default UserPage;
