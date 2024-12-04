import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/context";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </StrictMode>
);
