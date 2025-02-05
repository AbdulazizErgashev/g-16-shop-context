import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ShopContext.Provider value={{ navigate }}>{children}</ShopContext.Provider>
  );
};
