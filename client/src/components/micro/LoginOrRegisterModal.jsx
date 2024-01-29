import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginOrRegisterModal({ show, onClose }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose();
    navigate('/login');
  };

  const handleRegisterClick = () => {
    onClose();
    navigate('/register');
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bejelentkezés vagy Regisztráció</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Kérjük, jelentkezzen be vagy regisztráljon a folytatáshoz.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleLoginClick}>
          Bejelentkezés
        </Button>
        <Button variant="secondary" onClick={handleRegisterClick}>
          Regisztráció
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

LoginOrRegisterModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginOrRegisterModal;
