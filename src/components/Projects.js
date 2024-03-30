import React from 'react'
import Project1Img from '../assests/ecommerce-websites.jpg'
import Project2Img from '../assests/food-ecommerce.jpg'
import Project3Img from '../assests/website-blog.jpg'

const Projects = () => {

    const config={
        projects :[
            {
                image: Project1Img,
                description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },

            {
                image: Project2Img,
                description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."           
            },

            {
                image: Project3Img,
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae."
            },
            
        ]
    }
  return (
    <section id='project' className='flex flex-col py-20 px-5 justify-center bg-secondary text-white'>
        <div className='w-full px-10 py-5'>
            <div className='flex justify-center flex-col '>
               <h1 className="text-4xl text-white border-b-4 mb-5 w-[140px] border-[#2A8C82] font-bold">Projects</h1>
               <p>These are some Projects which I built using React Js and Tailwind CSS</p>
            </div>
        </div>
        <div className='w-full '>
            <div className='flex flex-col md:flex-row px-10 gap-5 '>
                {config.projects.map((project)=>(
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={project.image}/>
                    <div className='project'>
                        <p className='text-center py-20'>{project.description}</p>
                    </div>
                </div>
                ))}
              
            </div>
        </div>
    </section>
  )
}

export default Projects