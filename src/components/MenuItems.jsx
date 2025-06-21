import React from "react";
import MenuList from "./MenuList";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

let firstTime = true;

const MenuItems = ({
  item,
  nested = false,
  displayCurrentChildren,
  handleToggleChildren,
  navLink,
}) => {
  useGSAP(() => {
    if (navLink && !nested && firstTime) {
      gsap.fromTo(
        ".list li",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.1,
          stagger: "0.05",
          opacity: 1,
        }
      );
      firstTime = false;
    }
  }, [navLink, nested]);

  return (
    <ul
      className={`list transition-all ${
        nested ? "h-fit" : "h-0"
      } shadow-[inset_0px_35px_64px_35px_#0e0e0e]`}
    >
      {item && item.length
        ? item.map((listItem) => (
            <MenuList
              list={listItem}
              nested={nested}
              displayCurrentChildren={displayCurrentChildren}
              handleToggleChildren={handleToggleChildren}
              navLink={navLink}
            />
          ))
        : null}
    </ul>
  );
};

export default MenuItems;
