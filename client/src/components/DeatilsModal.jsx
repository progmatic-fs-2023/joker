import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import BlockButton from './micro/BlockButton';

function DetailsModal({ stockItem }) {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <BlockButton class="btn me-2" size='sm' variant="secondary" btnName='Részletek mobile' onClick={() => setSmShow(true)} />
            <br />
            <BlockButton class="btn me-2" size='sm' variant="secondary" btnName='Részletek desktop' onClick={() => setLgShow(true)} />
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Részletek
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{stockItem.details}</Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Részletek
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {stockItem.details}
                </Modal.Body>
            </Modal>
        </>
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
};

export default DetailsModal;