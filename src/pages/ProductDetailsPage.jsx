import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { useAppContext } from "../context/context";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const { state, method } = useAppContext();

  console.log(state.products);
  const selectedProduct = state.products.find((item) => item.id === +productId);
  console.log(productId, { selectedProduct });
  return <ProductDetailsCard productDetails={selectedProduct} />;
}
