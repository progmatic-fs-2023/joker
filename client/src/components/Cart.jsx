import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import QuantitySelector from './QuantitySelector';
import { sumPriceCalc } from '../helpers/summaryCalc';

function Cart({handleClose}) {
  const { cart, setCart, removeFromCart, clearCart } = useCart();

  const navigate = useNavigate();
  const handleCheckout = () => {
      navigate('/userform');
      handleClose();
  };

  const handleQuantityChange = (productName, newQuantity, productImage) => {
    const updatedCartItems = cart.map((item) =>
      item.herbName === productName
        ? { ...item, quantity: newQuantity, image: [productImage] }
        : item,
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
    <div className="wrapper col-3">
      <div className="products-container">
        {cart.map((product) => (
          <div key={product.herbName} className="product">
            <div className="product-details">
              <img
                src={product.image[0]}
                alt={product.herbName}
                className="img-fluid img-thumbnail"
              />
              <span>
                {product.herbName} - Mennyiség: {product.quantity}gr - Ár:{' '}
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
              <button
                type="button"
                className=""
                onClick={() => removeItem(product.herbName)}
              >
                Törlés
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="shoppingcart">
        <strong>Kosár tartalma:</strong>
        <div>Termékek: {cart.length} tétel</div>
        <div>Fizetendő: {sumPriceCalc(cart)} Ft</div>
        <button
          type="button"
          className=""
          onClick={emptyCart}
        >
          Kosár ürítése
        </button>
      </div>
      <div className="checkout">
        <button
          type="button"
          className=""
          onClick={handleCheckout}
        >
          Fizetés és tovább megrendeléshez
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default Cart;
