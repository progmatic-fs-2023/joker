import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import PropTypes from 'prop-types';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function ActionSelector({ actionValue, setActionValue }) {
  const radios = [
    { name: 'Felhasználó szerkesztés', variant: 'outline-warning', value: '1' },
    { name: 'Felhasználó hozzáadás', variant: 'outline-success', value: '2' },
    { name: 'Felhasználó törlés', variant: 'outline-danger', value: '3' },
  ];

  return (
    // <div className='text-center mx-auto my-2' style={{backgroundColor: 'grey', color: 'white'}}>
    <div className="text-center mx-auto my-2" style={{ maxWidth: '95%' }}>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={uniqueKeyGenerator()}
            id={`radio-${idx}`}
            type="radio"
            variant={radio.variant}
            name="radio"
            value={radio.value}
            checked={actionValue === radio.value}
            onChange={(e) => setActionValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

ActionSelector.propTypes = {
  actionValue: PropTypes.string,
  setActionValue: PropTypes.func.isRequired,
};

ActionSelector.defaultProps = {
  actionValue: undefined,
};

export default ActionSelector;
