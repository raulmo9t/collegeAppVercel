import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Genesis = () => {
  useGSAP(() => {
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".genesis",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      translateX: "-100%",
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".text", {
      scrollTrigger: {
        trigger: ".genesis",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      translateX: "+100%",
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-[#8996A0]/15 py-22 genesis">
      <div className="flex flex-col w-[80%] m-auto">
        <h1 className="font-bold text-2xl md:pb-6 pb-4">Genesis</h1>
        <div className=" flex flex-col gap-4 md:gap-6 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-1/2 card">
            <div className="w-full lg:w-[95%]">
              <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-md shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/lqt7ElxkE7w"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text">
            <p className="lg:max-w-[90%] m-auto text-justify">
              This Premier Minority (Christian) college was founded in 1944 by
              the Cuttack Christian Education Board (CCEB) in the name of Utkal
              Christian College and was affiliated to the Utkal University as an
              Intermediate College in Arts. In the academic session 1946-47, it
              was raised to the status of a Degree College in Arts with honours
              teaching facilities in English and Oriya. In 1949 the name of the
              college was changed to Christ College after the name of Jesus
              Christ, whose universal love and sacrifice have engendered an
              ennobling influence all over the world. Initially located in the
              Christ Collegiate School building, the college was moved to its
              present premises in 1951, and was based on the land purchased by
              the CCEB.{" "}
              <Link to="/" className="text-blue-600 hover:underline">
                Read More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genesis;
