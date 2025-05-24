import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (product, quantity = 1) => {
  //   const existing = cart.find((item) => item._id === product._id);

  //   if (existing) {
  //     setCart(
  //       cart.map((item) =>
  //         item._id === product._id
  //           ? { ...item, quantity: item.quantity + quantity }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity }]);
  //   }
  // };
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item._id === product._id);
      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product }];
      }
    });
  };


  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

