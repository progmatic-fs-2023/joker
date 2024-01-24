import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YoutubeEmbed from './YoutubeEmbed';
import Card from 'react-bootstrap/Card';

function TextArea() {
  return (
    <div className="shadow-lg p-2 mb-5 rounded">  
      <Card className="text-center bg-dark text-white">
        <Card.Header className="fw-bold" as="h4">
          Bazi jó cím a kártyának
        </Card.Header>
        <Card.Body>
          <Card.Text as="text">
            <p className="fs-5">
              Herbalism egy külföldi eredetű szó jelentése: A növények ismeretének és gyógyító
              tulajdonságaik felhasználásának tudománya.A gyógynövények használata több ezer évre
              visszavezethető. herbalizmus egyedülálló módon ötvözi a kulturális hagyományokat, az
              ételeket és a jó közérzetet mindenki számára.
            </p>
            <p className="fs-5">
              Herbalism egy külföldi eredetű szó jelentése: A növények ismeretének és gyógyító
              tulajdonságaik felhasználásának tudománya.A gyógynövények használata több ezer évre
              visszavezethető. herbalizmus egyedülálló módon ötvözi a kulturális hagyományokat, az
              ételeket és a jó közérzetet mindenki számára.
            </p>
            <p className="fs-5">
              Herbalism egy külföldi eredetű szó jelentése: A növények ismeretének és gyógyító
              tulajdonságaik felhasználásának tudománya.A gyógynövények használata több ezer évre
              visszavezethető. herbalizmus egyedülálló módon ötvözi a kulturális hagyományokat, az
              ételeket és a jó közérzetet mindenki számára.{' '}
            </p>
          </Card.Text>
        </Card.Body>
        <p className="justify-content-center text-center mt-4 mb-4">
          <YoutubeEmbed embedId="RN11iBlUGio" />
        </p>
        <Card.Footer className="text-center bg-dark text-white">
          <blockquote className="blockquote mb-0 fst-italic">
            <p>
              {' '}
              "Ez bizony egy roppant találó idézet helye, melytől mindenki zöldet akar venni."{' '}
            </p>
            <footer className="blockquote-footer">
              Vmi miatt baszomhíres <cite title="Source Title"> Mekk Elek</cite>
            </footer>
          </blockquote>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default TextArea;
