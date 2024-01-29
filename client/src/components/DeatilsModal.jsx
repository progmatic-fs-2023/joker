import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import DOMPurify from 'dompurify';

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
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(stockItem.details) }} />
      </Modal.Body>
    </Modal>
  );
}

DetailsModal.propTypes = {
  stockItem: PropTypes.shape({
    herbName: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string),
    stockQuantity: PropTypes.number,
    price: PropTypes.number,
    details: PropTypes.string,
  }),
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

DetailsModal.defaultProps = {
  stockItem: PropTypes.shape({
    herbName: undefined,
    species: undefined,
    image: PropTypes.arrayOf(),
    stockQuantity: undefined,
    price: undefined,
    details: undefined,
  }),
};

export default DetailsModal;
