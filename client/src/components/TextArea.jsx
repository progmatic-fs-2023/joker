import Card from 'react-bootstrap/Card';
import YoutubeEmbed from './YoutubeEmbed';

function TextArea() {
  return (
    <div className="shadow-lg p-2 mb-5 rounded">
      <Card className="text-center bg-dark text-white">
        <Card.Header className="fw-bold" as="h4">
          A gyógynövényhasználat alapjai
        </Card.Header>
        <Card.Body>
          <Card.Text as="section">
            A <i>herbalism</i> külföldi eredetű fogalom, jelentése: a növények ismeretének és
            gyógyító tulajdonságaik felhasználásának tudománya. A gyógynövények használata több ezer
            évre visszavezethető. A herbalizmus egyedülálló módon ötvözi a kulturális hagyományokat,
            az ételeket és a jó közérzetet mindenki számára.
            <blockquote />
            A farmakológiai kutatások világméretű elterjedésével néhány gyógynövényt modern
            gyógymóddá alakítottak át, mint például az artemisinin nevű maláriaellenes
            gyógyszercsoportot, amelyet az Artemisia annua (Egynyári üröm) nevű, a kínai orvoslásban
            a láz kezelésére használt gyógynövényből izoláltak.
            <blockquote />A gyógynövények számos formában alkalmazhatók, amelyek közül a
            leggyakoribb a gyógyteaként vagy (esetleg hígított) növényi kivonatként fogyasztott
            folyadék. <blockquote />
          </Card.Text>
        </Card.Body>
        <YoutubeEmbed embedId="RN11iBlUGio" />
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
