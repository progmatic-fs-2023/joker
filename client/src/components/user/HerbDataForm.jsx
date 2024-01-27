import { useState } from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import TableEditorButtonGroup from '../micro/TableEditorButtonGroup';

function HerbDataForm({
  handleSubmit,
  herb,
  index,
  deleteMe,
  modifyBtnState,
  setModifyBtnState,
  cancelProcess,
}) {
  const [currentHerb, setCurrentHerb] = useState({
    id: herb.id,
    herbName: herb.herbName,
    price: herb.price,
    stockQuantity: herb.stockQuantity,
    nextDelivery: herb.nextDelivery,
    family: herb.family,
    genus: herb.genus,
    order: herb.order,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentHerb((prevHerb) => ({
      ...prevHerb,
      [name]: value,
    }));
  };

  return (
    herb && (
      <>
        <td>{index + 1}</td>
        <td>
          <Form.Label>
            Név
            <Form.Control
              name="herbName"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={currentHerb.herbName}
              placeholder={`${herb.herbName}`}
            />
          </Form.Label>
        </td>

        <td>
          <Form.Label>
            Család
            <Form.Control
              name="family"
              type="text"
              value={currentHerb.family}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${herb.family || 'nincs megadva'}`}
            />
          </Form.Label>
        </td>

        <td>
          <Form.Label>
            Nemzetség
            <Form.Control
              name="genus"
              type="text"
              value={currentHerb.genus}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${herb.genus || 'nincs megadva'}`}
            />
          </Form.Label>
        </td>

        <td>
          <Form.Label>
            Rend
            <Form.Control
              name="order"
              type="text"
              value={currentHerb.order}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${herb.order || 'nincs megadva'}`}
            />
          </Form.Label>
        </td>

        <td>
          <Form.Label>
            Bruttó ár
            <Form.Control
              name="price"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={currentHerb.price}
              placeholder={`${herb.price || 'nincs megadva'}`}
            />
          </Form.Label>
        </td>

        <td>
          <Form.Label>
            Készlet
            <Form.Control
              name="stockQuantity"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={currentHerb.stockQuantity}
              placeholder={`${herb.stockQuantity || 'nincs megadva'}`}
            />
          </Form.Label>
        </td>

        <td>
          <Form.Label>
            Köv.szállítás
            <Form.Control
              name="nextDelivery"
              type="text"
              value={currentHerb.nextDelivery}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${herb.nextDelivery || 'nincs megadva'}`}
            />
          </Form.Label>
        </td>

        <td>
          <TableEditorButtonGroup
            label="Kezelőgombok"
            modifyBtnState={modifyBtnState}
            setModifyBtnState={setModifyBtnState}
            deleteMe={deleteMe}
            handleSubmit={handleSubmit}
            currentHerb={currentHerb}
            cancelProcess={cancelProcess}
          />
        </td>
      </>
    )
  );
}

HerbDataForm.propTypes = {
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
  modifyBtnState: PropTypes.bool,
  setModifyBtnState: PropTypes.func,
};

HerbDataForm.defaultProps = {
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
  modifyBtnState: PropTypes.bool,
  setModifyBtnState: PropTypes.func,
};

export default HerbDataForm;
