import "./App.css";
import { ContextProvider } from "./context/context";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router}>
        <ToastContainer position="top-right" />
      </RouterProvider>
    </ContextProvider>
  );
};

export default App;
