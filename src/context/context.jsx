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
    setState((prevState) => ({
      ...prevState,
      cart: [...prevState.cart, ...product],
    }));
  };

  return (
    <Context.Provider value={{ state, updateProducts, addToCart }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
