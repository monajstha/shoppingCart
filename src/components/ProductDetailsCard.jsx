import React, { useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppContext } from "../context/context";

export default function ProductDetailsCard({ productDetails }) {
  const { state, method } = useAppContext();
  const { id, title, image, price, description, rating } = productDetails;
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    if (quantity >= rating.count) return;
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    toast.success("Item has been added to the cart!");

    method.addToCart({
      ...productDetails,
      quantity,
    });
  };

  console.log(state.cart);

  return (
    <div className="flex w-[100%] max-h-[60%]  bg-slate-500 m-3 items-start p-2">
      <img className="w-[40%] h-full" src={image} alt={title} />
      <div className="pl-4">
        <p className="text-xl font-medium">{title}</p>
        <p className="text-sm mt-2">{description}</p>
        <div className="mt-2 py-4 border-t border-b border-gray-400">
          <p>★★★★☆ {rating.rate} Rating</p>
          <p>Only {rating.count} items remaining</p>
          <p className="mt-2 text-2xl font-semibold">${price}</p>
        </div>
        <div className=" flex items-center mt-3">
          <button
            className=" pt-0 cursor-pointer font-medium mx-2 px-2 bg-black"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <input
            className="w-10 h-6 px-2 bg-inherit text-center cursor-text"
            type="number"
            value={quantity}
            onChange={(e) => {
              if (e.target.value.length > 2) return;
              if (e.target.value >= rating.count) return;

              setQuantity(e.target.value);
            }}
          />
          <button
            className=" pt-0 cursor-pointer font-medium mx-2 px-2 bg-black"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <div>
          <button className=" bg-blue-700 px-4 py-2 rounded-md font-semibold mt-3 mr-4">
            Buy Now
          </button>
          <button
            className=" bg-orange-500 px-4 py-2 rounded-md font-semibold mt-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
