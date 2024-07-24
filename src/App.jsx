import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { SidebarProvider } from "./provider/SidebarProvider";

const App = () => {
  return (
    <SidebarProvider>
      <div className="font-outfit">
        <RouterProvider router={router} />
      </div>
    </SidebarProvider>
  );
};

export default App;
