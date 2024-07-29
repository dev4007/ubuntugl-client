import React, { createContext, useContext, useState } from 'react';

// Create a context for Sidebar visibility
const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isBecomeVendor, setBecomeVendor] = useState(false);
  const [isContectForm, setContectForm] = useState(false);


  return (
    <SidebarContext.Provider value={{ isSidebarVisible, isBecomeVendor, isContectForm, setSidebarVisible, setBecomeVendor, setContectForm }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Context for Authentication status
// const BecomeVendorContext = createContext();
// export const useBecomeVendor = () => useContext(BecomeVendorContext);

// export const BecomeVendorProvider = ({ children }) => {
//   const [isBecomeVendor, setBecomeVendor] = useState(false);
//   return (
//     <BecomeVendorContext.Provider value={{ isBecomeVendor, setBecomeVendor }}>
//       {children}
//     </BecomeVendorContext.Provider>
//   );
// };