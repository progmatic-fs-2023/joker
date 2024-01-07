import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import BlockButton from './micro/BlockButton';
import { useCart } from '../hooks/useCart';
import QuantitySelector from './QuantitySelector';
import DetailsModal from './DeatilsModal';

function CardKitchenSink({ stockItem }) {
  const { addToCart: addToCartContext } = useCart();
  const { herbName, price, image, species } = stockItem;
  const [qty, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    addToCartContext({ ...stockItem, quantity: qty });
    setQuantity(0);
  };

  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img as={Image} variant="top" src={image[0]} alt={herbName} />
      <Card.Body>
        <Card.Title>{herbName}</Card.Title>
        <Card.Text>
          {`${stockItem.details.substring(0, 150)}...`}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>    
      <DetailsModal stockItem={stockItem} centered />
        </ListGroup.Item>
        <ListGroup.Item>{species}</ListGroup.Item>
        <ListGroup.Item>Készlet: {stockItem.stockQuantity} g</ListGroup.Item>
        <ListGroup.Item>Ár: {price} Ft/g</ListGroup.Item>
        <ListGroup.Item>
          <Card.Link as={Link} to="#">Card Link</Card.Link>
          <Card.Link as={Link} to="#">Another Link</Card.Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={qty} />
        <BlockButton variant="outline-success" type='button' btnName='Kosárba' onClick={addToCart} />
      </Card.Body>
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
  }).isRequired,
};

export default CardKitchenSink;