import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import BlockButton from './micro/BlockButton';
import { useCart } from '../hooks/useCart';
import useAuth from "../hooks/useAuth";
import QuantitySelector from './QuantitySelector';
import DetailsModal from './DeatilsModal';
import NotificationRequestModal from './NotificationRequestModal'; // Importáljuk az értesítési modal-t
import {API_URL} from '../constants'

function CardKitchenSink({ stockItem }) {
  const { auth } = useAuth()
  const { addToCart: addToCartContext, setOrderId } = useCart();
  const { herbName, price, image, species, id, stockQuantity } = stockItem;
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
    <Card style={{ width: '17rem' }}>
      <Card.Img as={Image} variant="top" src={image[0]} alt={herbName} />
      <Card.Body>
        <Card.Title>{herbName}</Card.Title>
        <Card.Text>{`${stockItem.details.substring(0, 150)}...`}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <DetailsModal stockItem={stockItem} centered />
        </ListGroup.Item>
        <ListGroup.Item>{species}</ListGroup.Item>
        <ListGroup.Item>Készlet: {stockQuantity} g</ListGroup.Item>
        <ListGroup.Item>Ár: {price} Ft/g</ListGroup.Item>
        <ListGroup.Item>
          <Card.Link as={Link} to="#">
            Card Link
          </Card.Link>
          <Card.Link as={Link} to="#">
            Another Link
          </Card.Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={qty} />
        {stockQuantity <= 0 ? (
          <BlockButton
            variant="warning"
            type="button"
            btnName="Értesítést kérek"
            onClick={handleShowNotificationModal}
          />
        ) : (
          <BlockButton
            variant="outline-success"
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
  }).isRequired,
};

export default CardKitchenSink;
