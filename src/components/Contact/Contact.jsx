import React from 'react'
import img from '../../assets/ff.jpeg'
export default function Contact() {
    return (
        <div className="main-border pt-0">
        <section id="about" className="container flex">
        <div className=" w-2/4 z-30">
          <img src={img} alt="" className="w-4/5 ml-auto" />
    
          </div>
          <div className="w-2/4 ">
            <h2 className="main-header class-after">
              <span> <i class="icon-color fa-regular line-h fa-phone fa-xs"></i> Get</span>in Touch
            </h2>
            
          </div>
        
        </section></div>
      );
}
