import React, { useEffect, useContext } from "react";
import { useAppContext } from "../context/context";

export default function HomePage() {
  const { state } = useAppContext();
  console.log({ state });
  return <div>HomePage</div>;
}
