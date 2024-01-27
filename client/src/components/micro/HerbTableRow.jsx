import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TableEditorButtonGroup from './TableEditorButtonGroup';
import HerbDataForm from '../user/HerbDataForm';

function HerbTableRow({ herb, index, deleteMe, handleSubmit, cancelProcess }) {
  const [modifyBtnState, setModifyBtnState] = useState(false);

  return modifyBtnState ? (
    <HerbDataForm
      herb={herb}
      index={index}
      modifyBtnState={modifyBtnState}
      setModifyBtnState={setModifyBtnState}
      handleSubmit={handleSubmit}
      deleteMe={deleteMe}
      cancelProcess={cancelProcess}
    />
  ) : (
    <tr>
      <td>{index + 1}</td>
      {/* <td style={{ maxWidth: '10px', maxHeight: '10px' }}><img style={{ width: '100%', height: '100%'}} src={herb.image[0]} alt={herb.herbName} /></td> */}
      <td>
        <Link to={`/product/${herb.id}`}>
          <h6>{herb.herbName}</h6>
        </Link>
      </td>
      <td>{herb.family}</td>
      <td>{herb.genus}</td>
      <td>{herb.order}</td>
      <td>{herb.price}</td>
      <td>{herb.stockQuantity}</td>
      <td>{herb.nextDelivery}</td>
      <td>
        <TableEditorButtonGroup
          label="Kezelőgombok"
          modifyBtnState={modifyBtnState}
          setModifyBtnState={setModifyBtnState}
          deleteMe={deleteMe}
          currentHerb={herb}
          cancelProcess={cancelProcess}
        />
      </td>
    </tr>
  );
}

HerbTableRow.propTypes = {
  herb: PropTypes.shape({
    herbName: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    genus: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    nextDelivery: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    stockQuantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    sort: PropTypes.func.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  deleteMe: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  cancelProcess: PropTypes.func.isRequired,
};

export default HerbTableRow;
