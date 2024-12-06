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
      className="flex flex-col w-56 h-72  bg-white m-3 justify-center items-start cursor-pointer shadow-black shadow-lg hover:shadow-xl"
      aria-label={`View details for ${title}`}
      onClick={handleProductClick}
      role="button"
    >
      <div className="flex justify-center items-center w-full h-48 p-4 ">
        <img
          className="w-full h-40 object-contain"
          src={image}
          alt={title}
          onLoad={() => <>Loading..</>}
        />
      </div>
      <div className="p-2 bg-slate-700 w-[100%] text-lg h-full">
        <p className="line-clamp-2 text-lg">{title}</p>
        <p className="">${price}</p>
      </div>
    </div>
  );
}
