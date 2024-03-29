import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { API_URL } from '../constants';
import AlertDismissible from '../components/micro/AlertDismissible';
import useAuth from '../hooks/useAuth';

function UserPage({
  user,
  setAlertInfo,
  fetchUsersList,
  userEditable,
  setUserEditable,
  handleUserDelete,
}) {
  const { auth } = useAuth();
  const [currentUser, setCurrentUser] = useState({
    role: user.role,
    verified: user.verified,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    streetAddress: user.streetAddress,
    city: user.city,
    country: user.country,
    postalCode: user.postalCode,
  });
  const [showAlert, setShowAlert] = useState(false);
  const countrySelect = useRef();
  const roleSelect = useRef();
  const verifiedCheckbox = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      verified: checked,
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
      setAlertInfo({
        show: true,
        message: 'Nem sikerült elmenteni az adatokat!',
        variant: 'danger',
      });
    } else {
      // navigate('/lounge')
      // TODO error handling with red alert! empty the inputs
      const modifiedUser = await response.json();
      setCurrentUser({
        role: modifiedUser.role,
        verified: modifiedUser.verified,
        firstName: modifiedUser.firstName,
        lastName: modifiedUser.lastName,
        phone: modifiedUser.phone,
        streetAddress: modifiedUser.streetAddress,
        city: modifiedUser.city,
        country: modifiedUser.country,
        postalCode: modifiedUser.postalCode,
      });
      fetchUsersList();
      setShowAlert(true);
      setUserEditable(true);
    }
  };

  return (
    currentUser && (
      <div
        className="px-2 py-1"
        style={{
          opacity: '90%',
          maxWidth: '80%',
          margin: 'auto',
          color: 'whitesmoke',
          backgroundColor: '#212529',
          borderRadius: '8px',
        }}
      >
        <div>
          {auth && auth?.role === 'BASIC' && (
            <Button className="mx-auto" variant="outline-danger" onClick={handleUserDelete}>
              Felhasználó törlése
            </Button>
          )}
        </div>
        <AlertDismissible
          variant="success"
          head="Adatok elmentve!"
          body="Az email címed módosításához kérjük vedd fel velünk a kapcsolatot!"
          setShowAlert={setShowAlert}
          showAlert={showAlert}
        />
        <Form onSubmit={handleSubmit} className="m-5">
          {auth && auth?.role === 'SUPERADMIN' ? (
            <Row className="mb-2">
              <Form.Group as={Col} controlId="roleState">
                <Form.Label>Szerepkör</Form.Label>
                <Form.Select
                  ref={roleSelect}
                  disabled={userEditable}
                  name="role"
                  defaultValue={user.role}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option>BASIC</option>
                  <option>ADMIN</option>
                  <option>SUPERADMIN</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3 form-switch d-flex align-items-end"
                id="formGridCheckbox"
              >
                <Form.Check
                  form-switch="true"
                  ref={verifiedCheckbox}
                  disabled={userEditable}
                  defaultChecked={user.verified}
                  type="checkbox"
                  label={`Felhasználó ${user.verified ? 'aktív' : 'inaktív'}`}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>
            </Row>
          ) : null}
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
                disabled={userEditable}
                name="lastName"
                onChange={(e) => handleInputChange(e)}
                type="lastName"
                value={currentUser.lastName}
                placeholder={`${user.lastName || 'nincs megadva'}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>Keresztnév</Form.Label>
              <Form.Control
                disabled={userEditable}
                name="firstName"
                onChange={(e) => handleInputChange(e)}
                type="firstName"
                value={currentUser.firstName}
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
            <Form.Group as={Col} controlId="password2">
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
              disabled={userEditable}
              name="streetAddress"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={currentUser.streetAddress}
              placeholder={`${user.streetAddress || 'nincs megadva'}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Telefonszám (pl. 36301234567)</Form.Label>
            <Form.Control
              disabled={userEditable}
              name="phone"
              type="text"
              onChange={(e) => handleInputChange(e)}
              value={currentUser.phone}
              placeholder={`${user.phone || 'nincs megadva'}`}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>Város</Form.Label>
              <Form.Control
                disabled={userEditable}
                name="city"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={currentUser.city}
                placeholder={`${user.city || 'nincs megadva'}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Ország</Form.Label>
              <Form.Select
                ref={countrySelect}
                disabled={userEditable}
                name="country"
                defaultValue={user.country}
                onChange={(e) => handleInputChange(e)}
              >
                <option>Válassz...</option>
                <option>Magyarország</option>
                <option>Ausztria</option>
                <option>Horvátország</option>
                <option>Németország</option>
                <option>Spanyolország</option>
                <option>Olaszország</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="postalCode">
              <Form.Label>Irányítószám</Form.Label>
              <Form.Control
                disabled={userEditable}
                name="postalCode"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={currentUser.postalCode}
                placeholder={`${user.postalCode || 'nincs megadva'}`}
              />
            </Form.Group>
          </Row>
          <Button variant="success" type="submit" disabled={userEditable}>
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
    phone: PropTypes.string,
    postalCode: PropTypes.string,
    role: PropTypes.string,
    country: PropTypes.string,
    verified: PropTypes.bool,
    map: PropTypes.func,
    length: PropTypes.func,
    slice: PropTypes.func,
  }),
  setAlertInfo: PropTypes.func,
  fetchUsersList: PropTypes.func,
  userEditable: PropTypes.bool,
  setUserEditable: PropTypes.func,
  handleUserDelete: PropTypes.func,
};

UserPage.defaultProps = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    title: undefined,
    firstName: undefined,
    lastName: undefined,
    city: undefined,
    streetAddress: undefined,
    phone: undefined,
    postalCode: undefined,
    role: undefined,
    country: undefined,
    verified: undefined,
    map: PropTypes.func,
    length: PropTypes.func,
    slice: PropTypes.func,
  }),
  setAlertInfo: undefined,
  fetchUsersList: undefined,
  userEditable: undefined,
  setUserEditable: undefined,
  handleUserDelete: undefined,
};

export default UserPage;
