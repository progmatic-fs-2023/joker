import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import QuantitySelector from '../components/QuantitySelector';
import ProductReview from '../components/ProductReview';
import FeedbackList from '../components/FeedbackList';
import { useCart } from '../hooks/useCart';
import useAuth from '../hooks/useAuth';
import { API_URL } from '../constants';
import StarRating from '../components/micro/StarRating';
import NotificationRequestModal from '../components/NotificationRequestModal';
import StockAlertModal from '../components/micro/StockAlertModal';
import LoginOrRegisterModal from '../components/micro/LoginOrRegisterModal';

function Product() {
  const { id } = useParams();
  const { auth } = useAuth();
  const [stockItem, setStockItem] = useState(null);
  const { cart, addToCart: addToCartContext, setOrderId } = useCart();
  const [qty, setQuantity] = useState(0);
  const [outOfStockNotification, setOutOfStockNotification] = useState(false);
  const [showStockAlertModal, setShowStockAlertModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [showLoginOrRegisterModal, setShowLoginOrRegisterModal] = useState(false);

  const fetchFeedback = async () => {
    const response = await fetch(`${API_URL}/herbs/feedback/${id}`);
    if (response.ok) {
      const data = await response.json();
      setFeedback(data);
      setShowReview(false);
    } else {
      throw new Error('Hiba a visszajelzések lekérdezésekor.');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${API_URL}/herbs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setStockItem(data);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    fetchFeedback();
  }, [id]);

  if (!stockItem) {
    return <div>Betöltés folyamatban...</div>;
  }

  const { herbName, price, image, species, stockQuantity, details, rating } = stockItem;

  const getTotalQuantityInCartForItem = (itemId) => {
    const itemInCart = cart.find((item) => item.id === itemId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  const maxQuantityInCart = stockQuantity - getTotalQuantityInCartForItem(id);

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
      handleShowNotificationModal();
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

  const onFeedbackUpdate = (feedbackId, updatedFeedback = null) => {
    if (updatedFeedback) {
      setFeedback((prevFeedback) =>
        prevFeedback.map((fb) => (fb.id === feedbackId ? { ...fb, ...updatedFeedback } : fb)),
      );
    } else {
      setFeedback((prevFeedback) => prevFeedback.filter((fb) => fb.id !== feedbackId));
    }
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
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details) }} />
          <ListGroup variant="flush">
            <ListGroup.Item>Faj: {species}</ListGroup.Item>
            <ListGroup.Item>
              <StarRating rating={rating} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="primary"
                onClick={() => {
                  const userRoles = ['SUPERADMIN', 'ADMIN', 'BASIC'];
                  if (!userRoles.includes(auth.role)) {
                    handleShowLoginOrRegisterModal();
                    return;
                  }
                  setShowReview(!showReview);
                }}
              >
                Értékelés
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>Készlet: {stockQuantity} g</ListGroup.Item>
            <ListGroup.Item>Ár: {price} Ft/g</ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-center align-items-center">
          <QuantitySelector
            onQuantityChange={handleQuantityChange}
            initialQuantity={qty}
            maxQuantity={stockQuantity}
          />
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
        {showReview && (
          <ProductReview herbID={id} userId={auth.userId} onFeedbackPosted={fetchFeedback} />
        )}
        <FeedbackList
          feedback={feedback}
          userId={auth.userId}
          onFeedbackUpdate={onFeedbackUpdate}
        />
      </Card.Footer>
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

export default Product;
