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
  deleteMe: PropTypes.func,
  handleSubmit: PropTypes.func,
  modifyBtnState: PropTypes.bool,
  setModifyBtnState: PropTypes.func,
  cancelProcess: PropTypes.func,
  currentHerb: PropTypes.shape({
    id: PropTypes.string,
    customerNote: PropTypes.string,
    quantity: PropTypes.arrayOf({}),
    status: PropTypes.string,
    updatedAt: PropTypes.string,
    userID: PropTypes.string,
  }).isRequired,
};

TableEditorButtonGroup.defaultProps = {
  deleteMe: undefined,
  handleSubmit: undefined,
  modifyBtnState: undefined,
  setModifyBtnState: undefined,
  cancelProcess: undefined,
};

export default TableEditorButtonGroup;
