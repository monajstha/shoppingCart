import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { useAppContext } from "../context/context";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const { state } = useAppContext();

  const selectedProduct = state.products.find((item) => item.id === +productId);
  return (
    <div className="h-dvh flex justify-center px-4">
      <ProductDetailsCard productDetails={selectedProduct} />
    </div>
  );
}
