import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-[100%] p-4 px-8">
      <div className="hover:text-slate-50">LOGO</div>
      <nav>
        <div className="flex">
          <div className="p-2 mx-4 cursor-pointer text-lg hover:text-slate-50 active:text-slate-50 font-medium">
            Home
          </div>
          <div className="p-2 mx-4 cursor-pointer text-lg hover:text-slate-50">
            Products
          </div>
          <div className="p-2 mx-4 cursor-pointer text-lg hover:text-slate-50">
            Cart
          </div>
        </div>
      </nav>
    </header>
  );
}
