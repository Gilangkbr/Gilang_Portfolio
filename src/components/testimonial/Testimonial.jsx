import React from "react";
import "./testimonial.css";
import Ava1 from "../../assets/ava1.jpg";
import Ava2 from "../../assets/ava2.png";
import Ava3 from "../../assets/ava3.jpg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Ava1,
    name: "Michael Corleone",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    avatar: Ava2,
    name: "Russsel Nando Westbrook",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga. ",
  },
  {
    avatar: Ava3,
    name: "James Alfreo Harden",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga.Quidem, illo fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo fuga. ",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={70}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">"{review}"</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
