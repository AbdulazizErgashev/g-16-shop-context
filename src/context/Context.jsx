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

  const getStoredCart = () => {
    const storedCart = localStorage.getItem("addedProductToCart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [likedProducts, setLikedProducts] = useState(getStoredLikes());
  const [cart, setCart] = useState(getStoredCart());

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  useEffect(() => {
    localStorage.setItem("addedProductToCart", JSON.stringify(cart));
  }, [cart]);

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

  const addToCart = (productId) => {
    setCart((addedCart) => {
      const updatedCart = addedCart.includes(productId)
        ? addedCart.filter((id) => id !== productId)
        : [...addedCart, productId];

      Swal.fire({
        position: "center",
        title: addedCart.includes(productId)
          ? "Product removed from cart"
          : "Product added to cart successfully",
        icon: addedCart.includes(productId) ? "error" : "success",
        showConfirmButton: false,
        timer: 1500,
      });

      return updatedCart;
    });
  };

  return (
    <ShopContext.Provider
      value={{ navigate, likedProducts, toggleLike, cart, addToCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};
