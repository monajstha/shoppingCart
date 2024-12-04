import React, { useState } from "react";

export default function CartCard({ productDetails, onDelete }) {
  const { id, title, image, price, quantity, totalPrice } = productDetails;

  return (
    <div className="flex bg-slate-500 justify-start items-start mb-4 cursor-pointer">
      <img className="w-28 h-28" src={image} alt={title} />
      <div className="w-[90%] px-4 py-2">
        <p className="text-xl">{title}</p>
        <p className="font-medium">Quantity: {quantity}</p>
        <p>Product's Price: ${price}</p>
        <p className="font-bold text-lg">Total Price: ${totalPrice ?? price}</p>
      </div>
      <button
        className="bg-red-700 text-white p-1 px-2 rounded m-2"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}
