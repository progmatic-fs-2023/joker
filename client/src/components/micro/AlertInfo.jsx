import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

function AlertInfo({ alertInfo, setAlertInfo }) {
  return (
    <>
      {/* {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => ( */}
      <Alert
        key={alertInfo.variant}
        variant={alertInfo.variant}
        onClose={() => setAlertInfo({ ...alertInfo, show: false })}
        dismissible
      >
        {alertInfo.message}
      </Alert>
      {/* ))} */}
    </>
  );
}

AlertInfo.propTypes = {
  alertInfo: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
    variant: PropTypes.string,
  }).isRequired,
  setAlertInfo: PropTypes.func.isRequired,
};

export default AlertInfo;
