import React from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image1 from "../../assets/slider-img1.jpg";
import Image2 from "../../assets/slider-img2.jpg";
import Image3 from "../../assets/slider-img3.jpg";

const SliderData = [
  {
    id: 1,
    image: Image1,
    desc: "A print & digital creative studio ",
  },
  {
    id: 2,
    image: Image2,
    desc: "We are delivering beautiful products ",
  },
  {
    id: 3,
    image: Image3,
    desc: "We are a web design agency ",
  },
];
const Slider = () => {
  return (
    <Splide
      options={{
        arrows: true,
        pagination: true,
        drag: "free",
        perPage: 1,
        type: "loop",
      }}
    >
      {SliderData.map((item) => {
        return (
          <SplideSlide
            key={item.id}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="slider-container">
              <div className="dark-overlay">
                <p className="slider-caption" data-aos="fade-up">
                  WE WORK HARD, WE PLAY HARD
                </p>
                <h2 className="slider-desc" data-aos="fade-up">
                  {item.desc}
                </h2>
                <button
                  className="btn btn-border"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  EXPLORE WORK
                </button>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Slider;
