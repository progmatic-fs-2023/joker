import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function ConfirmModal({ show, onClose, onConfirm, title, body }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Mégse
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Töröl
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};

ConfirmModal.defaultProps = {
  title: 'Megerősítés',
  body: 'Biztosan törölni szeretné?',
};

export default ConfirmModal;
