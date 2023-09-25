import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import { landingMainData } from "../data";

const LandingPage = () => {
  const [scrolling, setScrolling] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F5F4F4]">
      <header className={`w-full h-[70px] flex justify-between items-center px-3 z-10 sticky top-0 ${scrolling ? 'bg-[#F5F4F4] opacity-90' : 'bg-none'}`}>
        <h1 className="font-semibold text-xl md:text-2xl ">BookConnect</h1>
        <div className="flex gap-6">
          <Link to="/login">
            <button className="border-2 border-solid border-[#155B6A] shadow-sm shadow-black text-black font-bold px-3 py-1 text-base w-30  md:px-4 md:py-1 md:text-lg md:w-35 hover:bg-[#155B6A] hover:text-white transition duration-300 rounded-lg" aria-label="login">Login</button>
          </Link>
          <Link to="/register">
            <button className="border-2 border-solid border-[#155B6A] bg-[#155B6A] shadow-sm shadow-black
              text-gray-100 font-bold  px-3 py-1 text-base w-30  md:px-4 md:py-1 md:text-lg md:w-35 hover:bg-inherit hover:border-[#155B6A] hover:text-black transition duration-300 rounded-lg" aria-label="sign up">Sign up</button>
          </Link>
        </div>
      </header>

      <div className="my-2 border-t border-[#155B6A]"></div>
      
     <section className="relative flex flex-col justify-center items-center text-center w-full h-[45vh] md:h-full px-3">
        <img src={hero} className="w-full h-full" alt="Hero Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center mt-20 gap-4">
          <h1 className="text-white text-2xl md:text-4xl ">Growing Community With Words</h1>
          <Link to="/">
          <button className="border-2 border-solid border-[#F5F4F4] rounded-lg hover:border-[#155B6A] transition duration-300 text-gray-100 text-lg px-3 py-1 md:py-2">Let's Meet!</button>
        </Link>
      </div>
    </section>

      <div className="my-2 border-t border-[#155B6A]"></div>

    <section className="flex justify-center items-center text-center my-4">
        <div className="mx-center flex justify-center items-center py-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas quia suscipit dicta nostrum consectetur exercitationem iusto tenetur iure magnam.
          </p>
        </div>
      </section>
      <div className="my-2 border-t border-[#155B6A]"></div>
      <main className="bg-[#155B6A] w-full h-auto grid grid-cols-1 md:grid-cols-2 p-4">
        {landingMainData.map((item, index) => (
          <div className="w-full p-2" key={index}>
            <div className="bg-[#A0D2C8] rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <img src={item.img} className="w-auto h-auto rounded-lg" alt={`Görsel ${index + 1}`} />
              <div className="mt-2 text-center md:flex md:flex-col md:justify-center md:items-center gap-5">
                <h1 className="text-2xl md:text-3xl text-black font-semibold">{item.title}</h1>
                <p className="text-lg md:text-xl text-gray-100 ">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
      
      <section className="flex justify-center items-center h-48">
        <p className="font-bold w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo porro rem dolore ut illum assumenda iusto possimus reiciendis eveniet!
        </p>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;

