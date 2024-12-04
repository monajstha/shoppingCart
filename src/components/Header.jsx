import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/context";

export default function Header() {
  const { state } = useAppContext();
  return (
    <header className="flex items-center justify-between w-[100%] p-4 px-8">
      <div className="hover:text-slate-50">LOGO</div>
      <nav>
        <div className="flex">
          <Link
            to="/"
            className=" text-slate-200 p-2 mx-4 cursor-pointer text-lg hover:text-slate-50 active:text-slate-50 font-medium"
          >
            Home
          </Link>
          <Link
            to="/products"
            className=" text-slate-200 p-2 mx-4 cursor-pointer text-lg hover:text-slate-50"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className=" text-slate-200 p-2 mx-4 cursor-pointer text-lg hover:text-slate-50"
          >
            <div className="flex relative">
              <p>Cart</p>
              {!!state.cart.length && (
                <div className="flex justify-center items-center absolute top-[-5px] right-[-20px] h-[20px] w-[20px]  bg-red-600 rounded-[10px] ">
                  <p className=" text-white font-medium">{state.cart.length}</p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
