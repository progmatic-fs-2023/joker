import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function FormSelector({ size, options, handleSelectOption }) {
  return (
    <Form.Select size={size} onChange={(e) => handleSelectOption(e)}>
      <option value="Válassz usert...">Válassz usert...</option>
      {options &&
        options.map((option) => (
          <option key={uniqueKeyGenerator()} value={option.email}>
            {option.email}
          </option>
        ))}
    </Form.Select>
  );
}

FormSelector.propTypes = {
  size: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({
    email: PropTypes.string,
    id: PropTypes.string,
    map: PropTypes.func,
    length: PropTypes.func,
  }).isRequired,
  handleSelectOption: PropTypes.func.isRequired,
};

export default FormSelector;
