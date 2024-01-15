import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import QuantitySelector from '../components/QuantitySelector';
import ProductReview from '../components/ProductReview';
import { useCart } from '../hooks/useCart';
import useAuth from '../hooks/useAuth';
import { API_URL } from '../constants';
import NotificationRequestModal from '../components/NotificationRequestModal';

function Product() {
  const { auth } = useAuth();
  const location = useLocation();
  const stockItem = location.state?.stockItem;
  const { addToCart: addToCartContext, setOrderId } = useCart();
  const { herbName, price, image, species, id, stockQuantity, details } = stockItem || {};
  const [qty, setQuantity] = useState(0);
  const [outOfStockNotification, setOutOfStockNotification] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleShowNotificationModal = () => {
    setOutOfStockNotification(true);
  };

  const handleCloseNotificationModal = () => {
    setOutOfStockNotification(false);
  };

  const addToCart = async () => {
    if (qty <= 0) return;

    if (stockQuantity <= 0) {
      // Product is out of stock
      handleShowNotificationModal();
      return;
    }
    // Test id for testing, in real use logged in user
    // const testUserId = "b18c15d2-97f5-42a2-bc12-1fd94a2f97e9";
    const loggedInUser = auth.userId;
    const response = await fetch(`${API_URL}/orders/addToCart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: loggedInUser,
        herbID: id,
        quantity: qty,
      }),
    });
    const order = await response.json();

    if (response.ok) {
      addToCartContext({ ...stockItem, quantity: qty });
      setOrderId(order.id);
    } else {
      throw new Error('Hiba a termék kosárba helyezésekor.');
    }

    setQuantity(0);
  };

  return (
    <Card className="mb-3 text-center">
      <Card.Header>{herbName}</Card.Header>
      <Card.Body>
        <Image
          src={image[0]}
          alt={herbName}
          fluid
          style={{ maxWidth: '300px', margin: '0 auto' }}
        />
        <div className="mt-3">
          <h5>Részletek</h5>
          <p>{details}</p>
          <ListGroup variant="flush">
            <ListGroup.Item>Faj: {species}</ListGroup.Item>
            <ListGroup.Item>Készlet: {stockQuantity} g</ListGroup.Item>
            <ListGroup.Item>Ár: {price} Ft/g</ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-center align-items-center">
          <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={qty} />
        </div>
        {stockQuantity <= 0 ? (
          <Button variant="warning" onClick={handleShowNotificationModal}>
            Értesítést kérek
          </Button>
        ) : (
          <Button variant="success" onClick={addToCart}>
            Kosárba
          </Button>
        )}
        <ProductReview />
      </Card.Footer>
      <NotificationRequestModal // Itt megjelenítjük az értesítés kérése modált
        show={outOfStockNotification}
        onClose={handleCloseNotificationModal}
      />
    </Card>
  );
}

Product.propTypes = {
  stockItem: PropTypes.shape({
    herbName: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    stockQuantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
