import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill, BsEnvelopeFill, BsClock } from "react-icons/bs";
import LogoFull from "../assets/logoFull.png";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1540px] mx-auto py-16 px-4 lg:grid lg:grid-cols-2 gap-20 text-gray-600 font-link">
        <div>
          <div className="flex items-center justify-between hover:scale-105 duration-300 ease-in-out cursor-pointer">
            <img src={LogoFull} alt="logo webadex" className="w-[40%] mr-2" />
          </div>
          <p className="py-4 leading-relaxed text-ellipsis text-justify max-w-[500px]">
            Tworzymy nowoczesne strony internetowe – terenem naszego działania
            jest głównie Nowy Sącz, Limanowa, ale także całe województwo
            małopolskie. Niezależnie od lokalizacji, nasz cel jest jeden:
            dostarczenie Klientowi narzędzia do prowadzenia biznesu najwyższej
            jakości.
          </p>
          <div className="flex md:w-[75%]">
            <a href="fb-todo">
              {" "}
              <FaFacebookSquare
                size={30}
                className="mr-2 hover:scale-110 hover:text-[#4267B2] duration-300 ease-in-out"
              />
            </a>
            <a href="inst-todo">
              <FaInstagram
                size={30}
                className="hover:scale-110 duration-300 ease-in-out"
              />{" "}
            </a>
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Menu</h6>
            <ul>
              <a href="">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  Strona główna
                </li>
              </a>
              <a href="todo">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  FAQ
                </li>
              </a>
              <a href="todo">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  Kontakt
                </li>
              </a>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-md text-gray-400">Usługi</h6>
            <ul>
              <a href="">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  Strony internetowe
                </li>
              </a>
              <a href="todo">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  Portale internetowe
                </li>
              </a>
              <a href="todo">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  Landing Page
                </li>
              </a>
              <a href="todo">
                <li className="py-2 text-md hover:scale-110 duration-150 ease-in-out">
                  Sklepy internetowe
                </li>
              </a>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-md text-gray-400">Kontakt</h6>
            <ul>
              <div className="flex items-center justify-start py-2">
                <div className="">
                  <BsFillTelephoneFill className="text-lg mr-2 text-gray-400" />
                </div>
                <p className="text-md font-medium">(+48) 123 456 789</p>
              </div>
              <div className="flex items-center justify-start py-2">
                <div className="">
                  <BsEnvelopeFill className="text-lg mr-2 text-gray-400" />
                </div>
                <p className="text-md font-medium">kontakt@webadex.pl</p>
              </div>
              <div className="flex items-center justify-start py-2">
                <div className="">
                  <BsClock className="text-lg mr-2 text-gray-400" />
                </div>
                <p className="text-md font-medium">Pon - Pt 8:00-16:00</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center text-md p-2 text-gray-400 font-link">
        <h1>© 2024 All Rights Reserved | WEBADEX</h1>
      </div>
    </div>
  );
};

export default Footer;
