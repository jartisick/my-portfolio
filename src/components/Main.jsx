"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll/modules";
// import { Link } from "react-scroll";

const Main = () => {
  return (
    <div id="home">
      <div className="w-full h-screen text-center">
        <div className="max-w-[880px] w-full h-full mx-auto p-2 flex justify-center items-center pt-20">
          <div>
            <h1 className="py-4 text-gray-700">
              Hi, I'm <span className="text-[#5651e5]">José Ángel</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Full-Stack Developer 👨🏽‍💻</h1>
            <p className="text-base py-4 text-gray-800 max-w-[70%] m-auto">
              Full-Stack developer focused on front-end. I’m very disciplined
              and passionate, taking advantage of any opportunity I have to
              accomplish my goals. I’ve learned to pay attention and understand
              the needs to develop in a more efficient and useful way.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/jartisick/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn size={25} />
                </div>
              </a>
              <a
                href="https://github.com/jartisick"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size={25} />
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1zLECuwyuPN6sQuf4jilvOY4OhZm2qAyK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill size={25} />
                </div>
              </a>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
