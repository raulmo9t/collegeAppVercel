import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

let amount;
let cardVisible;

function calculateValues() {
  amount = window.innerWidth < 640 ? 100 : 50;
  cardVisible = window.innerWidth < 640 ? 1 : 2;
}

calculateValues();

window.addEventListener("resize", () => {
  calculateValues();
});

const cards = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1747430219767-dd5f78b8fa4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    title: "Card 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1749493662929-c95b3be5d995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Card 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1747430219767-dd5f78b8fa4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    title: "Card 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1749493662929-c95b3be5d995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Card 4",
  },
];

const Bulletin = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - cardVisible
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex < cards.length - cardVisible ? prevIndex + 1 : 0
    );
  };

  useGSAP(() => {
    gsap.utils.toArray(".project-card1").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="w-full max-w-[80%] mx-auto py-22 relative">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl pb-4 md:pb-5.5 lg:pb-5.5">
            Bulletin
          </h1>
          {/* Cards Container */}
          <div className="overflow-hidden -mx-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * amount}%)`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="md:w-1/2 lg:w-1/2 w-full px-4 py-0.5 flex-shrink-0 h-auto project-card1"
                >
                  <div className="bg-white rounded shadow overflow-hidden">
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={card.src}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-center py-3 font-semibold text-lg">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className=" flex justify-end gap-4 z-20 pt-4 md:pt-5.5 lg:pt-5.5">
          <button
            onClick={prev}
            className="bg-[#8996A0]/50 transition-all hover:bg-black text-white rounded-full p-3 md:p-4 lg:p-6"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="bg-[#8996A0]/50 transition-all hover:bg-black text-white rounded-full p-3 md:p-4 lg:p-6"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
