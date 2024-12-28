import { useState, useEffect } from 'react';
import { cart } from 'cart/cart';


export function useCartCount() {
  const [count, setCount] = useState(cart.cartItems.length);

  useEffect(() => { 
    const subscription = cart.subscribe((value) => {
      setCount(value.cartItems.length);
    })
   
  }, [])

  return count;
}