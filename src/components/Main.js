import React from 'react'
import MainImg from '../assests/main.png'
import { GrInstagram, GrLinkedin} from "react-icons/gr";


const Main = () => {
    const config={
        subtitle:"I'm a Frontend Developer",
        social:{
          instagram : '//www.instagram.com/edison_dinesh/'
      }
            
   }
    


  return (
    <section id='main' className=' flex flex-col j md:flex-row px-5 py-40 bg-secondary justify-center'>
       <div className=' md:w-1/2 flex flex-col '>
            <h1 className=' text-5xl  md:text-6xl font-hero-font font-bold '>Hi, <br/> Im  DINESHKUMAR
                <p className=' text-2xl font-medium'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><GrInstagram size={40} /></a>
                <a href="#"className='pr-5 hover:text-white'><GrLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3 ' src={MainImg} />
    </section>
  )
}

export default Main