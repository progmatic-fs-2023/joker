import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AlertDismissible from '../micro/AlertDismissible';
import useAuth from '../../hooks/useAuth';

function UserEditorForm({ user, handleUserDelete, handleSubmit }) {
  const { auth } = useAuth();

  const [currentUser, setCurrentUser] = useState({
    id: user.id,
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

  return (
    currentUser && (
      <div
        id="user-editor-form"
        className="p-2 mx-auto"
        style={{
          opacity: '90%',
          maxWidth: '90%',
          color: 'whitesmoke',
          backgroundColor: '#212529',
          borderRadius: '8px',
        }}
      >
        <div className="text-center">
          {auth && auth?.role === 'BASIC' && (
            <Button
              type="button"
              className="mx-auto"
              variant="outline-danger"
              onClick={() => handleUserDelete(auth.userId)}
            >
              Fiókom törlése
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
        <Form onSubmit={(e) => handleSubmit(e, currentUser)} className="m-5">
          {auth && auth?.role === 'SUPERADMIN' && (
            <Row className="mb-2">
              <Form.Group as={Col} controlId="roleState">
                <Form.Label>Szerepkör</Form.Label>
                <Form.Select
                  disabled={auth?.role === currentUser.role}
                  ref={roleSelect}
                  name="role"
                  value={currentUser.role}
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
                  disabled={auth?.role === currentUser.role}
                  form-switch="true"
                  ref={verifiedCheckbox}
                  defaultChecked={user.verified}
                  type="checkbox"
                  label={`Felhasználó ${user.verified ? 'aktív' : 'inaktív'}`}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>
            </Row>
          )}
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
                value={currentUser.lastName || ''}
                placeholder={`${user.lastName || 'nincs megadva'}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>Keresztnév</Form.Label>
              <Form.Control
                name="firstName"
                onChange={(e) => handleInputChange(e)}
                type="firstName"
                value={currentUser.firstName || ''}
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
              name="streetAddress"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={currentUser.streetAddress || ''}
              placeholder={`${user.streetAddress || 'nincs megadva'}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Telefonszám (pl. 36301234567)</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              onChange={(e) => handleInputChange(e)}
              value={currentUser.phone || ''}
              placeholder={`${user.phone || 'nincs megadva'}`}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>Város</Form.Label>
              <Form.Control
                name="city"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={currentUser.city || ''}
                placeholder={`${user.city || 'nincs megadva'}`}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Ország</Form.Label>
              <Form.Select
                ref={countrySelect}
                name="country"
                value={currentUser.country}
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
                name="postalCode"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={currentUser.postalCode || ''}
                placeholder={`${user.postalCode || 'nincs megadva'}`}
              />
            </Form.Group>
          </Row>
          <Button variant="success" type="submit">
            Mentés
          </Button>
        </Form>
      </div>
    )
  );
}

UserEditorForm.propTypes = {
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
  handleUserDelete: PropTypes.func,
  handleSubmit: PropTypes.func,
};

UserEditorForm.defaultProps = {
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
  handleUserDelete: undefined,
  handleSubmit: undefined,
};

export default UserEditorForm;
