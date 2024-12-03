import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}
