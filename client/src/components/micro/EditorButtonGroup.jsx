import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function EditorButtonGroup({ setModifyBtnState, deleteMe, currentOrder }) {
  return (
    <div className="text-center">
      <ButtonGroup className="mb-2">
        <Button variant="outline-warning" onClick={() => setModifyBtnState(true)}>
          Módosítás
        </Button>
        <Button variant="outline-danger" onClick={() => deleteMe(currentOrder.id)}>
          Törlés
        </Button>
      </ButtonGroup>
      <br />
    </div>
  );
}
EditorButtonGroup.propTypes = {
  deleteMe: PropTypes.func.isRequired,
  setModifyBtnState: PropTypes.func.isRequired,
  currentOrder: PropTypes.shape({
    id: PropTypes.string,
    customerNote: PropTypes.string,
    quantity: PropTypes.arrayOf({}),
    status: PropTypes.string,
    updatedAt: PropTypes.string,
    userID: PropTypes.string,
  }).isRequired,
};

export default EditorButtonGroup;
