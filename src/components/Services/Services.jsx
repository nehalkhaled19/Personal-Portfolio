import React, { useState } from "react";

export default function Services() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Creative and Modern Design",
    },
    {
      icon: "fa-user-check",
      title: "Seamless User Experience",
    },
    {
      icon: "fa-mobile-alt",
      title: "Fully Responsive Design",
    },
    {
      icon: "fa-rocket",
      title: "High Performance Page Load",
    },
    {
      icon: "fa-code",
      title: "Clean and Professional Code",
    },
    {
      icon: "fa-search",
      title: "SEO Optimization",
    },
  ]);

  return (
    <section id="services" className="container text-center main-border">
      <h2 className="main-header m-auto class-before">
        <i className="fa-solid fa-laptop-code fa-xs icon-color"></i> Services
      </h2>
      <div className="mt-8 flex justify-between gap flex-wrap">
        {services.map((service,index) => (
          <div key={index} className="md:w-2/4 lg:w-1/3">
            <div className="p-4 flex m-5 items-center gap-3 shadow-button rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">
                <i className={`fa-solid ${service.icon} fa-xl icon-coor`}></i>
              </div>
              <p className="text-xl font-semibold">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
