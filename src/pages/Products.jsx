import React from "react";
import { products } from "../assets/data";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrShop } from "react-icons/gr";

export default function Products() {
  return (
    <main>
      <section className="h-screen max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-10 my-10">
        {products.map((mahsulot) => (
          <div
            key={mahsulot.id}
            className="relative flex flex-col items-center shadow-lg rounded-md p-10"
          >
            <span className="absolute left-0 top-0 px-5 py-1 bg-red-500 text-white font-asul font-semibold rounded-md">{mahsulot.skidka}</span>
            <img src={mahsulot.img} />
            <div className="w-full flex flex-col items-center">
              <h1 className="font-asul font-bold text-xl text-green-700">{mahsulot.title}</h1>
              <div className="flex items-center gap-x-5">
                <span className="line-through font-asul font-bold text-red-500">{mahsulot.oldPrice}</span>
                <span className="font-asul font-bold text-green-700">{mahsulot.newPrice}</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <FaRegHeart />
              <GrShop />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
