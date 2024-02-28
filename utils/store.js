"use client";
import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

const Store = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <StoreContext.Provider value={{ theme, setTheme }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

export default Store;
