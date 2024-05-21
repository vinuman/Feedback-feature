import React, { createContext, useState, useContext } from "react";

const LogoutContext = createContext();

export const useLogout = () => useContext(LogoutContext);

export const LogoutProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBgDimmed, setIsBgDimmed] = useState(false);

  const logout = () => {
    // Perform logout logic here
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <LogoutContext.Provider
      value={{ isLoggedIn, logout, isBgDimmed, setIsBgDimmed }}
    >
      {children}
    </LogoutContext.Provider>
  );
};
