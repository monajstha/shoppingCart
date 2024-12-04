import React, { useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/context";

export default function ProductsPage() {
  const { state, method } = useAppContext();
  const hasFetched = useRef(false);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => method.updateProducts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!hasFetched.current && state.products.length === 0) {
      getProducts();
      hasFetched.current = true;
    }

    return () => {};
  }, []);

  return state.products.length === 0 ? (
    <div className="h-dvh flex justify-center items-center">Loading...</div>
  ) : (
    <div className="flex flex-wrap  px-4">
      {state.products.map((item) => (
        <div key={item.id}>
          <ProductCard productDetails={item} />
        </div>
      ))}
    </div>
  );
}
