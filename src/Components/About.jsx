import React from 'react'
import sih from '../assets/images/sih.jpg'
function Card({ title, image, event, role }) {
  return (

    <div className='h-96 w-80 m-5 p-3 rounded-xl bg-[#3d444d] hover:shadow-lg hover:shadow-[rgb(25,104,31)] hover:cursor-pointer flex flex-col items-center gap-3 hover:bg-transparent hover:border-2'>
      <p className='text-xl'>{title}</p>
      <img src={image} alt="sih-logo" className='h-44 rounded-xl' />
      <p>Event: {event}</p>
      <p>Role: {role}</p>
      <button className='bg-[rgb(25,104,31)] rounded-xl hover:bg-transparent hover:border-2 hover:cursor-pointer p-3 '>Show More</button>
    </div>

  )
}

export default function About() {
  return (
    <>
      <div className='h-100' id='about-me'>
        <p className='text-3xl p-7'>Experience</p>
        <div className='flex justify-center items-center flex-col sm:flex-row'>
          <Card title="Volunteer"
            image={sih}
            event="Smart India Hackathon"
            role="Marketing executive" />

          <Card title="Volunteer"
            image={sih}
            event="Smart India Hackathon"
            role="Marketing executive" />

          <Card title="Volunteer"
            image={sih}
            event="Smart India Hackathon"
            role="Marketing executive" />
        </div>
      </div>
      <div className='h-0.5 bg-[#3d444d]'></div>


      <p className='text-3xl p-7'>Tech Stack</p>
      <div className='flex justify-center'>
        <div className='h-24 rounded-xl bg-[#3d444d] w-24 m-5 flex justify-center items-center hover:cursor-pointer hover:bg-transparent hover:border-2 hover:shadow-lg hover:shadow-[rgb(25,104,31)]'>
          <i class='bx bxl-react text-blue-400 text-7xl'></i>
        </div>

        <div className='h-24 rounded-xl bg-[#3d444d] w-24 m-5 flex justify-center items-center hover:bg-transparent hover:border-2 hover:cursor-pointer hover:shadow-lg hover:shadow-[rgb(25,104,31)]'>
          <i class='bx bxl-tailwind-css  text-blue-300 text-7xl' ></i>
        </div>

        <div className='h-24 rounded-xl bg-[#3d444d] w-24 m-5 flex justify-center items-center hover:bg-transparent hover:border-2 hover:cursor-pointer hover:shadow-lg hover:shadow-[rgb(25,104,31)]'>
          <i class='bx bxl-mongodb text-7xl text-green-400' ></i>
        </div>

        <div className='h-24 rounded-xl bg-[#3d444d] w-24 m-5 flex justify-center hover:cursor-pointer hover:bg-transparent hover:border-2 hover:shadow-lg hover:shadow-[rgb(25,104,31)]' >
          <i class='bx bxl-nodejs text-7xl text-green-800' ></i>
        </div>
      </div>

      <div className='h-0.5 bg-[#3d444d]'></div>
    </>
  )
}
