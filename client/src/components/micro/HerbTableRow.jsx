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
      <td>{herb.order}</td>
      <td>{herb.family}</td>
      <td>{herb.genus}</td>
      <td>{herb.species}</td>
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
    herbName: PropTypes.string,
    species: PropTypes.string,
    family: PropTypes.string,
    genus: PropTypes.string,
    order: PropTypes.string,
    nextDelivery: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string),
    stockQuantity: PropTypes.number,
    price: PropTypes.number,
    details: PropTypes.string,
    id: PropTypes.string,
    rating: PropTypes.number,
    sort: PropTypes.func,
  }),
  index: PropTypes.number,
  deleteMe: PropTypes.func,
  handleSubmit: PropTypes.func,
  cancelProcess: PropTypes.func,
};

HerbTableRow.defaultProps = {
  herb: PropTypes.shape({}),
  index: undefined,
  deleteMe: undefined,
  handleSubmit: undefined,
  cancelProcess: undefined,
};

export default HerbTableRow;
