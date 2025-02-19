import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import carusel1 from "../assets/carusel1.jpg";
import carusel2 from "../assets/carusel2.jpg";
import carusel3 from "../assets/carusel3.jpg";

const Home = () => {
  return (
    <div className="w-full">
      {/* 🔹 Hero Section (Swiper) */}
      <section className="relative w-full max-w-6xl mx-auto py-10 px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCube]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="cube"
          className="relative w-full"
        >
          {[carusel1, carusel2, carusel3].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔹 Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["High Quality", "Fast Delivery", "24/7 Support"].map(
              (title, index) => (
                <div key={index} className="p-6 bg-white shadow rounded-lg">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600 mt-2">
                    {index === 0 &&
                      "We ensure top-notch quality in our products/services."}
                    {index === 1 &&
                      "Get your orders delivered quickly and efficiently."}
                    {index === 2 &&
                      "Our support team is available anytime you need help."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to providing the best services for our customers.
            Our mission is to ensure customer satisfaction through quality and
            reliability.
          </p>
        </div>
      </section>

      {/* 🔹 Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {[
              "This service is amazing! I highly recommend it.",
              "I was really impressed with the quality and support!",
            ].map((quote, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-white shadow rounded-lg">
                  <p className="text-gray-600 italic">"{quote}"</p>
                  <h3 className="mt-4 font-semibold">
                    - {index === 0 ? "John Doe" : "Jane Smith"}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="bg-white p-6 shadow rounded-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg mb-4"
              rows="4"
            ></textarea>
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
