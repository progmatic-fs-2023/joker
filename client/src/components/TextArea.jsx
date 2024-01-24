import Card from 'react-bootstrap/Card';
import YoutubeEmbed from './YoutubeEmbed';

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
              &quot;Semmi áron se mondjatok le arról, hogy legyen időtök gyógynövényt, virágot
              gyűjteni! Hajoljatok le a földig és emelkedjetek az égbe utánuk!&quot;{' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title"> Maurice Mességué</cite>
            </footer>
          </blockquote>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default TextArea;
