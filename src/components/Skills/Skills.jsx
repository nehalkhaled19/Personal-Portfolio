import React from 'react'
import skillsList from './skillsList';
import img1 from '../../assets/html.png'

export default function Skills() {

skillsList.map(e=>{console.log(e.src)})


  
  return (
    <section className='container text-center  border-t-gray-400'>
      <h2 className='main-heder m-auto  '>
      <i class="fa-solid fa-laptop-code"></i> Skills</h2>
    <div>
    {skillsList.map((e, index) => {
    return <img  className='w-20 h-20' key={index} src={e.src} alt={`Skill ${index}`} />;
})}
    </div>
    {/* <img src={img1}/> */}

    </section>

  )
}
