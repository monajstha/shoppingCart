import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export async function action() {
  console.log("Action on HomePage");
}

export async function loader() {
  const products = await fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return { products };
}

export default function ProductsPage() {
  const { products } = useLoaderData();

  return (
    <div className="flex flex-wrap">
      {products.map((item) => (
        <div key={item.id}>
          <ProductCard productDetails={item} />
        </div>
      ))}
    </div>
  );
}
