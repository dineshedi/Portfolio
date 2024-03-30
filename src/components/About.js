import React from "react";
import AboutImg from "../assests/about.png";

const About = () => {
    const config={
      para1:"Hi,My name is Dineshkumar.I am a Frontend Developer, I built beautiful and unique Websites with React Js ,Tailwind CSS , Bootstrap",
      para2:" I am proficient in Frontend skills like Html, CSS,Javascript and also a frameworks like React Js, Redux , Axios concepts,Tailwind CSS, Bootstrap. ",
      para3:"I'm learning SQL and Python in Backend  "
    }

  return (
    <section id="about" className="flex flex-col md:flex-row bg-primary px-5">
      <div className=" py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="py-10">
          <h1 className="text-4xl text-white border-b-4 mb-5 w-[170px] border-[#41BFB3] font-bold">About Me </h1>
          <p className="text-white pb-5"> {config.para1} </p>
          <p className="text-white pb-5"> {config.para2}</p>
          <p className="text-white"> {config.para3} </p>
        </div>
      </div>
    </section>
  );
};

export default About;
