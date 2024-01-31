import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function FormSelector({ size, options, handleSelectOption, selectedOptionState }) {
  return (
    <Form.Select value={selectedOptionState} size={size} onChange={(e) => handleSelectOption(e)}>
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
  size: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      id: PropTypes.string,
      map: PropTypes.func,
      length: PropTypes.func,
    }),
  ),
  handleSelectOption: PropTypes.func.isRequired,
  selectedOptionState: PropTypes.string,
};

FormSelector.defaultProps = {
  size: undefined,
  options: PropTypes.arrayOf(),
  selectedOptionState: undefined,
};

export default FormSelector;
