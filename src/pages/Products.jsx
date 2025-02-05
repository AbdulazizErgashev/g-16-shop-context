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
            <span className="absolute left-0 top-0 px-10">{mahsulot.skidka}</span>
            <img src={mahsulot.img} />
            <div>
              <h1>{mahsulot.title}</h1>
              <div className="space-x-1">
                <span className="line-through">{mahsulot.oldPrice}</span>
                <span>{mahsulot.newPrice}</span>
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
