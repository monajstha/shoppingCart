import React, { useState } from "react";
import CartCard from "../components/CartCard";
import { useAppContext } from "../context/context";

export default function CartPage() {
  const { state, method } = useAppContext();
  const [cartItems, setCartItems] = useState(state.cart);

  const handleDeleteCartItem = (productId) => {
    const cartData = [...cartItems];
    const filtered = cartData.filter((item) => item.id !== productId);
    setCartItems(filtered);
    method.removeFromCart(filtered);
  };

  console.log(state.cart);
  return (
    <div className="h-dvh flex flex-col px-8">
      {!!cartItems.length ? (
        cartItems.map((item) => (
          <CartCard
            key={item.id}
            productDetails={item}
            onDelete={() => handleDeleteCartItem(item.id)}
          />
        ))
      ) : (
        <div className="h-dvh flex flex-col justify-center items-center">
          Browse through products and add items to the cart :)
        </div>
      )}
    </div>
  );
}
