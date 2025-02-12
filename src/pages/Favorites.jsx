import { useContext } from "react";
import { ShopContext } from "../context/Context";
import { products } from "../assets/data";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Favorite = () => {
  const { navigate, likedProducts, toggleLike } = useContext(ShopContext);

  const favoriteProducts = products.filter((mahsulotObj) =>
    likedProducts.includes(mahsulotObj.id)
  );

  return (
    <section className="h-screen max-w-screen-lg mx-auto my-10">
      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteProducts.map((mahsulot) => (
            <div
              key={mahsulot.id}
              className="relative flex flex-col items-center shadow-lg rounded-md p-10"
            >
              <span className="absolute left-0 top-0 px-5 py-1 bg-red-500 text-white font-asul font-semibold rounded-md">
                {mahsulot.skidka}
              </span>
              <button
                onClick={() => toggleLike(mahsulot.id)}
                className="absolute right-0 top-0 px-3 py-1"
              >
                {likedProducts.includes(mahsulot.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <img src={mahsulot.img} />
              <div className="w-full flex flex-col items-center">
                <h1 className="font-asul font-bold text-xl text-green-700">
                  {mahsulot.title}
                </h1>
                <div className="flex items-center gap-x-5">
                  <span className="line-through font-asul font-bold text-red-500">
                    {mahsulot.oldPrice}
                  </span>
                  <span className="font-asul font-bold text-green-700">
                    {mahsulot.newPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          className="text-green-500 font-asul text-center cursor-pointer"
          onClick={() => navigate("/products")}
        >
          No favorite products yet.
        </p>
      )}
    </section>
  );
};

export default Favorite;
