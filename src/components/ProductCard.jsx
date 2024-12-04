import React from "react";
import { redirect, useNavigate } from "react-router-dom";

export default function ProductCard({ productDetails }) {
  const navigate = useNavigate();
  const { id, title, image, price } = productDetails;

  const handleProductClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="flex flex-col w-56 h-60  bg-slate-500 m-3 justify-center items-start cursor-pointer"
      onClick={handleProductClick}
    >
      <img className="w-56 h-36" src={image} alt={title} />
      <div className="p-2">
        <p className="line-clamp-2">{title}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
