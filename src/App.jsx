import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
const App = () => {
  return (
    <div className="font-outfit">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
