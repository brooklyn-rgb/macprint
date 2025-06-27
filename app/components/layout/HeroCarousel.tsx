"use client"; // Required for Swiper (client-side component)

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroCarousel.css"; // Custom styles

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to MacPritners",
      description: "Discover world-class education and training programs.",
      buttonText: "Order Now",
      imageUrl: "/banner/graphics.png",
    },
    {
      id: 2,
      title: "Industry-Ready Skills",
      description: "Get hands-on training from industry experts.",
      buttonText: "Order Now",
      imageUrl: "/banner/graphics.png",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="hero-carousel"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="slide-content justify-end">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button className="bg-[#FF5733] justify-end">{slide.buttonText}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
