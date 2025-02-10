import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const navigate = useNavigate();

  const getStoredLikes = () => {
    const storedLikes = localStorage.getItem("likedProducts");
    return storedLikes ? JSON.parse(storedLikes) : [];
  };

  const [likedProducts, setLikedProducts] = useState(getStoredLikes());

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (productId) => {
    setLikedProducts((likedList) =>
      likedList.includes(productId)
        ? likedList.filter((id) => id !== productId)
        : [...likedList, productId]
    );
  };

  return (
    <ShopContext.Provider value={{ navigate, likedProducts, toggleLike }}>
      {children}
    </ShopContext.Provider>
  );
};
