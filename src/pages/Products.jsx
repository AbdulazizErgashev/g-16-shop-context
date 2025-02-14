import { useContext } from "react";
import { products } from "../assets/data";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { GrShop } from "react-icons/gr";
import { ShopContext } from "../context/Context";

export default function Products() {
  const { likedProducts, toggleLike, cart, addToCart } =
    useContext(ShopContext);

  return (
    <main className="px-4 md:px-10 lg:px-20">
      <section className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {products.map((mahsulot) => (
          <div
            key={mahsulot.id}
            className="relative flex flex-col items-center shadow-lg rounded-md p-5 md:p-8 lg:p-10 bg-white hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute left-2 top-2 px-3 py-1 bg-red-500 text-white text-xs md:text-sm font-asul font-semibold rounded-md">
              {mahsulot.skidka}
            </span>
            <img
              src={mahsulot.img}
              className="w-full object-cover"
            />
            <div className="w-full flex flex-col items-center mt-3">
              <h1 className="font-asul font-bold text-lg md:text-xl text-green-700 text-center">
                {mahsulot.title}
              </h1>
              <div className="flex items-center gap-x-3 md:gap-x-5 mt-2">
                <span className="line-through font-asul font-bold text-red-500 text-sm md:text-base">
                  {mahsulot.oldPrice}
                </span>
                <span className="font-asul font-bold text-green-700 text-sm md:text-base">
                  {mahsulot.newPrice}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full mt-4 px-2">
              <button onClick={() => toggleLike(mahsulot.id)}>
                {likedProducts.includes(mahsulot.id) ? (
                  <FaHeart className="text-red-500 text-lg md:text-xl" />
                ) : (
                  <FaRegHeart className="text-lg md:text-xl" />
                )}
              </button>
              <button onClick={() => addToCart(mahsulot.id)}>
                {cart.includes(mahsulot.id) ? (
                  <BiTrash className="text-red-500 text-lg md:text-xl" />
                ) : (
                  <GrShop className="text-lg md:text-xl" />
                )}
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
