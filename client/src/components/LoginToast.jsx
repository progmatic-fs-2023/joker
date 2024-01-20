import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function LoginToast({ children }) {
  const [show, toggleShow] = useState(false);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Bejelentkezés</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Bejelentkezés az oldalra</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
}

LoginToast.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default LoginToast;
