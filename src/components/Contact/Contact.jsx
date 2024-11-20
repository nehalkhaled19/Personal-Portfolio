import React from 'react'
import img from '../../assets/9.svg'
import ContactForm from './ContactForm';
export default function Contact() {

    return (
        <div className="main-border pt-0">
        <section id="contact" className="container lg:flex">
        <div className=" lg:w-2/4 z-30 flex items-center animate-element"      data-animation-in="animate__slideInLeft"
          data-animation-out="animate__slideOutLeft"
        >
        
          <img src={img} alt="girl writes email" className="md:w-4/6 lg:w-3/4 m-auto" />
          </div>
          <div className="lg:w-2/4 lg:px-10 animate-element "      data-animation-in="animate__slideInRight"
          data-animation-out="animate__slideOutRight"
        >
            <h2 className="main-header class-after">
              <span> <i class="icon-color fa-solid line-h fa-phone fa-xs"></i> Get </span>in Touch
            </h2>
            <ContactForm/>

          </div>
        
        </section></div>
      );
}
