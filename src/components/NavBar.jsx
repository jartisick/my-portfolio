"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // seteamos el estado de la barra de navegación en falso

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    // realizamos una pequeña función que al llamarla cambie el estado de la barra de navegación a true
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-28 shadow-xl z-[100]"
          : "fixed w-full h-28 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 pl-11 cursor-pointer">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9213/9213492.png"
            alt="/"
            width="80"
            height="50"
          />
        </Link>
        <div className="pr-7">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/programacion.png"
                width="78"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="flex items-center justify-center rounded-full w-9 h-9 shadow-lg shadow-gray-400 p3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-28">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jartisick/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/jartisick"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
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
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1zLECuwyuPN6sQuf4jilvOY4OhZm2qAyK/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
