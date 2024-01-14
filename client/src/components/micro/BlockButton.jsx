import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function BlockButton({ btnName, variant, size, onClick, classNames }) {
  return (
    <div className={`d-grid gap-2 ${classNames}`}>
      <Button variant={variant} size={size} onClick={onClick}>
        {btnName}
      </Button>
    </div>
  );
}

BlockButton.propTypes = {
  classNames: PropTypes.string,
  btnName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
}

BlockButton.defaultProps = {
  classNames: undefined,
  btnName: undefined,
  variant: undefined,
  size: undefined,
  onClick: PropTypes.func
}

export default BlockButton;