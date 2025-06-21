import React, { useEffect, useRef, useState } from "react";
import logo from "../../src/assets/logo_head.png";
import { Link, Links } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import MenuItems from "./MenuItems";
import ScrollTrigger from "gsap/ScrollTrigger";

const menuGroup1 = [
  { name: "Home", type: "link", to: "/" },
  {
    name: "College",
    type: "dropdown",
    links: [
      { name: "History", type: "link", to: "/" },
      { name: "Vision & Mission", type: "link", to: "/" },
      { name: "Location", type: "link", to: "/" },
      { name: "Govt. Links", type: "link", to: "/" },
      { name: "Succession List of Principal", type: "link", to: "/" },
      { name: "Achiever's List", type: "link", to: "/" },
      { name: "Campus", type: "link", to: "/" },
      { name: "Photo Gallery", type: "link", to: "/" },
      { name: "College Calender", type: "link", to: "/" },
    ],
  },
  {
    name: "Administration",
    type: "dropdown",
    links: [
      { name: "The Governing Body", type: "link", to: "/" },
      { name: "Minutes Of Latest GB Meeting", type: "link", to: "/" },
      { name: "Academic Council", type: "link", to: "/" },
      { name: "Co-Curricular Committee", type: "link", to: "/" },
    ],
  },
  {
    name: "Academics",
    type: "dropdown",
    links: [
      { name: "Academic Calender", type: "link", to: "/" },
      { name: "Syllabus", type: "link", to: "/" },
      { name: "NEP Syllabus", type: "link", to: "/" },
      { name: "Time Table", type: "link", to: "/" },
      { name: "College Examination", type: "link", to: "/" },
      { name: "Proctorial System", type: "link", to: "/" },
      { name: "College Timings", type: "link", to: "/" },
      { name: "Seminars", type: "link", to: "/" },
      { name: "CO & PSO", type: "link", to: "/" },
      { name: "General Rule", type: "link", to: "/" },
    ],
  },
  {
    name: "Admissions",
    type: "dropdown",
    links: [
      { name: "+2 Admission", type: "link", to: "/" },
      { name: "+3 Admission", type: "link", to: "/" },
      { name: "Self Financing Courses", type: "link", to: "/" },
      { name: "Minority Reservation", type: "link", to: "/" },
      { name: "PG Courses", type: "link", to: "/" },
    ],
  },
];

const menuGroup2 = [
  {
    name: "Departments",
    type: "dropdown",
    links: [
      { name: "Odia", type: "link", to: "/" },
      { name: "English", type: "link", to: "/" },
      { name: "Hindi", type: "link", to: "/" },
      { name: "Sanskrit", type: "link", to: "/" },
      { name: "History", type: "link", to: "/" },
      { name: "Economics", type: "link", to: "/" },
      { name: "Political Science", type: "link", to: "/" },
      { name: "Philosophy", type: "link", to: "/" },
      { name: "Psychology", type: "link", to: "/" },
      { name: "Home Science", type: "link", to: "/" },
      { name: "Sociology", type: "link", to: "/" },
      { name: "Education", type: "link", to: "/" },
      { name: "Mathematics", type: "link", to: "/" },
      { name: "Physics", type: "link", to: "/" },
      { name: "Chemistry", type: "link", to: "/" },
      { name: "Botany", type: "link", to: "/" },
      { name: "Zoology", type: "link", to: "/" },
      { name: "Commerce", type: "link", to: "/" },
      { name: "IT & Comp. Sc.", type: "link", to: "/" },
    ],
  },
  { name: "Library", type: "link", to: "/" },
  {
    name: "Incentives",
    type: "dropdown",
    links: [
      { name: "Medals", type: "link", to: "/" },
      { name: "Scholarship", type: "link", to: "/" },
      { name: "Free Studentship", type: "link", to: "/" },
      { name: "SSG Assistance", type: "link", to: "/" },
    ],
  },
  {
    name: "Facilities",
    type: "dropdown",
    links: [
      { name: "Guest House", type: "link", to: "/" },
      { name: "Student Union", type: "link", to: "/" },
      { name: "Sports Council", type: "link", to: "/" },
      { name: "NCC", type: "link", to: "/" },
      { name: "NSS", type: "link", to: "/" },
      { name: "Computer Centre", type: "link", to: "/" },
      { name: "Hostel", type: "link", to: "/" },
      { name: "Canteen", type: "link", to: "/" },
      { name: "Gymnasium", type: "link", to: "/" },
      { name: "Infrastructure", type: "link", to: "/" },
      { name: "Common Room", type: "link", to: "/" },
      { name: "Health Centre", type: "link", to: "/" },
      { name: "RTI", type: "link", to: "/" },
      { name: "Grievance Redressal Cell", type: "link", to: "/" },
    ],
  },
  {
    name: "IQAC",
    type: "dropdown",
    links: [
      { name: "IQAC", type: "link", to: "/" },
      { name: "NAAC Certificate", type: "link", to: "/" },
    ],
  },
];

const menuGroup3 = [
  { name: "Career Counselling & Placement", type: "link", to: "/" },
  { name: "Tenders", type: "link", to: "/" },
];

const menuGroups = [menuGroup1, menuGroup2, menuGroup3];

const Header = () => {
  const [navLink, setNavLink] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState("");

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren(
      // ...displayCurrentChildren,
      // [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
      displayCurrentChildren === getCurrentlabel ? "" : getCurrentlabel
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 flex flex-row items-center justify-between text-white transition-all ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="pl-4 md:pl-8 lg:pl-10 py-4">
          <img
            src={logo}
            alt="Christ-College"
            className="w-[200px] md:w-[250px] lg:w-[300px]"
          />
        </div>
        <div className="flex items-center -mt-2 lg:mt-0">
          <Link
            className="text-sm md:text-base lg:text-base font-semibold md:font-normal lg:font-normal text-nowrap text-white hover:text-gray-300 md:bg-[#0E0E0E] lg:bg-[#0E0E0E] p-4 pr-2 md:p-6 md:hover:bg-[#292C2F] md:border-r-2 lg:p-8 lg:hover:bg-[#292C2F] lg:border-r-2 border-[#292C2F] transition-colors flex-1/2"
            to={"/"}
          >
            Pay Now
          </Link>

          <div
            className="text-md md:text-base lg:text-base font-semibold md:font-normal lg:font-normal text-white hover:text-gray-300 md:bg-[#0E0E0E] lg:bg-[#0E0E0E] p-4 pr-6 md:p-6 md:hover:bg-[#292C2F] lg:p-8 lg:hover:bg-[#292C2F] cursor-pointer flex items-center md:gap-2 lg:gap-2 transition-colors flex-1/2"
            onClick={() => setNavLink((prev) => !prev)}
          >
            <TbMenu />
            <button className="hidden md:inline-block lg:inline-block">
              Menu
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-60 inset-0 bg-[#0E0E0E] transition-transform flex flex-col ${
          navLink ? "" : "translate-y-[-100%]"
        }`}
      >
        <div className="flex flex-row items-center justify-between text-white px-4 md:px-8 lg:px-10 py-4">
          <img
            src={logo}
            alt="Christ-College"
            className="w-[200px] md:w-[250px] lg:w-[300px] "
          />
          <div
            className=" text-white flex gap-2 items-center cursor-pointer text-sm"
            onClick={() => {
              setNavLink((prev) => !prev);
              handleToggleChildren(null);
            }}
          >
            <p className="hidden md:inline-block lg:inline-block">Close</p>
            <p className="p-2 border border-white rounded-full">
              {" "}
              <RxCross2 />
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row lg:flex-row flex-1 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#292c2f] scrollbar-track-[#0E0E0E] relative`}
        >
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_35px_64px_26px_#0e0e0e] z-10"></div>

          <div className="md:hidden lg:hidden p-18 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#292c2f] scrollbar-track-[#0E0E0E]">
            <MenuItems
              item={[...menuGroup1, ...menuGroup2, ...menuGroup3]}
              displayCurrentChildren={displayCurrentChildren}
              handleToggleChildren={handleToggleChildren}
              navLink={navLink}
            />
          </div>

          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="hidden md:block md:w-1/3 md:overflow-y-auto lg:block lg:w-1/3 lg:overflow-y-auto p-18 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#292c2f] scrollbar-track-[#0E0E0E]"
            >
              <MenuItems
                item={menuGroups[index]}
                displayCurrentChildren={displayCurrentChildren}
                handleToggleChildren={handleToggleChildren}
                navLink={navLink}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
