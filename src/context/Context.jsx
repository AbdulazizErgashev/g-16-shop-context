import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// ShopContext nomiga createContext()-dan foydalanib context yaratildi
export const ShopContext = createContext();

// ShopProvider funksional component
export const ShopProvider = ({ children }) => {
  // navigate nomli o'zgaruvchi e'lon qilinib unga useNavigate hookini vazifasi yuklatildi
  const navigate = useNavigate();
  // useState() componentlar holatini boshqaradi
  // likedProducts bu mahsulotlarni yoqtirilganlik state(holat), setLikedProducts bu setState funksiyasi bolib state-ni boshqaradi , useState(initialState => boshlang'ich holat)
  const [likedProducts, setLikedProducts] = useState([]);

  // toggleLike funksiyasi mahsulotlarga like bosish holatini bajaradi
  // parametr bu funksiyaga qiymat kiritish hisoblanadi
  // includes() bu array(massiv) metodi bolib ,uning vazifasi qiymat bor yoki yoqligini tekshiradi (true/false)
  // filter() bu metod kiritilgan shartga mos kelgan qiymatni qaytaradi
  // ... bu spread operatori deyiladi va bu malumotlarni yoyib olishda yordam beradi
  const toggleLike = (productId) => {
    setLikedProducts((likedList) =>
      likedList.includes(productId)
        ? likedList.filter((id) => id !== productId)
        : [...likedList, productId]
    );
  };

  return (
    // Provider (yetkazib beruvchi) bu malumotlarni componentlarga yetkazib beruvchi hisoblanadi
    <ShopContext.Provider value={{ navigate, likedProducts, toggleLike }}>
      {children}
    </ShopContext.Provider>
  );
};
