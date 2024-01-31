import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Payment() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Mivel tudok a Webshopban fizetni?</Alert.Heading>
        <h6>Jelenleg csak utánvétes fizetésre van lehetőség!</h6>
        <p>
          Hogyan működik az utánvétes fizetés? Utánvétes rendelés esetén a megrendelés teljes
          összegét a terméket kiszállító futárszolgálat munkatársának készpénzben, vagy
          bankkártyával kell teljesíteni. Az átvételnél nincs lehetőség vásárlási utalványok, egyéb
          kedvezmények beváltására. Értékhatártól függetlenül, az utánvétes fizetési móddal leadott
          megrendelés esetén bruttó 300 Ft-ot számítunk fel utánvét kezelési díjként. Elállás esetén
          a Herbalism.hu nem téríti vissza az olyan megvalósult szolgáltatásokat, mint az utánvét
          kezelés díja. Ha vissza szeretnéd küldeni a terméket az Online Shop raktárába, akkor azt
          csak a saját költséged terhére teheted meg. Utánvétes fizetés esetén kérjük írd rá az
          elállási nyilatkozatra a bankszámlaszámodat, amire a raktárba beérkeztést követő 14
          naptári napon belül vissza tudjuk utalni számodra a termék vételárát és a rendeléskor
          felmerülő esetleges szállítási díjat. A visszaküldéskor keletkező szállítási költség
          ilyenkor minden esetben a vevőt terheli, ezt nem áll módunkban megtéríteni.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Payment;
