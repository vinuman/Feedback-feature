import React, { createContext, useState, useContext } from "react";

const LogoutContext = createContext();

export const useLogout = () => useContext(LogoutContext);

export const LogoutProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logout = () => {
    // Perform logout logic here
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <LogoutContext.Provider value={{ isLoggedIn, logout }}>
      {children}
    </LogoutContext.Provider>
  );
};
