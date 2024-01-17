import React from "react";
import Fade from "react-reveal/Fade";
import { BsPersonFill, BsPeopleFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";

const Cards = () => {
  return (
    <Fade top distance="20%">
      <div className="w-full py-[3rem] px-4 bg-[#39A7FF] font-link ">
        <div className="flex flex-col justify-center items-center -mt-10 mb-12 text-center">
          <h1
            className="text-5xl text-white drop-shadow-xl m-2 p-2 font-semibold"
            id="oferta"
          >
            Oferta stron internetowych
          </h1>
          <p className="text-2xl text-gray-200 drop-shadow-xl">
            Zobacz specyfikacje wszystkich pakietów
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 pt-20 my-4 rounded-lg hover:scale-105 duration-300 bg-white ">
            <BsPersonFill className="w-20 mx-auto mt-[-3rem] " size={100} />
            <h2 className="text-2xl font-bold text-center py-8">BASIC</h2>
            <p className="text-center text-4xl font-bold">1800 zł</p>
            <div className="text-center font-medium text-lg ">
              <p className="py-2 border-b mx-8 mt-8">Domena</p>
              <p className="py-2 border-b mx-8">
                Projekt graficzny - strona główna
              </p>
              <p className="py-2 border-b mx-8">Podstrony - 1</p>
              <p className="py-2 border-b mx-8">Grafiki stockowe - 3</p>
              <p className="py-2 border-b mx-8">Optymalizacja SEO</p>
              <p className="py-2 border-b mx-8">Pagespeed</p>
              <p className="py-2 border-b mx-8">Google Maps</p>
            </div>
            <button className="bg-[#39A7FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
              Zamów
            </button>
          </div>
          <div className="bg-cyan-200 border-2 p-1 border-[#39A7FF] rounded-xl hover:scale-105 duration-300 shadow-xl">
            <div className="flex items-center justify-center">
              <h1 className="text-black flex items-center text-2xl m-1 p-1 tracking-wide">
                NAJPOPULARNIEJSZE
              </h1>
            </div>
            <div className="w-full flex flex-col p-4 pt-20 bg-white rounded-b-lg ">
              <BsPeopleFill className="w-20 mx-auto mt-[-3rem] " size={100} />
              <h2 className="text-2xl font-bold text-center py-8">STANDARD</h2>
              <p className="text-center text-4xl font-bold">2500 zł</p>
              <div className="text-center font-medium text-lg">
                <p className="py-2 border-b mx-8 mt-8">Domena</p>
                <p className="py-2 border-b mx-8">
                  Projekt graficzny - strona główna
                </p>
                <p className="py-2 border-b mx-8">Podstrony - 10</p>
                <p className="py-2 border-b mx-8">Grafiki stockowe - 6</p>
                <p className="py-2 border-b mx-8">Optymalizacja SEO</p>
                <p className="py-2 border-b mx-8">Pagespeed</p>
                <p className="py-2 border-b mx-8">Google Maps</p>
              </div>
              <button className="bg-[#39A7FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
                Zamów
              </button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 pt-20 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <FaHotel className="w-20 mx-auto mt-[-3rem] " size={100} />
            <h2 className="text-2xl font-bold text-center py-8">PREMIUM</h2>
            <p className="text-center text-4xl font-bold">4800 zł</p>
            <div className="text-center font-medium text-lg">
              <p className="py-2 border-b mx-8 mt-8">Domena</p>
              <p className="py-2 border-b mx-8">
                Projekt graficzny - strona główna
              </p>
              <p className="py-2 border-b mx-8">Podstrony - 30</p>
              <p className="py-2 border-b mx-8">Grafiki stockowe - 9</p>
              <p className="py-2 border-b mx-8">Optymalizacja SEO</p>
              <p className="py-2 border-b mx-8">Pagespeed</p>
              <p className="py-2 border-b mx-8">Google Maps</p>
            </div>
            <button className="bg-[#39A7FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
              Zamów
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;
