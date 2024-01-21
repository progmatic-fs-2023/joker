import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import BlockButton from '../micro/BlockButton';
import useAuth from '../../hooks/useAuth';

function SignedIn() {
  const { auth, handleLogout } = useAuth();

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand as={NavLink} to='/dashboard'>Dashboard</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-3">
            <NavDropdown title="Profilom" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/lounge">
                Lounge
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/orderlist">
                Rendeléseim
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/user">
                Adataim
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <BlockButton
                  btnName="Kilépés"
                  variant="outline-danger"
                  onClick={() => handleLogout()}
                >
                  Kilépés
                </BlockButton>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>Belépve: {auth.user}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SignedIn;
