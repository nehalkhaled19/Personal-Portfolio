import React from 'react'
import img from '../../assets/11.svg'
import ContactForm from './ContactForm';
export default function Contact() {
    return (
        <div className="main-border pt-0">
        <section id="about" className="container flex">
        <div className=" w-2/4 z-30 flex items-center ">
          <img src={img} alt="girl writes email" className="w-3/4 m-auto" />
          </div>
          <div className="w-2/4 px-10">
            <h2 className="main-header class-after">
              <span> <i class="icon-color fa-solid line-h fa-phone fa-xs"></i> Get </span>in Touch
            </h2>
            <ContactForm/>

          </div>
        
        </section></div>
      );
}
