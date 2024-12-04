import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/context";

export default function Header() {
  const { state } = useAppContext();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Tracks the count of recently added items
  const [recentlyAddedCount, setRecentlyAddedCount] = useState(0);
  // Stores the cart size at the time of visiting the cart
  const [lastCartSize, setLastCartSize] = useState(state.cart.length);

  // Reset recentlyAddedCount when on the cart page
  useEffect(() => {
    if (isActive("/cart")) {
      setRecentlyAddedCount(0); // Clear notification
      setLastCartSize(state.cart.length); // Update reference to cart size
    }
  }, [location.pathname, state.cart.length]);

  // Update recentlyAddedCount when cart changes and not on the cart page
  useEffect(() => {
    if (!isActive("/cart")) {
      const newItems = state.cart.length - lastCartSize;
      if (newItems > 0) {
        setRecentlyAddedCount(newItems);
      }
    }
  }, [state.cart.length]);

  return (
    <header className="flex items-center justify-between w-[100%] p-4 px-8">
      <div className="hover:text-slate-50">LOGO</div>
      <nav>
        <div className="flex">
          <Link
            to="/"
            className={` text-slate-200 p-2 mx-4 cursor-pointer text-lg hover:text-slate-50 active:text-slate-50 font-medium
            ${isActive("/") ? "font-semibold text-slate-50" : "font-normal"}
            `}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-slate-200 p-2 mx-4 cursor-pointer text-lg hover:text-slate-50
            ${
              isActive("/products")
                ? "font-semibold text-slate-50"
                : "font-normal"
            }           
            `}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className={`text-slate-200 p-2 mx-4 cursor-pointer text-lg hover:text-slate-50
            ${isActive("/cart") ? "font-semibold text-slate-50" : "font-normal"}
            `}
          >
            <div className="flex relative">
              <p>Cart</p>
              {!!recentlyAddedCount && (
                <div className="flex justify-center items-center absolute top-[-5px] right-[-20px] h-[20px] w-[20px]  bg-red-600 rounded-[10px] ">
                  <p className=" text-white font-medium">
                    {recentlyAddedCount}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
