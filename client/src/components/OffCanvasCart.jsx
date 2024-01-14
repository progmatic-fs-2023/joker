import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import { useCart } from '../hooks/useCart';
import Cart from './Cart';
import CartIcon from '../assets/shopping_cart.svg';
import BlockButton from './micro/BlockButton';

function OffCanvasCart({ placement }) {
  const [show, setShow] = useState(false);
  const { cart } = useCart();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate('/shop');
    handleClose()
  };
  const location = useLocation();

  const handleCheckout = () => {
    if (location.pathname === '/userform') {
      navigate('/successfulorder');
    } else {
      // otherwise navigate to userform page
      navigate('/userform');
    }
    handleClose();
  };

  return (
    <div className='offcanvas w-25 d-flex align-items-end'>
      <Button
        variant="secondary"
        onClick={handleShow}
        className="w-25 d-flex justify-content-around"
      >
        <Image src={CartIcon} rounded className="img-fluid img-thumbnail w-25" />
        <Badge bg="info">{cart.length}</Badge>
        <span className="visually-hidden">termék a kosárban</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kosár</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length > 0 ? (
            <Cart handleClose={handleClose} onCheckout={handleCheckout} />
          ) : (
            <h5 className="h5">
              <p>A kosár üres.</p>
              <BlockButton variant="primary" btnName="Vissza a boltba" onClick={navigateToShop} />
            </h5>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      </div>
  );
}

OffCanvasCart.propTypes = {
  placement: PropTypes.string,
};

OffCanvasCart.defaultProps = {
  placement: undefined,
};

export default OffCanvasCart;
