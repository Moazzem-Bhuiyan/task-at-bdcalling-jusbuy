import { useEffect, useState } from 'react';

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  return {
    cartItems,
    setCartItems
  };
}
