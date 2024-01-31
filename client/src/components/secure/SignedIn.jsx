import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import BlockButton from '../micro/BlockButton';
import useAuth from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { API_URL } from '../../constants';

function SignedIn() {
  const { auth, handleLogout } = useAuth();
  const { cart, clearCart, orderId } = useCart();
  const emptyCart = async () => {
    if (cart.length === 0) {
      handleLogout();
      return;
    }

    const response = await fetch(`${API_URL}/orders/clearCart/${orderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Nem sikerült kiüríteni a kosarat.');
    }

    clearCart();
    handleLogout();
  };

  return (
    <Navbar className="fs-4">
      <Container>
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
                <Dropdown.Divider />
                {auth.role === 'BASIC' ? (
                  <>
                    <Dropdown.Item as={NavLink} to="/orderlist" className="fs-5">
                      Rendeléseim
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/user" className="fs-5">
                      Adataim
                    </Dropdown.Item>
                  </>
                ) : null}
                {/* {auth.role && ADMIN_ROLES.includes(auth.role) && (
                  <>
                    <Dropdown.Item as={NavLink} to="/usereditor" className="fs-5">
                      Felhasználók
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/herbeditor" className="fs-5">
                      Gyógynövények
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/feed" className="fs-5">
                      Cikkek
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/ordereditor" className="fs-5">
                      Megrendelések
                    </Dropdown.Item>
                  </>
                )} */}
                <Dropdown.Item>
                  <BlockButton
                    btnName="Kilépés"
                    variant="outline-danger"
                    onClick={() => {
                      emptyCart();
                      handleLogout();
                    }}
                  >
                    Kilépés
                  </BlockButton>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="fs-5 p-0 ms-3">Belépve: {auth.user}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default SignedIn;
