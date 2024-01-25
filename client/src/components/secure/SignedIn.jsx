import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import BlockButton from '../micro/BlockButton';
import useAuth from '../../hooks/useAuth';

function SignedIn() {
  const { auth, handleLogout } = useAuth();

  return (
    <Navbar className="fs-4">
      <Container>
        {/* <Navbar.Brand as={NavLink} to='/dashboard'>Dashboard</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-1 ">
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="text-decoration-none text-white">
                Profilom
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/lounge" className="fs-5">
                  Lounge
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/orderlist" className="fs-5">
                  Rendeléseim
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/user" className="fs-5">
                  Adataim
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <BlockButton
                    btnName="Kilépés"
                    variant="outline-danger"
                    onClick={() => handleLogout()}
                  >
                    Kilépés
                  </BlockButton>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Navbar.Text className="fs-5 p-0 ms-3">Belépve: {auth.user}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SignedIn;
