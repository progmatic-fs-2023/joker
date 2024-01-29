import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function FileInput({ formRef, fileRef }) {
  return (
    <Form.Group controlId="myFiles" className="mb-3" ref={formRef}>
      <Form.Label>Válaszd ki a feltöltendő képeket</Form.Label>
      <Form.Control name="file" type="file" ref={fileRef} multiple accept="image/*" />
    </Form.Group>
  );
}

FileInput.propTypes = {
  formRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }),
  fileRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }),
};

FileInput.defaultProps = {
  formRef: undefined,
  fileRef: undefined,
};

export default FileInput;
