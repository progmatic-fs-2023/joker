import { useState } from 'react';
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
import StockAlertModal from './micro/StockAlertModal';
import LoginOrRegisterModal from './micro/LoginOrRegisterModal';
import { API_URL } from '../constants';

function CardKitchenSink({ stockItem }) {
  const { auth } = useAuth();
  const { cart, addToCart: addToCartContext, setOrderId } = useCart();
  const { herbName, price, image, species, id, stockQuantity, rating } = stockItem;
  const [qty, setQuantity] = useState(0);
  const [outOfStockNotification, setOutOfStockNotification] = useState(false);
  const [showStockAlertModal, setShowStockAlertModal] = useState(false);
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);
  const [showLoginOrRegisterModal, setShowLoginOrRegisterModal] = useState(false);

  const getTotalQuantityInCartForItem = (itemId) => {
    const itemInCart = cart.find((item) => item.id === itemId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  const maxQuantityInCart = stockQuantity - getTotalQuantityInCartForItem(id);

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

  const handleShowLoginOrRegisterModal = () => {
    setShowLoginOrRegisterModal(true);
  };

  const handleCloseLoginOrRegisterModal = () => {
    setShowLoginOrRegisterModal(false);
  };

  const addToCart = async () => {
    if (qty <= 0) return;
    const userRoles = ['SUPERADMIN', 'ADMIN', 'BASIC'];
    if (!userRoles.includes(auth.role)) {
      handleShowLoginOrRegisterModal();
      return;
    }

    if (qty > maxQuantityInCart) {
      setQuantity(0);
      setShowStockAlertModal(true);
      return;
    }

    if (stockQuantity <= 0) {
      // Product is out of stock
      setOutOfStockNotification(true);
      return;
    }

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
    <Card className="p-0 coloredCards text-center" style={{ width: '20rem' }}>
      <div
        className="card-img-top"
        style={{ height: '200px', overflow: 'hidden', textAlign: 'center' }}
      >
        <Card.Title>{herbName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <i>{species}</i>
        </Card.Subtitle>
        <Image
          src={image[0]}
          alt={herbName}
          fluid
          style={{ width: '80%', height: 'auto', objectFit: 'cover' }}
        />
      </div>
      <Card.Body>
        <Card.Text
          data-hover="Olvass tovább!"
          className="text-underline-hover hovertext mb-0"
          onClick={() => setLgShow(true)}
        >{`${stockItem.details.substring(0, 150)}...`}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <DetailsModal
          stockItem={stockItem}
          show={lgShow}
          handleClose={() => setLgShow(false)}
          centered
        />
        <ListGroup.Item className="listWithColor">
          <StarRating rating={rating} />
        </ListGroup.Item>
        <ListGroup.Item className="listWithColor">Készlet: {stockQuantity} g</ListGroup.Item>
        <ListGroup.Item className="listWithColor">Ár: {price} Ft/g</ListGroup.Item>
        <BlockButton
          classNames="pt-1 pb-1 ps-5 pe-5"
          size="m"
          variant="success"
          type="button"
          btnName="Részletes adatlap"
          onClick={navigateToProduct}
        />
      </ListGroup>
      <Card.Body
        className="pt-1"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <QuantitySelector
          onQuantityChange={handleQuantityChange}
          initialQuantity={qty}
          maxQuantity={stockQuantity}
        />
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
      <StockAlertModal
        show={showStockAlertModal}
        handleClose={() => setShowStockAlertModal(false)}
        availableQuantity={maxQuantityInCart}
      />
      <LoginOrRegisterModal
        show={showLoginOrRegisterModal}
        onClose={handleCloseLoginOrRegisterModal}
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
