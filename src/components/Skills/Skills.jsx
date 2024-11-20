import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import skillsList from './skillsList';

export default function Skills() {


  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 990, settings: { slidesToShow: 4 } },
      { breakpoint: 767, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section
      id="skills"
      className="overflow-hidden "
    >
         <main className=" opacity-0 animate-section container text-center main-border" >
      <h2 className="main-header m-auto class-before ">
        <i className="fa-solid fa-code fa-xs icon-color"></i> Skills
      </h2>
      <div className="mt-10 px-5">
        <Slider {...settings} className="w-full">
          {skillsList.map((skill, index) => (
            <div key={index} className="slider">
              <div className="slider-bg mx-2 sm:mx-5 lg:mx-10 pt-4 pb-2 px-0 rounded-2xl">
                <img className="w-20 h-20 m-auto" src={skill.src} alt={skill.name} />
                <p className="mt-3">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div> </main>
    </section>
  );
}
