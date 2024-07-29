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
import WishList from "../pages/WishList/WishList";
import PayMentOption from "../pages/PayMentOption/PayMentOption";
import Notifications from "../pages/Notifications/Notifications";
import About from "../pages/About/About";
import BecomeVendor from "../pages/BecomeVendor/BecomeVendor";
import ContactForm from "../pages/ContactForm/ContactForm";
import Login from "../pages/Login/Login";
import SidebarMainMenu from "../components/SideBar/SidebarMainMenu";





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
        element: <SidebarMainMenu/>,
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
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/payment-option",
        element: <PayMentOption />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/become-vendor",
        element: <BecomeVendor />,
      },
      {
        path: "/contact-form",
        element: <ContactForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test",
        element: <Sample />,
      },
    ],
  },
]);
