import React from "react";

const Contact= () => {
  const config={
          email :"dinesharu222@gmail.com",
          phone :"+91 6369384226"
  }
  return (
    <section id="contact" className="flex flex-col bg-secondary px-5 py-32">    
      <div className="flex flex-col justify-center items-center text-white">
        
          <h1 className="text-4xl border-b-4 mb-5 w-[140px] border-[#2A8C82] font-bold">Contact</h1>
          <p className=" pb-5">If you want to discuss more in Details...Please Contact me</p>
          <p className="py-2"><span className="font-bold">Email:</span> {config.email}</p>
          <p className="py-2"><span className="font-bold">Phone:</span> {config.phone}</p>
      </div>
    </section>
  );
};

export default Contact;
