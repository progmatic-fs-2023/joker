import { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image'
import { useCart } from '../hooks/useCart';
import Cart from './Cart';
import CartIcon from '../assets/shopping_cart.svg'

function OffCanvasCart({ placement }) {
  const [show, setShow] = useState(false);
  const { cart } = useCart();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className='w-25 d-flex justify-content-between' >
        <Image src={CartIcon} rounded className="img-fluid img-thumbnail" />
        <Badge bg="info">{cart.length}</Badge>
        <span className="visually-hidden">termék a kosárban</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kosár</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            cart[0] ? <Cart handleClose={handleClose} /> : <h6 className='h6'>A kosár üres.</h6>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

OffCanvasCart.propTypes = {
  placement: PropTypes.string.isRequired
};

export default OffCanvasCart
