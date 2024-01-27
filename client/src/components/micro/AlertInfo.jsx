import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

function AlertInfo({ message, variant }) {
  return (
    <>
      {/* {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => ( */}
      <Alert key={variant} variant={variant}>
        {message}
      </Alert>
      {/* ))} */}
    </>
  );
}

AlertInfo.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default AlertInfo;
