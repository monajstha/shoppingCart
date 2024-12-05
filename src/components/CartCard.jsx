import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

export default function CartCard({ productDetails, onDelete }) {
  const { method } = useAppContext();
  const { id, title, image, price, quantity, totalPrice, rating } =
    productDetails;

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemTotalPrice, setItemTotalPrice] = useState(totalPrice);

  const handleIncreaseQuantity = () => {
    if (itemQuantity >= rating.count) return;
    setItemQuantity(itemQuantity + 1);
    setItemTotalPrice((itemQuantity + 1) * price);
    method.updateCart(id, {
      quantity: itemQuantity + 1,
      totalPrice: (itemQuantity + 1) * price,
    });
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity <= 1) return;
    setItemQuantity(itemQuantity - 1);
    setItemTotalPrice((itemQuantity - 1) * price);

    method.updateCart(id, {
      quantity: itemQuantity - 1,
      totalPrice: (itemQuantity - 1) * price,
    });
  };

  return (
    <div className="flex bg-slate-500 justify-start items-start mb-4 cursor-pointer">
      <img className="w-28 h-28" src={image} alt={title} />
      <div className="w-[60%] px-4 py-2">
        <p className="text-xl">{title}</p>
        <p className="font-medium">Quantity: {itemQuantity}</p>
        <p>Product's Price: ${price}</p>
        <p className="font-bold text-lg">
          Total Price: ${itemTotalPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between w-[40%]">
        <div className=" flex mt-3 justify-center items-center">
          <button
            className=" pt-0 cursor-pointer font-medium mx-2 px-2 bg-black"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <input
            className="w-10 h-6 px-2 bg-inherit text-center cursor-text"
            type="number"
            value={itemQuantity}
            onChange={(e) => {
              if (e.target.value.length > 2) return;
              if (e.target.value >= rating.count) return;

              setItemQuantity(e.target.value);
            }}
          />
          <button
            className=" pt-0 cursor-pointer font-medium mx-2 px-2 bg-black"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-700 text-white p-1 px-2 rounded m-2"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
