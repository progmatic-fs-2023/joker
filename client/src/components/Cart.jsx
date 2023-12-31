import { useCart } from '../hooks/useCart';
import QuantitySelector from './QuantitySelector';
import { sumPriceCalc } from '../helpers/summaryCalc';

function Cart() {
  const { cart, setCart, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (productName, newQuantity, productImage) => {
    const updatedCartItems = cart.map((item) =>
      item.herbName === productName ? { ...item, quantity: newQuantity, image: productImage } : item,
    );

    setCart(updatedCartItems);
  };

  const removeItem = (productName) => {
    removeFromCart(productName);
  };

  const emptyCart = () => {
    clearCart();
    setTotalQuantityInCart(0);
  };

  return (
    <div className="wrapper">
      <div className="products-container">
        {cart.map((product) => (
          <div key={product.herbName} className="product flex around items-center p-4 mb-2">
            <div className="product-details flex items-center">
              <img src={product.image[0]} alt={product.herbName} className="w-16 h-16 object-cover mr-4" />
              <span>
                {product.herbName} - Mennyiség: {product.quantity}gr - Ár:{' '}
                {product.price * product.quantity} Ft
              </span>
            </div>
            <div className="selectproduct flex items-center">
              <QuantitySelector
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.herbName, newQuantity, product.image[0])
                }
                initialQuantity={product.quantity}
              />
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-red-700 ml-2"
                onClick={() => removeItem(product.herbName)}
              >
                Törlés
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="shoppingcart p-4">
        <strong>Kosár tartalma:</strong>
        <div>Termékek: {cart.length} tétel</div>
        <div>Fizetendő: {sumPriceCalc(cart)} Ft</div>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-red-700 mt-2"
          onClick={emptyCart}
        >
          Kosár ürítése
        </button>
      </div>
      <div className="checkout p-4">
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-700"
        >
          Fizetés és tovább megrendeléshez
        </button>
      </div>
    </div>
  );
}

export default Cart;
