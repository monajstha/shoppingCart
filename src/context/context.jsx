import React, { createContext, useContext, useState } from "react";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    products: [],
    cart: [],
  });

  const updateProducts = (data) => {
    setState((prevState) => ({
      ...prevState,
      products: [...prevState.products, ...data],
    }));
  };

  const addToCart = (product) => {
    const allCartItems = [...state.cart];
    const updatedCart = allCartItems.reduce((acc, curr) => {
      if (curr.id === product.id) {
        const totalQuantity = curr.quantity + product.quantity;
        acc.push({
          ...curr,
          quantity: totalQuantity,
          price: totalQuantity * curr.price,
        });
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
    // Check if product exists in the cart and add it if it doesn't
    const isProductInCart = allCartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      updatedCart.push({ ...product });
    }
    setState((prevState) => ({
      ...prevState,
      cart: updatedCart,
    }));
  };

  return (
    <Context.Provider value={{ state, method: { updateProducts, addToCart } }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
