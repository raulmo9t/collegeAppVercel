import React from "react";
import { Link, Links } from "react-router-dom";
import MenuItems from "./MenuItems";
import { MdArrowDropUp } from "react-icons/md";

const MenuList = ({
  list,
  nested,
  handleToggleChildren,
  displayCurrentChildren,
  navLink,
}) => {
  return (
    <li className="listItem transition-all">
      <div
        className={`pb-8 flex items-center justify-between text-[#8996A0] hover:text-white transition-all cursor-pointer ${
          displayCurrentChildren === list.name ? "text-white" : ""
        } ${nested ? "pl-6 " : ""}`}
        onClick={
          list.type === "dropdown"
            ? () => handleToggleChildren(list.name)
            : null
        }
      >
        {list.type === "link" ? (
          <Link to={"/"} onClick={() => navLink(false)}>
            <p className="text-3xl md:text-2xl lg:text-3xl">{list.name}</p>
          </Link>
        ) : (
          <p
            onClick={() => navLink(false)}
            className="text-3xl md:text-2xl lg:text-3xl"
          >
            {list.name}
          </p>
        )}

        {list && list.links && list.links.length ? (
          <span>
            <MdArrowDropUp
              size={
                window.innerWidth > 640 && window.innerWidth < 768 ? 20 : 25
              }
              className={`transition-all ${
                displayCurrentChildren === list.name ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        ) : null}
      </div>

      {list &&
      list.links &&
      list.links.length > 0 &&
      displayCurrentChildren === list.name ? (
        <MenuItems item={list.links} nested={true} />
      ) : null}
    </li>
  );
};

export default MenuList;
