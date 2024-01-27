import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import HerbTableRow from './HerbTableRow';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';
import { API_URL } from '../../constants';

function DarkTable({ updatedHerbs, fetchHerbs }) {
  const sortedHerbs = updatedHerbs.sort((a, b) => a.herbName.localeCompare(b.herbName));

  const deleteMe = async (id) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${API_URL}/herbs/${id}`, fetchOptions);
    if (!response) {
      throw new Error('Removing herb from db failed!');
    } else {
      // navigate('/lounge')
      // TODO error handling with red alert! empty the inputs
      fetchHerbs();
    }
  };

  const handleSubmit = async (currentHerb) => {
    // console.log('you have to save me:', currentHerb)
    const parsedData = {
      ...currentHerb,
      price: Number(currentHerb.price) || 0,
      stockQuantity: Number(currentHerb.stockQuantity) || 0,
    };
    const fetchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...parsedData }),
    };
    const response = await fetch(`${API_URL}/herbs/${parsedData.id}`, fetchOptions);
    if (!response) {
      throw new Error('Saving new herb data failed!');
    } else {
      // navigate('/lounge')
      // TODO error handling with red alert! empty the inputs
      fetchHerbs();
    }
  };

  const cancelProcess = () => {
    fetchHerbs();
  };

  return (
    <Table striped bordered hover variant="dark" style={{ cursor: 'pointer' }}>
      <thead>
        <tr>
          <th>#</th>
          {/* <th>Ikonkép</th> */}
          <th>Név</th>
          <th>Family</th>
          <th>Genus</th>
          <th>Rend</th>
          <th>Bruttó ár</th>
          <th>Készlet</th>
          <th>Köv.szállítás</th>
          <th>Action buttons</th>
        </tr>
      </thead>
      <tbody>
        {updatedHerbs &&
          sortedHerbs.map((herb, indx) => (
            <HerbTableRow
              key={uniqueKeyGenerator()}
              herb={herb}
              index={indx}
              deleteMe={deleteMe}
              handleSubmit={handleSubmit}
              cancelProcess={cancelProcess}
            />
          ))}
      </tbody>
    </Table>
  );
}

DarkTable.propTypes = {
  updatedHerbs: PropTypes.arrayOf(
    PropTypes.shape({
      herbName: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.arrayOf(PropTypes.string).isRequired,
      stockQuantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      details: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      sort: PropTypes.func.isRequired,
    }),
  ).isRequired,
  fetchHerbs: PropTypes.func.isRequired,
};

export default DarkTable;
