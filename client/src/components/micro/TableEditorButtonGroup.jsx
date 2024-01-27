import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function TableEditorButtonGroup({
  modifyBtnState,
  setModifyBtnState,
  handleSubmit,
  deleteMe,
  currentHerb,
  cancelProcess,
}) {
  return (
    <div className="text-center">
      {modifyBtnState ? (
        <ButtonGroup className="mb-2">
          <Button variant="outline-primary" onClick={() => cancelProcess()}>
            Mégsem
          </Button>
          <Button
            variant="outline-success"
            onClick={() => {
              handleSubmit(currentHerb);
              setModifyBtnState(false);
            }}
          >
            Mentés
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup className="mb-2">
          <Button variant="outline-warning" onClick={() => setModifyBtnState(true)}>
            Módosítás
          </Button>
          <Button variant="outline-danger" onClick={() => deleteMe(currentHerb.id)}>
            Törlés
          </Button>
        </ButtonGroup>
      )}
      <br />
    </div>
  );
}
TableEditorButtonGroup.propTypes = {
  deleteMe: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  modifyBtnState: PropTypes.bool.isRequired,
  setModifyBtnState: PropTypes.func.isRequired,
  cancelProcess: PropTypes.func.isRequired,
  currentHerb: PropTypes.shape({
    id: PropTypes.string,
    customerNote: PropTypes.string,
    quantity: PropTypes.arrayOf({}),
    status: PropTypes.string,
    updatedAt: PropTypes.string,
    userID: PropTypes.string,
  }).isRequired,
};

export default TableEditorButtonGroup;
