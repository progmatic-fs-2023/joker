import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import BlockButton from './micro/BlockButton';
import { useCart } from '../hooks/useCart';
import useAuth from '../hooks/useAuth';
import QuantitySelector from './QuantitySelector';
import DetailsModal from './DeatilsModal';
import NotificationRequestModal from './NotificationRequestModal';
import StarRating from './micro/StarRating';
import { API_URL } from '../constants';

function CardKitchenSink({ stockItem }) {
  const { auth } = useAuth();
  const { addToCart: addToCartContext, setOrderId } = useCart();
  const { herbName, price, image, species, id, stockQuantity, rating } = stockItem;
  const [qty, setQuantity] = useState(0);
  const [outOfStockNotification, setOutOfStockNotification] = useState(false);
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/product/${stockItem.id}`, { state: { stockItem } });
  };

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
      setOutOfStockNotification(true);
      return;
    }

    // Test id for testing, in real use logged in user
    // const testUserId = "b18c15d2-97f5-42a2-bc12-1fd94a2f97e9";
    const loggedInUser = auth.userId;
    // console.log('testUserId:', loggedInUser)

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
    <Card className="p-0 text-center" style={{ width: '20rem' }}>
      <div
        className="card-img-top"
        style={{ height: '200px', overflow: 'hidden', textAlign: 'center' }}
      >
        <Image
          src={image[0]}
          alt={herbName}
          fluid
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>
      <Card.Body>
        <Card.Title>{herbName}</Card.Title>
        <Card.Text>{`${stockItem.details.substring(0, 150)}...`}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <DetailsModal stockItem={stockItem} centered />
        </ListGroup.Item>
        <ListGroup.Item>{species}</ListGroup.Item>
        <ListGroup.Item>
          <StarRating rating={rating} />
        </ListGroup.Item>
        <ListGroup.Item>Készlet: {stockQuantity} g</ListGroup.Item>
        <ListGroup.Item>Ár: {price} Ft/g</ListGroup.Item>
        <BlockButton
          classNames="p-4"
          size="m"
          variant="success"
          type="button"
          btnName="Adatlap"
          onClick={navigateToProduct}
        />
      </ListGroup>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={qty} />
        {stockQuantity <= 0 ? (
          <BlockButton
            size="m"
            variant="warning"
            type="button"
            btnName="Értesítést kérek"
            onClick={handleShowNotificationModal}
          />
        ) : (
          <BlockButton
            size="m"
            variant="success"
            type="button"
            btnName="Kosárba"
            onClick={addToCart}
          />
        )}
      </Card.Body>
      <NotificationRequestModal
        show={outOfStockNotification}
        onClose={handleCloseNotificationModal}
      />
    </Card>
  );
}

CardKitchenSink.propTypes = {
  stockItem: PropTypes.shape({
    herbName: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    stockQuantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardKitchenSink;
