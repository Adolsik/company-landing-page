import React from "react";
import Fade from "react-reveal/Fade";
import { IoDiamond } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { BsMegaphoneFill } from "react-icons/bs";

const WhyUs = () => {
  return (
    <Fade top duration={500} distance="10%">
      <div className="w-full py-[3rem] px-4 bg-[#3eb2fa]">
        <div className="flex flex-col justify-center items-center -mt-10 mb-12 text-center">
          <h1 className="text-5xl text-white drop-shadow-xl m-2 p-2 font-semibold">
            Dlaczego WEBADEX?
          </h1>
        </div>
        <div className="max-w-[960px] justify-center mx-auto grid lg:grid-cols-2">
          <div className="w-[400px] lg:w-[450px] h-[400px] shadow-xl flex flex-col items-center p-4 rounded-xl hover:scale-105 duration-300 bg-white lg:mt-[100px] mb-[20px] lg:mb-0 pt-6">
            <div className="bg-pink-500 py-4 px-6 flex justify-center rounded-full w-[100px]">
              <HiLightBulb className="text-white text-6xl " />
            </div>
            <h2 className="text-2xl font-semibold text-center pt-8 pb-4">
              STRATEGIA
            </h2>
            <p className="text-lg text-gray-500 text-center pb-10 p-2">
              Przed stworzeniem strony poznajemy potrzeby i preferencje
              użytkowników, do których kierujesz swoją stronę. Dostosowujemy
              zawartość i design do ich oczekiwań.
            </p>
          </div>
          <div className="w-[400px] lg:w-[450px] h-[400px] shadow-xl flex flex-col items-center p-4 rounded-xl hover:scale-105 duration-300 bg-white mb-[20px] lg:mb-0 pt-6">
            <div className="bg-pink-500 py-4 px-6 flex justify-center rounded-full w-[100px]">
              <IoDiamond className=" text-white text-6xl" />
            </div>
            <h2 className="text-2xl font-bold text-center pt-8 pb-4">JAKOŚĆ</h2>
            <p className="text-lg text-gray-500 text-center pb-10 p-2">
              Priorytetem jest dla nas pełna satysfakcja klienta, dlatego nasze
              produkty są na najwyższym poziomie
            </p>
          </div>
          <div className="w-[400px] lg:w-[450px] h-[400px] shadow-xl flex flex-col items-center p-4 rounded-xl hover:scale-105 duration-300 bg-white lg:mt-[30px] mb-[20px] lg:mb-0 pt-6">
            <div className="bg-pink-500 py-4 px-6 flex justify-center rounded-full w-[100px]">
              <BsMegaphoneFill className="text-white text-6xl" />
            </div>
            <h2 className="text-2xl font-bold text-center pt-8 pb-4">
              REZULTATY
            </h2>
            <p className="text-lg text-gray-500 text-center pb-10 p-2">
              Innowacyjne i optymalne rozwiązania, których efektem są wspaniałe
              wyniki i zadowolony klient.
            </p>
          </div>
          <div className="w-[400px] lg:w-[450px] h-[400px] shadow-xl flex flex-col items-center p-4 rounded-xl hover:scale-105 duration-300 bg-white lg:-mt-[70px] mb-[20px] lg:mb-0 pt-6">
            <div className="bg-pink-500 py-4 px-6 flex justify-center rounded-full w-[100px]">
              <BiSupport className=" text-white text-6xl" />
            </div>
            <h2 className="text-2xl font-bold text-center pt-8 pb-4">
              WSPARCIE
            </h2>
            <p className="text-lg text-gray-500 text-center pb-10 p-2">
              Wysłuchamy, doradzimy, a czasem odradzimy. Pomożemy klientom z
              każdym problemem i chęcią wdrożenia zmian na stronie.{" "}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WhyUs;
