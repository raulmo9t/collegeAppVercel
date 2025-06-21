import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0E0E0E]">
      <div className="grid grid-cols-12 md:gap-y-8 gap-6 m-auto text-white py-10 max-w-[80%]">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold">ABOUT RULES</h2>
            <p className="px-2 w-[70%] md:w-full lg:w-full text-[#8996A0] text-justify md:text-left lg:text-left">
              Rules, Regulations and syllabus of studies prescribed by the
              C.H.S.E and Utkal Unviersity as published in this edition are
              subject to changes as may be brought by them from time to time and
              other rules not embodied here.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold">COMMUNITY</h2>
            <ul className="list-none flex flex-col items-center text-[#8996A0] ">
              <Link to="/" className="hover:text-white hover:underline">
                Recruitment
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Admission Info
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Notice Board
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Sports Council
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                College Mail
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold">OTHERS</h2>
            <ul className="list-none flex flex-col items-center text-[#8996A0]">
              <Link to="/" className="hover:text-white hover:underline">
                Alumni
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Feedback
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Photo Gallery
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Contact Us
              </Link>
              <Link to="/" className="hover:text-white hover:underline">
                Right To Information
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-3">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold">SOCIAL LINKS</h2>
            <ul className="flex gap-3 items-center">
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <FaXTwitter />
              </Link>
              <Link to="/">
                <FaGooglePlusG />
              </Link>
              <Link to="/">
                <FaLinkedinIn />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 bg-[#0E0E0E] text-white">
        <p>
          © Copyright 2022{" "}
          <Link
            to="/"
            className=" text-[#8996A0] hover:text-white hover:underline"
          >
            {" "}
            CHRIST COLLEGE
          </Link>{" "}
          <br />
        </p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
