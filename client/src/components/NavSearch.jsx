import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OffCanvasCart from './OffCanvasCart';
import useAuth from '../hooks/useAuth';
import SignedIn from './secure/SignedIn';

function NavSearch() {
  const { auth } = useAuth();

  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex text-center w-100">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Kezdőlap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex align-items-center me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Magazin
            </Nav.Link>
            {auth?.role ? (
              <SignedIn user={auth.user} />
            ) : (
              <NavDropdown title="Felhasználóknak" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/login">
                  Belépés
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/register">
                  Regisztráció
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/howtobuy">
                  Vásárlás menete
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Itt kereshetsz"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Keresés</Button>
            <OffCanvasCart placement="end" name="Kosár" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSearch;
