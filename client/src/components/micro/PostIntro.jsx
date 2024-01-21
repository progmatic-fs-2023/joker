import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostIntro({ postObject, author }) {
  return (
    <Card className="text-center mx-auto w-75">
      <Card.Header>Ajánlott</Card.Header>
      <Card.Body>
        <Card.Title>{postObject.title}</Card.Title>
        <Card.Text>Írta: {author}</Card.Text>
        <Button variant="outline-success">Elolvasom</Button>
      </Card.Body>
      <Card.Footer className="text-muted">created at...</Card.Footer>
    </Card>
  );
}

PostIntro.propTypes = {
  postObject: PropTypes.shape({
    title: PropTypes.string,
  }),
  author: PropTypes.string,
};

PostIntro.defaultProps = {
  postObject: PropTypes.shape({
    title: PropTypes.string,
  }),
  author: PropTypes.string,
};

export default PostIntro;
