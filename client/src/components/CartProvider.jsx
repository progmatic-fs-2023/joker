import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../contexts/CartContext';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const { herbName, quantity, unitPrice } = product;

    if (quantity > 0) {
      const existingProductIndex = cart.findIndex((item) => item.herbName === herbName);

      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        const orderItem = {
          ...product,
        };
        setCart([...cart, orderItem]);
      }

      const itemTotalPrice = quantity * unitPrice;
      setTotalPrice(totalPrice + itemTotalPrice);
    }
  };
  const removeFromCart = (productName) => {
    const updatedCart = cart.filter((item) => item.herbName !== productName);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const contextValue = useMemo(
    () => ({ cart, addToCart, setCart, removeFromCart, clearCart }),
    [cart, addToCart, setCart, removeFromCart, clearCart],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
