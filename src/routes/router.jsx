import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
