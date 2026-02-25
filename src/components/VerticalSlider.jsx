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
      text: "The Robotics India",
      link: "https://roboticsindia.live/",
    },
    {
      image:
        "https://res.cloudinary.com/ddcuqfkyt/image/upload/v1771956696/SPONSOR_1.jpg_empbcp.jpg",
      text: "Baba Tyres and Motors",
      link: "https://tyreshop.bridgestone.co.in/near-me/nanded/deglour-naka/bridgestone-select-baba-tyres-in-deglour-naka-nanded--5fr3Ea/home",
    },
    {
      image:
        "https://res.cloudinary.com/ddcuqfkyt/image/upload/v1772045389/honda_red-01.jpg_f5ecfc.jpg",
      text: "MF Honda",
      link: "https://maps.app.goo.gl/FHxkGjAp7B3LsxsWA",
    },
    {
      image:
        "https://res.cloudinary.com/ddcuqfkyt/image/upload/v1772046945/Roboduino.jpg_absmun.jpg",
      text: "Roboduino",
      link: "https://www.roboduino.in/", 
    },
    {
      image:
        "https://res.cloudinary.com/ddcuqfkyt/image/upload/v1772046605/Untitled-1_kczphw.png",
      text: "Baba Petroleum",
      link: "https://maps.app.goo.gl/gYAiPMuKA4H9s87N9", 
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
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.image} alt={slide.text} />
            </a>
            <div className="vertical-slider-text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
