import { createContext, useState } from 'react';

 export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
   
    };
  
    

  return (
    <CartContext.Provider value={{ cart,setCart, addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// export default CartContext;
