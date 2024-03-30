import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {

  const [flag,SetFlag] =useState(false);
  return (
    <header id="header" className="flex justify-between px-5 py-4  bg-primary ">
      <a className="font-bold text-3xl" href="#">
        Edison
      </a>
      <nav className="hidden md:block ">
        <ul className="flex text-white text-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {flag && <nav className="block md:hidden ">
        <ul className="flex flex-col mobile-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>}

      <button className="block md:hidden" onClick={()=>SetFlag(!flag)}>
        <IoMdMenu className="text-white w-6 h-9 " />
      </button>
    </header>
  );
};

export default Header;
