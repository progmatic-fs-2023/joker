import { Link } from 'react-router-dom';

function Lounge() {
  return (
    <div>
      <h1>The Lounge</h1>
      <br />
      <p>This is the Lounge, Users, Admins and Editors can hang out here.</p>
      <div className="flexGrow">
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Lounge;
