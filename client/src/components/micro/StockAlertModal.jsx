import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function StockAlertModal({ show, handleClose, availableQuantity }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Készlet Információ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {availableQuantity} {availableQuantity === 1 ? 'elérhető' : 'elérhető'}
      </Modal.Body>
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
