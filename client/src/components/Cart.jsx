import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BlockButton from './micro/BlockButton';
import { useCart } from '../hooks/useCart';
import QuantitySelector from './QuantitySelector';
import { sumPriceCalc } from '../helpers/summaryCalc';
import {API_URL} from '../constants'

function Cart({ handleClose }) {
  const { cart, setCart, removeFromCart, clearCart, orderId } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/userform');
    handleClose();
  };

  const handleQuantityChange = async (productName, newQuantity) => {
    const product = cart.find((item) => item.herbName === productName);
    if (!product) {
      throw new Error('A termék nem található a kosárban.');
    }
    const herbID = product.id;
    const response = await fetch(`${API_URL}/orders/updateCartItem`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: orderId,
        herbID,
        newQuantity,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Hiba a frissítéskor: ${errorDetails}`);
    }

    const updatedCartItems = cart.map((item) =>
      item.herbName === productName ? { ...item, quantity: newQuantity } : item,
    );
    setCart(updatedCartItems);
  };

  const removeItem = (productName) => {
    removeFromCart(productName);
  };

  const emptyCart = () => {
    clearCart();
  };

  return (
    <div className="wrapper">
      <div className="products-container p-5 text-center">
        {cart.map((product) => (
          <div key={product.herbName} className="product p-2 m-2" style={{border: '1px lightgreen solid', borderRadius: '5px'}}>
            <div className="product-details">
              <img
                src={product.image[0]}
                alt={product.herbName}
                className="img-fluid img-thumbnail w-25"
              />
              <span>
                {product.herbName} - Mennyiség: {product.quantity}gr - Ár:
                {product.price * product.quantity} Ft
              </span>
            </div>
            <div className="selectproduct">
              <QuantitySelector
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.herbName, newQuantity, product.image[0])
                }
                initialQuantity={product.quantity}
              />
              <Button variant='outline-danger' type="button" className="btn-sm" onClick={() => removeItem(product.herbName)}>
                Törlés
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="shoppingcart">
        <strong>Kosár tartalma:</strong>
        <div>Termékek: {cart.length} tétel</div>
        <div>Fizetendő: {sumPriceCalc(cart)} Ft</div>
        <BlockButton variant="warning"
          type="button"
          btnName="Kosár ürítése"
          size='sm'
          onClick={emptyCart}
          classNames="m-2"
        />
        {/* <Button variant='danger' type="button" className="" onClick={emptyCart}>
          Kosár ürítése
        </Button> */}
      </div>
      <div className="checkout">
      <BlockButton variant="success"
          type="button"
          btnName="Fizetés és megrendelés"
          size='md'
          onClick={handleCheckout}
          classNames="m-2"
        />
        {/* <Button variant='success' type="button" className="" onClick={handleCheckout}>
          Fizetés és tovább megrendeléshez
        </Button> */}
      </div>
    </div>
  );
}

Cart.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Cart;
