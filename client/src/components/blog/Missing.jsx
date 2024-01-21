import { Link } from 'react-router-dom';

function Missing() {
  return (
    <main className="missing-article text-center">
      <h2>A cikk nem található!</h2>
      <p>Lehet, hogy a szerző már törölte.</p>
      <p>
        <Link to="/feed">Vissza a posztokhoz</Link>
      </p>
    </main>
  );
}

export default Missing;
