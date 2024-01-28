import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import DOMPurify from 'dompurify';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import FluidPic from './FliudPic';

function PostIntro({ postObject }) {
  const clearedBody = DOMPurify.sanitize(postObject.body);
  const bodyToText = clearedBody.replace(/(<([^>]+)>)/gi, '');
  const postAge = (format(postObject.createdAt, 'yyyyMMdd') - format(Date.now(), 'yyyyMMdd')) * -1;
  return (
    <Card
      className="text-center mx-auto w-75"
      style={{ backgroundColor: '#3B403B', color: 'whitesmoke' }}
    >
      <Card.Header style={{ color: '#C899CF' }}>
        {postAge < 2 ? 'Friss cikk! Érdemes elolvasni!' : ''}
      </Card.Header>
      <Card.Body>
        <Card.Title>{postObject.title}</Card.Title>
        <div className="d-flex">
          {postObject.pictures[0] && <FluidPic imageSrc={postObject.pictures[0]} />}
          <Card.Text>
            <i>{bodyToText.substring(0, 130)}...</i>
          </Card.Text>
        </div>
        <Button className="my-2" variant="success">
          Elolvasom
        </Button>
      </Card.Body>
      <Card.Footer>Létrehozva: {format(postObject.createdAt, 'yyyy-MM-dd ')}</Card.Footer>
    </Card>
  );
}

PostIntro.propTypes = {
  postObject: PropTypes.shape({
    title: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  pictures: PropTypes.func,
};

PostIntro.defaultProps = {
  postObject: PropTypes.shape({
    title: PropTypes.string,
    pictures: PropTypes.arrayOf(),
    body: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  pictures: PropTypes.func,
};

export default PostIntro;
