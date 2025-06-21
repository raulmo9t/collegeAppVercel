import React from "react";
import { Link } from "react-router-dom";

const notices = [
  {
    title: "Semester Exam Timetable Released",
    src: "/",
    date: "2025-05-15",
  },
  {
    title: "Workshop on AI and Robotics - Register Now!",
    src: "/",
    date: "2025-06-05",
  },
  {
    title: "Library to Remain Closed on Friday",
    src: "/",
    date: "2025-06-07",
  },
  {
    title: "Campus Recruitment Drive - Infosys",
    src: "/",
    date: "2025-06-12",
  },
  {
    title: "Internal Assessment Results Published",
    src: "/",
    date: "2025-06-02",
  },
];

const explore = [
  {
    title: "Hostel Allotment List for New Students",
    src: "/",
    date: "2025-05-28",
  },
  {
    title: "Scholarship Application Deadline Extended",
    src: "/",
    date: "2025-06-01",
  },
  {
    title: "College Fest Auditions This Weekend",
    src: "/",
    date: "2025-06-08",
  },
  {
    title: "ID Card Distribution Starts Monday",
    src: "/",
    date: "2025-06-09",
  },
  {
    title: "Online Classes Scheduled Due to Weather Alert",
    src: "/",
    date: "2025-06-11",
  },
];

const Notification = () => {
  return (
    <div className="flex justify-center py-22">
      <div className="w-[80%] flex flex-col gap-10 md:gap-0 md:flex-row lg:gap-0 lg:flex-row justify-around">
        <div className="md:w-1/2 lg:w-1/2 flex justify-center  lg:shadow-[inset_1px_0_0_0_#ccc]">
          <div>
            <h1 className="font-bold text-2xl pb-4">Notice Board</h1>
            <div className="md:max-w-[90%] lg:max-w-[70%] max-h-[50vh] overflow-y-scroll overflow-x-hidden bg-[#8996A0]/15 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#292c2f] scrollbar-track-[#fff]">
              <ul className="list-none">
                {notices.map((notice, index) => (
                  <Link to={notice.src} key={index}>
                    <div className="flex justify-between items-center p-2.5 shadow-[inset_0_-1px_0_0_#ccc]">
                      <p className="block font-medium max-w-[70%]">
                        {notice.title}
                      </p>

                      <span className="text-sm">{notice.date}</span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 flex justify-center lg:shadow-[inset_1px_0_0_0_#ccc]">
          <div>
            <h1 className="font-bold text-2xl pb-4">Explore</h1>
            <div className="md:max-w-[90%] lg:max-w-[70%] max-h-[50vh] overflow-y-scroll overflow-x-hidden bg-[#8996A0]/5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#292c2f] scrollbar-track-[#fff]">
              <ul className="list-none">
                {explore.map((explore, index) => (
                  <Link to={explore.src} key={index}>
                    <p className="block font-medium text-[3vh] p-2.5 shadow-[inset_0_-1px_0_0_#ccc]">
                      {explore.title}
                    </p>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
