"use client";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-scroll/modules";

// import photo from ;
const Contact = () => {
  return (
    <div id="contact">
      <div className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 w-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 flex items-center justify-center">
              <div className="lg:p-4 h-full">
                <div className="flex items-center justify-center mb-3">
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300 max-w-[280px]"
                    src="https://drive.google.com/u/0/uc?id=11u5HH2pxQo7t8cjShG47qYqqoHBHgqi-&export=download"
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2">José Ángel Rodríguez</h2>
                  <p>Full-Stack Developer</p>
                  <p className="py-4">
                    I'm available for freelance or full-time positions. Contact
                    me and let's talk. 📩
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect with me!</p>
                  <div className="flex items-center justify-between py-4">
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
                      href="https://instagram.com/jartisick"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaInstagram size={25} />
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
                      href="https://wa.me/584245903698"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaWhatsapp size={25} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/eeeed6dd-a5fb-4f8f-afd3-94406618999e"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Email</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        name="email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className="flex justify-center py-12">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
