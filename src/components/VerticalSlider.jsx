import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./VerticalSlider.css";

const VerticalSlider = () => {
  const baseSlides = [
    {
      image:
        "https://res.cloudinary.com/dqm1ixpcb/image/upload/v1768332543/theroboticsindia_logo_ji9eaz.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dqm1ixpcb/image/upload/v1768332543/theroboticsindia_logo_ji9eaz.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dqm1ixpcb/image/upload/v1768332543/theroboticsindia_logo_ji9eaz.jpg",
      text: "",
    },

  ];

  // 🔥 duplicate slides for smooth loop
  const slides = [...baseSlides, ...baseSlides, ...baseSlides];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="vertical-slider-container">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex % baseSlides.length)
        }
        modules={[Autoplay]}
        className="vertical-slider-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`vertical-slider-item ${activeIndex === index % baseSlides.length ? "vertical-slider-active" : ""
              }`}
          >
            <img src={slide.image} alt={slide.text} />
            <div className="vertical-slider-text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
