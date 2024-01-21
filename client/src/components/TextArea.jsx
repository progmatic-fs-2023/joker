import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YoutubeEmbed from './YoutubeEmbed';

function TextArea() {
  return (
    <div className="rowbase">
      <Container fluid="md my-3">
        <Row>
          <Col md={4}>
            Herbalism egy külföldi eredetű szó jelentése: A növények ismeretének és gyógyító
            tulajdonságaik felhasználásának tudománya.A gyógynövények használata több ezer évre
            visszavezethető. herbalizmus egyedülálló módon ötvözi a kulturális hagyományokat, az
            ételeket és a jó közérzetet mindenki számára.
          </Col>
          <Col md={4}>
            <YoutubeEmbed embedId="RN11iBlUGio" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextArea;
