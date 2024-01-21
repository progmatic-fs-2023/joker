import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function EditorButtonGroup({ modifyMe, deleteMe, orderId }) {
  return (
    <div className="text-center">
      <ButtonGroup className="mb-2">
        <Button variant="outline-warning" onClick={() => modifyMe(orderId)}>
          Módosítás
        </Button>
        <Button variant="outline-danger" onClick={() => deleteMe(orderId)}>
          Törlés
        </Button>
      </ButtonGroup>
      <br />
    </div>
  );
}
EditorButtonGroup.propTypes = {
  orderId: PropTypes.string.isRequired,
  deleteMe: PropTypes.func.isRequired,
  modifyMe: PropTypes.func.isRequired,
};

export default EditorButtonGroup;
