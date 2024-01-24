import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import OffCanvasCart from './OffCanvasCart';
import useAuth from '../hooks/useAuth';
import SignedIn from './secure/SignedIn';

import { GiPlantsAndAnimals } from 'react-icons/gi';

function NavSearch() {
  const { auth } = useAuth();

  return (
    <Navbar expand="lg" className="bg-success d-flex text-center w-100 fs-4">
      <Container fluid>
        <GiPlantsAndAnimals size={45} className="me-2" />
        <Navbar.Brand as={NavLink} to="/" className="text-white fs-3">
          Herbalism.hu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex align-items-center me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/shop" className="text-white">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="text-white me-2">
              Magazin
            </Nav.Link>
            {auth?.role ? (
              <SignedIn user={auth.user} className="text-white fs-4" />
            ) : (
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} className="text-decoration-none text-white">
                  Felhasználóknak
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/login" className="fs-5">
                    Belépés
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/register" className="fs-5">
                    Regisztráció
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={NavLink} to="/howtobuy" className="fs-5">
                    Vásárlás menete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Itt kereshetsz"
              className="me-2 pe-5"
              aria-label="Search"
            />
            <Button variant="outline-light">Keresés</Button>
            <OffCanvasCart placement="end" name="Kosár" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSearch;
