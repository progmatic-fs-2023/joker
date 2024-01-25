import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

function DetailsModal({ stockItem, show, handleClose }) {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Részletek</Modal.Title>
      </Modal.Header>
      <Modal.Body>{stockItem.details}</Modal.Body>
    </Modal>
  );
}

DetailsModal.propTypes = {
  stockItem: PropTypes.shape({
    herbName: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    stockQuantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DetailsModal;
