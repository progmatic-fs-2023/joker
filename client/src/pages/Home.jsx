import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TextArea from '../components/TextArea';
import ImageSlider from '../components/ImageSlider';

function Home() {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1>Főoldal</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ImageSlider />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <TextArea />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
