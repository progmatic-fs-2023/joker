import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginToast from './LoginToast';
import Login from './Login';
import OffCanvasCart from './OffCanvasCart'

function CollapsibleNav() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">

            <Container>

                <Navbar.Brand as={NavLink} to="/">Herbalism.hu</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={NavLink} to="/userform">UserForm</Nav.Link>
                        <Nav.Link as={NavLink} to="/successfulorder">SuccessfulOrder</Nav.Link>
                        <NavDropdown title="Információk" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/contact">Kapcsolat</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/howtobuy">
                                Vásárlás menete
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/questionare">Kérdezz-felelek</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/sitemap">
                                Oldaltérkép
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/deets">Gyógyteák</Nav.Link>
                        <Nav.Link eventKey={2} as={NavLink} to="/memes">
                            Kiegészítők
                        </Nav.Link>
                        {/* {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
                            ))} */}
                        <OffCanvasCart placement='end' name='Kosár' />
                    </Nav>
                    <LoginToast>
                        <Login />
                    </LoginToast>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default CollapsibleNav;