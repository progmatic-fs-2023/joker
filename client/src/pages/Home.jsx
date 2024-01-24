import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TextArea from '../components/TextArea';
import ImageSlider from '../components/ImageSlider';

function Home() {
  return (
    <Container className="mt-2">
      <header className="pt-3 d-flex justify-content-around flex-wrap">
        <small className="w-50 text-center">
          <p className="m-0 text-right fw-bolder fst-italic fs-5">
            &quot;Herbalism is the tradition of studying and using herbs for their healing
            properties.
            <br />
            Growing freely in the natural world, the term ‘herb’ refers to every part of the plant,
            from the roots to the flowers.&quot;
          </p>
        </small>
      </header>
      <Row className="text-center">
        <Col>
          <p className="justify-content-center text-center fs-1 fw-bolder">Herbalism.hu </p>
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
