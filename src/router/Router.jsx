import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import SearchResults from "../pages/SearchResults/SearchResults";
import Sample from "./../components/home/special/Sample";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import OrderConfirmation from "../pages/OrderConfirmation/OrderConfirmation";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import Order from "../pages/Order/Order";
import SavedAddress from "../pages/SavedAddress/SavedAddress";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/account-settings",
        element: <AccountSettings />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/saved-address",
        element: <SavedAddress />,
      },
      {
        path: "/test",
        element: <Sample />,
      },
    ],
  },
]);
