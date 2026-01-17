import React from 'react'
import { useSwiper, useSwiperSlide } from 'swiper/react'

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <div
        className="
          inner-card
          p-8 rounded-3xl border border-gray-300
          bg-white transition-all duration-500
        "
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-sm text-black mb-4">{description}</p>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ServiceCard;


