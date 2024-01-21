import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function FooterNavs() {
  return (
    <Nav className="flex-column">
      <Nav.Link as={NavLink} to="/aszf">
        ASZF
      </Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default FooterNavs;
