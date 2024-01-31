import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function StockAlertModal({ show, handleClose, availableQuantity }) {
  const message =
    availableQuantity > 0
      ? `Csak ${availableQuantity} érhető el.`
      : 'A kívánt mennyiség nem áll rendelkezésre.';
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Készlet Információ</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Bezár
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

StockAlertModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default StockAlertModal;
