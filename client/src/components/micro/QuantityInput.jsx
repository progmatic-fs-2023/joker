import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function QuantityInput({ value }) {
  return (
    <>
      <Form.Label htmlFor="quantity">Password</Form.Label>
      <Form.Control
        type="text"
        value={value}
        id="quantity"
        aria-describedby="chooseRequestedQuantity"
      />
      <Form.Text id="quantityHelpBlock" muted>
        A mennyiséget grammban számoljuk.
      </Form.Text>
    </>
  );
}

QuantityInput.propTypes = {
  value: PropTypes.string.isRequired,
};

export default QuantityInput;
