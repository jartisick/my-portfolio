"use client";
import React from "react";
import { Link } from "react-scroll/modules";

const About = () => {
  return (
    <div id="about">
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-lg text-gray-600">
              Hello! My name is José Rodríguez, I'm 26 years old and I'm from
              Venezuela. 🙋🏽‍♂️
            </p>
            <p className="py-2 text-lg text-gray-600">
              I spent the last 8 years of my life working as a waiter and in the
              flower industry, until I met technology in 2020, during the
              pandemic. I started learning HTML & CSS on my own, watching videos
              on YouTube and started creating pretty basic applications in my
              spare time, kind of like a hobby, it took a little over a year
              until I made the decision to enroll in a BootCamp where I became a
              passionate full-stack web developer focused on front-end. I am
              currently proficient in JavaScript, React.js & Node.js
              technologies and am learning Next.js and TypeScript. I am used to
              working under pressure, in a team and have a great sense of
              communication. I consider myself a person who adapts to any
              environment and I am a fast learner if required.
            </p>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p className="py-2 text-base text-gray-600 underline cursor-pointer">
                Check out some of my lastest projects. 👨🏽‍💻
              </p>
            </Link>
          </div>
          <div className="w-full h-96 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img
              className="rounded-xl h-80"
              src="https://images.squarespace-cdn.com/content/v1/56af9236b6aa60cdf1c52b4b/1464950341113-VN4PQR9DU6LSKDIVHPGI/image-asset.gif?format=750w"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
