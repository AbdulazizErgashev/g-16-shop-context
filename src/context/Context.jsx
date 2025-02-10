import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    setLikedProducts((likedList) => {
      const updatedList = likedList.includes(productId)
        ? likedList.filter((id) => id !== productId)
        : [...likedList, productId];

      Swal.fire({
        position: "center",
        title: likedList.includes(productId)
          ? "Product removed from favorites"
          : "Product added to favorites successfully",
        icon: likedList.includes(productId) ? "error" : "success",
        showConfirmButton: false,
        timer: 1500,
      });

      return updatedList;
    });
  };

  return (
    <ShopContext.Provider value={{ navigate, likedProducts, toggleLike }}>
      {children}
    </ShopContext.Provider>
  );
};
