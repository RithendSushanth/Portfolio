

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const HeroSection = () => {



  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4 lg:py-16">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Rithend",
                1000,
                "Full Stack Developer",
                1000,
                "DevOps Enthusiast",
                1000,
                "Android Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            Hi, I&apos;m Rithend – a passionate Full Stack Developer, Cloud Enthusiast, and UI/UX Designer. I thrive on turning ideas into innovative digital solutions. With a strong background in web development and a keen interest in cloud technologies, I bring creativity and technical expertise to every project. Let&apos;s collaborate and bring your ideas to life!
          </p>

          <div>
            <a href="#contact"
              className="cursor-pointer bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Hire Me
            </a>
            <button
              onClick={() => window.open("https://drive.google.com/drive/u/0/folders/1cfruLE3ECt2b0O8jI23y3UyWI7k6PXPF", "_blank", "noopener noreferrer")}
              className="m-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 px-1 py-1 text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/Avatar-12.png"
              // src={"/images/hero3.jpg"}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
