import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, ButtonGroup } from 'react-bootstrap';
import FileInput from '../micro/FileInput';

function NewHerbData({ handleSendNewHerbData, fileRef, formRef, setShowNewHerbForm }) {
  const [newHerb, setNewHerb] = useState({
    herbName: '',
    price: '',
    stockQuantity: '',
    nextDelivery: '',
    order: '',
    family: '',
    genus: '',
    species: '',
    image: '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHerb((prevHerb) => ({
      ...prevHerb,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    setNewHerb({
      herbName: '',
      price: '',
      stockQuantity: '',
      nextDelivery: '',
      order: '',
      family: '',
      genus: '',
      species: '',
      image: '',
      details: '',
    });
    setShowNewHerbForm(false);
  };

  return (
    <div className="p-4 my-1" style={{ color: 'whitesmoke', backgroundColor: '#212529' }}>
      <ButtonGroup className="mb-2">
        <Button variant="primary" onClick={() => clearInputs()}>
          Mégsem
        </Button>
        <Button
          variant="success"
          onClick={() => {
            handleSendNewHerbData(newHerb);
            clearInputs();
          }}
        >
          Feltöltés
        </Button>
      </ButtonGroup>
      <div className="mx-auto w-75">
        <Form className="new-herb-form">
          <Form.Label>
            Név
            <Form.Control
              required
              name="herbName"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={newHerb.herbName}
              placeholder={`${newHerb.herbName || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Rend
            <Form.Control
              required
              name="family"
              type="text"
              value={newHerb.order}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${newHerb.order || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Család
            <Form.Control
              required
              name="genus"
              type="text"
              value={newHerb.family}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${newHerb.family || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Nemzetség
            <Form.Control
              required
              name="order"
              type="text"
              value={newHerb.genus}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${newHerb.genus || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Faj
            <Form.Control
              required
              name="order"
              type="text"
              value={newHerb.species}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${newHerb.species || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Bruttó ár
            <Form.Control
              required
              name="price"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={newHerb.price}
              placeholder={`${newHerb.price || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Készlet
            <Form.Control
              required
              name="stockQuantity"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={newHerb.stockQuantity}
              placeholder={`${newHerb.stockQuantity || 'nincs megadva'}`}
            />
          </Form.Label>

          <Form.Label>
            Köv.szállítás
            <Form.Control
              name="nextDelivery"
              type="text"
              value={newHerb.nextDelivery}
              onChange={(e) => handleInputChange(e)}
              placeholder={`${newHerb.nextDelivery || 'nincs megadva'}`}
            />
          </Form.Label>
        </Form>
      </div>
      <FileInput fileRef={fileRef} formRef={formRef} />
      <Form.Control
        // style={{ backgroundColor: '#212529', color: "whitesmoke" }}
        style={{ backgroundColor: 'grey', color: 'whitesmoke' }}
        placeholder="a növény részletes leírása"
        className="my-2"
        name="details"
        required
        as="textarea"
        rows={10}
        value={newHerb.details}
        onChange={(e) => handleInputChange(e)}
      />
      <Form.Control
        // style={{ backgroundColor: '#212529', color: "whitesmoke" }}
        style={{ backgroundColor: 'grey', color: 'whitesmoke' }}
        placeholder="képhivatkozás webcíme (vessző+szóközzel elválasztva)"
        className="my-2"
        name="image"
        type="text"
        value={newHerb.image}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

NewHerbData.propTypes = {
  handleSendNewHerbData: PropTypes.func,
  formRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }),
  fileRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }),
  setShowNewHerbForm: PropTypes.func.isRequired,
};

NewHerbData.defaultProps = {
  handleSendNewHerbData: PropTypes.func,
  formRef: undefined,
  fileRef: undefined,
};

export default NewHerbData;
