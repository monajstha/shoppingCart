import React, { useEffect, useContext } from "react";
import { useAppContext } from "../context/context";

export default function HomePage() {
  const { state } = useAppContext();
  console.log({ state });
  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      Shop everything you need in one place!
    </div>
  );
}
