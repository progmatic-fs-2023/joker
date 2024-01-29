import { useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import HerbTableRow from './HerbTableRow';
import NewHerbData from '../user/NewHerbData';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';
import { API_URL, AUTH_URL } from '../../constants';
import AlertInfo from './AlertInfo';
import BlockButton from './BlockButton';

function DarkTable({ updatedHerbs, fetchHerbs }) {
  const sortedHerbs = updatedHerbs.sort((a, b) => a.herbName.localeCompare(b.herbName));
  const fileRef = useRef();
  const formRef = useRef();
  const [showNewHerbForm, setShowNewHerbForm] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    error: '',
    variant: 'info',
  });

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
    if (!currentHerb?.herbName) return null;
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
      // TODO error handling with red alert! empty the inputs
      fetchHerbs();
      const result = await response.json();
      // navigate('/lounge')
      return result;
    }
  };

  const cancelProcess = () => {
    fetchHerbs();
  };

  const sendFiles = async () => {
    const formData = new FormData();
    Object.keys(fileRef.current.files).forEach((key) => {
      formData.append(fileRef.current.files.item(key).name, fileRef.current.files.item(key));
    });

    const response = await fetch(`${AUTH_URL}/upload`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    return result;
  };

  const handleSendNewHerbData = async (newHerb) => {
    if (
      !newHerb?.herbName ||
      !newHerb?.family ||
      !newHerb?.genus ||
      !newHerb?.order ||
      !newHerb?.species ||
      !newHerb?.stockQuantity ||
      !newHerb?.price ||
      !newHerb?.details
    ) {
      setAlertInfo({
        show: true,
        message: 'Nincs minden kötelező mező kitöltve adattal!',
        variant: 'danger',
      });
      return null;
    }
    const updatedNewHerb = {
      ...newHerb,
      price: !Number.isNaN(Number(newHerb.price)) ? Number(newHerb.price) : 0,
      stockQuantity: !Number.isNaN(Number(newHerb.stockQuantity))
        ? Number(newHerb.stockQuantity)
        : 0,
      image: newHerb?.image[0] ? newHerb.image.split(', ') : [],
    };
    try {
      if (fileRef.current.files?.length > 0) {
        const fileUploadResult = await sendFiles();
        fileUploadResult.pictures.forEach((pic) => updatedNewHerb.image.push(pic));
      }
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...updatedNewHerb }),
        credentials: 'include',
      };
      const response = await fetch(`${API_URL}/herbs`, fetchOptions);
      // // clear all state and controlled inputs
      const result = await response.json();
      fetchHerbs();
      return result;
    } catch (err) {
      if (!err?.response) {
        setAlertInfo({
          show: true,
          message: err,
          variant: 'danger',
        });
        return null;
      }
    }
    return null;
  };

  return (
    <div className="dark-table mx-auto">
      {alertInfo.show && (
        <AlertInfo alertInfo={alertInfo} setAlertInfo={setAlertInfo} variant="danger" />
      )}
      <BlockButton
        btnName="Új gyógynövény hozzáadása"
        variant="outline-warning"
        size="md"
        onClick={() => setShowNewHerbForm(true)}
        classNames="w-75 mx-auto my-2"
      />
      {showNewHerbForm && (
        <NewHerbData
          handleSendNewHerbData={handleSendNewHerbData}
          cancelProcess={cancelProcess}
          fileRef={fileRef}
          formRef={formRef}
          setShowNewHerbForm={setShowNewHerbForm}
        />
      )}
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ cursor: 'pointer', overflow: 'hidden' }}
      >
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Ikonkép</th> */}
            <th>Név</th>
            <th>Rend</th>
            <th>Család</th>
            <th>Nemzetség</th>
            <th>Faj</th>
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
    </div>
  );
}

DarkTable.propTypes = {
  updatedHerbs: PropTypes.arrayOf(
    PropTypes.shape({
      herbName: PropTypes.string,
      species: PropTypes.string,
      image: PropTypes.arrayOf(PropTypes.string),
      stockQuantity: PropTypes.number,
      price: PropTypes.number,
      details: PropTypes.string,
      id: PropTypes.string,
      rating: PropTypes.number,
      sort: PropTypes.func,
    }),
  ),
  fetchHerbs: PropTypes.func.isRequired,
};

DarkTable.defaultProps = {
  updatedHerbs: PropTypes.arrayOf(
    PropTypes.shape({
      herbName: undefined,
      species: undefined,
      image: PropTypes.arrayOf(),
      stockQuantity: undefined,
      price: undefined,
      details: undefined,
      id: undefined,
      rating: undefined,
      sort: PropTypes.func,
    }),
  ),
};

export default DarkTable;
