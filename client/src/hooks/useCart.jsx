import { useContext } from 'react';
import CartContext from '../contexts/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart usable only in one CartProvider');
  }
  return context;
};

export default useCart;
