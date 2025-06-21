import React from "react";
import { Link } from "react-router-dom";
import principal from "../assets/principal.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Genesis = () => {
  useGSAP(() => {
    gsap.from(".card1", {
      scrollTrigger: {
        trigger: ".principal",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      translateX: "-100%",
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".text1", {
      scrollTrigger: {
        trigger: ".principal",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      translateX: "+100%",
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className=" py-22 principal">
      <div className="flex flex-col w-[80%] m-auto">
        <h1 className="font-bold text-2xl pb-6">From the Principal's Desk</h1>
        <div className=" flex flex-col gap-4 md:gap-6 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-1/3 flex flex-col card1">
            <img
              className="h-[50vh] md:h-[55vh] lg:h-[50vh] w-full md:w-[55vh] lg:w-[50vh] object-cover object-left rounded"
              src={principal}
              alt=""
            />
            <h2 className="pl-3 lg:hidden shadow-[inset_1px_0_0_0_#ccc] font-semibold text-2xl mt-3">
              Mr. Steven
            </h2>
          </div>

          <div className="lg:w-2/3 text1">
            <p className="lg:max-w-[90%] m-auto text-justify">
              The city of Cuttack stands apart on a pedestal of carrying a
              prodigious legacy of cultural pluralism and collectivism. Aligning
              with this culture it also nurtures an intellect driven social
              system that strives for excellence in terms of teaching, learning,
              research and innovations. Established in 1944, Christ College,
              Cuttack has come a long way over the years and carved a niche for
              itself at par with the premier educational institutions of the
              state and outside. Initially it was started by some missionaries
              as ‘Utkal Christian College’ imparting education in the evening in
              the faculty of Arts in the borrowed premises of Christ Collegiate
              School situated at Mission Road to cater to the educational needs
              of the in-service employees. However, the college changed its name
              to ‘Christ College’ in 1949 and metamorphosed into a colossal
              nucleus of education with 19 academic departments having honours
              courses along with the +2 courses in Arts, Science and Commerce.{" "}
              <Link to="/" className="text-blue-600 hover:underline">
                Read More
              </Link>
            </p>
          </div>
        </div>
        <h2 className="pl-3 hidden lg:block shadow-[inset_1px_0_0_0_#ccc] font-semibold text-2xl mt-3">
          Mr. Steven
        </h2>
      </div>
    </div>
  );
};

export default Genesis;
