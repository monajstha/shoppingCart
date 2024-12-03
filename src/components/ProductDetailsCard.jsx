import React from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";

export default function ProductDetailsCard({ productDetails }) {
  const { productId } = useParams();
  console.log({ productId });
  //   const navigate = useNavigate();
  //   const { id, title, image, price } = productDetails;

  return (
    <div className="flex flex-row w-52 h-56  bg-slate-500 m-3 justify-center items-start cursor-pointer">
      {/* <img className="w-52 h-36" src={image} alt={title} />
      <div className="p-2">
        <p className="line-clamp-2">{title}</p>
        <p>${price}</p>
      </div> */}
    </div>
  );
}
