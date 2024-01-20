import { Link } from 'react-router-dom';

function UserEditor() {
  return (
    <div>
      <h1>SUPERADMIN Page</h1>
      <br />
      <p>You must have been assigned an SUPERADMIN role.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default UserEditor;
