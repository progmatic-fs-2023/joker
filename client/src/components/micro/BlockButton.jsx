import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function BlockButton({btnName, variant, size, onClick}) {
  return (
    <div className="d-grid gap-2">
      <Button variant={variant} size={size} onClick={onClick}>
        {btnName}
      </Button>
    </div>
  );
}

BlockButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BlockButton;