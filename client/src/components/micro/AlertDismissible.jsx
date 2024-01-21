import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

function AlertDismissible({ variant, head, body, showAlert, setShowAlert }) {
  if (showAlert) {
    return (
      <Alert className="m-4" variant={variant} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>{head}</Alert.Heading>
        <p>{body}</p>
      </Alert>
    );
  }
  return null;
}

AlertDismissible.propTypes = {
  variant: PropTypes.string,
  head: PropTypes.string,
  body: PropTypes.string,
  showAlert: PropTypes.bool,
  setShowAlert: PropTypes.func,
};

AlertDismissible.defaultProps = {
  variant: PropTypes.string,
  head: PropTypes.string,
  body: PropTypes.string,
  showAlert: PropTypes.func,
  setShowAlert: PropTypes.func,
};

export default AlertDismissible;
