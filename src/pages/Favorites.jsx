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
    <section className="min-h-screen max-w-screen-lg mx-auto py-10">
      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((mahsulot) => (
            <div
              key={mahsulot.id}
              className="relative flex flex-col items-center shadow-lg rounded-lg p-6 bg-white"
            >
              <span className="absolute left-2 top-2 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded">
                {mahsulot.skidka}
              </span>
              <button
                onClick={() => toggleLike(mahsulot.id)}
                className="absolute right-2 top-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                {likedProducts.includes(mahsulot.id) ? (
                  <FaHeart className="text-red-500 text-lg" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <img src={mahsulot.img} className="object-cover" />
              <div className="w-full flex flex-col items-center mt-4">
                <h1 className="text-lg font-bold text-green-700">
                  {mahsulot.title}
                </h1>
                <div className="flex items-center gap-x-3 mt-2">
                  <span className="line-through text-red-500 font-bold">
                    {mahsulot.oldPrice}
                  </span>
                  <span className="text-green-700 font-bold">
                    {mahsulot.newPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          className="text-green-500 text-center text-lg cursor-pointer mt-10"
          onClick={() => navigate("/products")}
        >
          No favorite products yet.
        </p>
      )}
    </section>
  );
};

export default Favorite;
