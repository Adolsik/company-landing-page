import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillHome,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices, MdDiscount } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import LogoFull from "../assets/logoFull.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  function checkNav() {
    if (nav) {
      return <AiOutlineClose size={25} className="z-50" />;
    } else {
      return <AiOutlineMenu size={25} className="z-50" />;
    }
  }

  return (
    <div className="flex justify-center">
    <div className="flex absolute justify-between items-center h-24 max-w-[1240px] mt-2 mx-auto px-4 text-black z-50 ">
      <div className="z-50">
        <a href="/">
          <img
            src={LogoFull}
            alt="logo webadex"
            className="w-[65%] md:w-[55%] lg:w-[80%] hover:scale-110 ease-in-out duration-300"
          />
        </a>
      </div>
      <ul className="hidden lg:flex lg:justify-center lg:items-center whitespace-nowrap text-xl defaultFont z-50 ">
        <li className="p-3 mr-1 flex items-center rounded-lg navBarHoverLarge">
          {" "}
          <AiFillHome size={20} className="mx-2" />{" "}
          <span>
            <a href="/">Strona główna</a>
          </span>{" "}
        </li>
        <div className="dropdown">
          <li className="p-2 flex items-center rounded-lg navBarHoverLarge z-10 dropdown-li">
            {" "}
            <MdOutlineMiscellaneousServices size={25} className="mx-2" />{" "}
            <span>Zakres usług</span>{" "}
            <RiArrowDropDownLine className="ml-1" size={30} />{" "}
          </li>
          <div className="dropdown-content border border-t-0 bg-white ml-2 shadow-lg drop-shadow-lg">
            <li className="hover:bg-gray-200 p-2 my-1 mx-0 drop-shadow-lg">
              <a>Strony internetowe</a>
            </li>
            <li className="hover:bg-gray-200 p-2 my-1 drop-shadow-lg">
              <a>Portale internetowe</a>
            </li>
            <li className="hover:bg-gray-200 p-2 my-1 drop-shadow-lg">
              <a>Landing Page</a>
            </li>
            <li className="hover:bg-gray-200 p-2 my-1 drop-shadow-lg">
              <a>Sklepy internetowe</a>
            </li>
          </div>
        </div>
        <li className="p-3 ml-1 flex items-center rounded-lg navBarHoverLarge">
          {" "}
          <AiFillQuestionCircle size={20} className="mx-2" /> <span>FAQ</span>{" "}
        </li>
        <li className="p-3 flex items-center rounded-lg navBarHoverLarge">
          {" "}
          <BsFillChatFill size={20} className="mx-2" /> <span>Kontakt</span>{" "}
        </li>
        <a href="#oferta">
          <li className="m-2 px-5 py-3 flex items-center text-white bg-[#39A7FF] rounded-lg navBarHoverOffer drop-shadow-lg">
            {" "}
            <MdDiscount className=" mr-2" size={20} /> <span>Oferta</span>
          </li>
        </a>
      </ul>
      <div className="lg:hidden" onClick={handleNavbar}>
        {checkNav()}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[72%] border-r border-r-gray-900 h-full bg-white ease-in-out duration-500 z-50"
            : "hidden"
        }
      >
        <img
          src={LogoFull}
          alt="logo webadex"
          className="w-[45%] hover:scale-110 ease-in-out duration-300 m-4"
        />
        <ul className="uppercase whitespace-nowrap">
          <li className="p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall">
            {" "}
            <AiFillHome size={20} className="mx-2" />{" "}
            <span>
              <a href="/">Strona główna</a>
            </span>{" "}
          </li>
          <li className="p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall">
            {" "}
            <MdOutlineMiscellaneousServices size={20} className="mx-2" />{" "}
            <span>Zakres usług</span>{" "}
          </li>
          <li className="p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall">
            {" "}
            <AiFillQuestionCircle size={20} className="mx-2" /> <span>FAQ</span>{" "}
          </li>
          <li className="p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall">
            {" "}
            <BsFillChatFill size={20} className="mx-2" /> <span>Kontakt</span>{" "}
          </li>
          <a href="#oferta" onClick={handleNavbar}>
            <li className="p-4 text-white bg-[#39A7FF] hover:text-lg ease-in-out duration-300">
              Oferta
            </li>
          </a>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
