import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function DashNav() {
  return (
    <Nav className="gap-2" variant="pills" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link as={NavLink} to="usereditor" eventKey="link-1">
          Felhasználók
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="herbeditor" eventKey="link-2">
          Gyógynövények
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="feed" eventKey="link-3">
          Cikkek
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="ordereditor" eventKey="link-4">
          Megrendelések
        </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
    </Nav>
  );
}

export default DashNav;
