import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function NotificationRequestModal({ show, onClose }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the notification request in the email state
    onClose(); // close the modal
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Értesítés kérése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              E-mail cím
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Adja meg az e-mail címét"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Kérést elküld
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

NotificationRequestModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationRequestModal;
