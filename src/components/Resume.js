import React from "react";
import ResumeImg from "../assests/resume.jpg";
import ResuMe from "../assests/ResuMe.pdf"

const Resume= () => {
    
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-primary px-5">
      <div className=" py-10  md:w-1/2 flex justify-center">
        <img className="w-[300px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="py-10">
          <h1 className="text-4xl text-white border-b-4 mb-5 w-[140px] border-[#41BFB3] font-bold">Resume</h1>
          <p className="text-white pb-5">You can view my resume<a className="btn ml-2" href={ResuMe} download="Resume" > Download </a></p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
