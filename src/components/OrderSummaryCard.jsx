import React from "react";
import { useAppContext } from "../context/context";

export default function OrderSummaryCard() {
  const { state } = useAppContext();

  const { totalQuantity, subTotal } = state.cart.reduce(
    (acc, curr) => {
      const totalQuantity = acc.totalQuantity + curr.quantity;
      const subTotal = acc.subTotal + curr.totalPrice;
      return { totalQuantity, subTotal };
    },
    { totalQuantity: 0, subTotal: 0 }
  );

  const handleCheckout = () => {
    alert("Checked Out!");
  };

  return (
    <div>
      <div className="flex flex-col items-end ">
        <div className="flex w-[40%] justify-start bg-slate-500">
          <p className=" text-xl font-semibold">Order Summary</p>
        </div>
        <div className="flex  w-[40%] justify-between my-2">
          <p>Subtotal ({totalQuantity} Items)</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <div className="flex w-[40%] justify-between my-2">
          <p>Shipping Fee</p>
          <p>$0</p>
        </div>
        <div className="flex w-[40%] justify-between my-2">
          <p>Total Fee</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <button
          className=" bg-orange-600 text-white px-4 py-1 rounded font-medium"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}