import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

 

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import services from "./data/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="w-full flex justify-center   md:py-24">
      <div className="w-full max-w-7xl px-12 py-8 md:px-10 border-2 border-gray-200 rounded-xl overflow-hidden">

        <h2 className="text-4xl font-bold mb-12 leading-tight">
          Our <span className="text-purple-600 ">Services</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // mobile default
          centeredSlides={true} // ✅ center card highlight
          loop={true}           // ✅ infinite loop
          breakpoints={{
            768: { slidesPerView: 2 },   // tablet
            1024: { slidesPerView: 3 },  // desktop
          }}
          navigation={true} // prev/next arrows
          pagination={{ clickable: true }} // dots
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="overflow-visible!" // ✅ important so scale is visible
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* About section */}
        <div className="flex flex-col items-center text-center gap-5 mt-14 px-0.5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-purple-800">
            • About Astratto
          </h2>

          <p className="max-w-4xl text-3xl md:text-4xl font-light leading-snug text-zinc-900">
            <span className="text-purple-600">Astratto</span>{" "}
            <span className="text-zinc-800">is</span>{" "}
            <span className="text-blue-600">a</span>{" "}
            <span className="text-emerald-600">creative</span>{" "}
            <span className="text-zinc-800">agency</span>{" "}
            <span className="text-pink-500">crafting</span>{" "}
            <span className="text-zinc-700">thoughtful</span>{" "}
            <span className="text-indigo-600">digital</span>{" "}
            <span className="text-emerald-600">experiences</span>{" "}
            <span className="text-zinc-700">that</span>{" "}
            <span className="text-purple-600">connect</span>{" "}
            <span className="text-zinc-700">brands</span>{" "}
            <span className="text-blue-600">with</span>{" "}
            <span className="text-pink-500">people</span>.
          </p>

          <p className="max-w-3xl text-base text-zinc-700 leading-relaxed">
            We blend design and technology to create meaningful, modern brand
            experiences.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
