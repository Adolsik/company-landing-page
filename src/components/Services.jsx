import React from "react";
import Fade from "react-reveal/Fade";
import { RiPagesFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { PiAirplaneLandingFill } from "react-icons/pi";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center text-white p-4 bg-[#3eb2fa] pb-10">
      <Fade left duration={500} distance="10%">
        <div className="flex justify-center items-center mb-10">
          <h1 className="text-5xl p-4 drop-shadow-xl text-center text-white font-semibold mb-6">
            Co możemy dla ciebie zrobić?
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-20 justify-center items-center place-items-center text-gray-200">
            {/* Card */}
            <div className="h-[370px] w-[325px] rounded-xl shadow-lg drop-shadow-md bg-white">
              <div className="flex justify-center items-center p-2 mb-6">
                <div className="flex justify-center items-center rounded-xl bg-pink-500 w-[80px] h-[80px] -mt-8">
                  <RiPagesFill className="text-white text-5xl" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-black">
                <h1 className="font-semibold text-2xl">Strony internetowe</h1>
                <p className="text-gray-600 m-2 mt-4 text-md h-[150px] p-2">
                  Tworzymy zaawansowane i nowoczesne, responsywne strony
                  internetowe, prezentujące firmy oraz ich usługi i produkty, a
                  także relacje inwestorskie.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-pink-500 px-6 p-2 text-lg rounded-xl ease-in-out duration-300 font-sans font-semibold border-2 hover:bg-pink-500 hover:text-white  border-pink-500 ">
                  DALEJ
                </button>
              </div>
            </div>
            {/* Card */}
            <div className="h-[375px] w-[325px] rounded-xl shadow-lg drop-shadow-md bg-white">
              <div className="flex justify-center items-center p-2 mb-6">
                <div className="flex justify-center items-center rounded-xl bg-pink-500 w-[80px] h-[80px] -mt-8">
                  <IoIosChatboxes className="text-white text-5xl" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-black">
                <h1 className="font-semibold text-2xl">Portale internetowe</h1>
                <p className="text-gray-600 m-2 mt-4 text-md h-[150px] p-2">
                  Portal, który dla ciebie zrealizujemy, będzie maksymalnie
                  przejrzysty i funkcjonalny, by ułatwić odbiorcom korzystanie z
                  niego.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-pink-500 px-6 p-2 text-lg rounded-xl ease-in-out duration-300 font-sans font-semibold border-2 hover:bg-pink-500 hover:text-white  border-pink-500 ">
                  DALEJ
                </button>
              </div>
            </div>
            {/* Card */}
            <div className="h-[375px] w-[325px] rounded-xl shadow-lg drop-shadow-md bg-white ">
              <div className="flex justify-center items-center p-2 mb-6">
                <div className="flex justify-center items-center rounded-xl bg-pink-500 w-[80px] h-[80px] -mt-8">
                  <PiAirplaneLandingFill className="text-white text-5xl" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-black">
                <h1 className="font-semibold text-2xl">Landing Page</h1>
                <p className="text-gray-600 m-2 mt-4 text-md h-[150px] p-2">
                  Stworzymy prostą stronę, która pomoże Ci osiągnąć konkretny
                  cel: sprzedać dany produkt czy usługę, zachęcić do kontaktu, a
                  także pomóc w obranej strategii marketingowej.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-pink-500 px-6 p-2 text-lg rounded-xl ease-in-out duration-300 font-sans font-semibold border-2 hover:bg-pink-500 hover:text-white  border-pink-500 ">
                  DALEJ
                </button>
              </div>
            </div>
            {/* Card */}
            <div className="h-[375px] w-[325px] rounded-xl shadow-lg drop-shadow-md bg-white">
              <div className="flex justify-center items-center p-2 mb-6">
                <div className="flex justify-center items-center rounded-xl bg-pink-500 w-[80px] h-[80px] -mt-8">
                  <FaCartShopping className="text-white text-5xl" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-black">
                <h1 className="font-semibold text-2xl">Sklepy internetowe</h1>
                <p className="text-gray-600 m-2 mt-4 text-md h-[150px] p-2">
                  Intuicyjne sklepy przynoszące zysk. Sklep dostosowany do
                  Twoich potrzeb. Mnóstwo integracji: z kurierami, płatnościami
                  online, porówywarkami cen. Kliknij i dowiedz się więcej.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-pink-500 px-6 p-2 text-lg rounded-xl ease-in-out duration-300 font-sans font-semibold border-2 hover:bg-pink-500 hover:text-white  border-pink-500 ">
                  DALEJ
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10 border-dashed" />
        <div className="flex justify-center items-center content-center">
          <div className="max-w-[450px] p-2 mt-10 rounded-xl flex justify-center flex-col items-center content-center">
            <div className="w-[300px] flex justify-center bg-pink-500 rounded-xl hover:scale-105 ease-in-out duration-300 mb-4 ">
              <button className="text-2xl p-1 m-2 drop-shadow-2xl">
                <a href="/kontakt">Skontaktuj się z nami</a>
              </button>
            </div>
            <div className="">
              <div className="flex p-1 drop-shadow-xl">
                <div className="bg-white rounded-full">
                  <BsFillTelephoneFill className="text-lg m-2  text-pink-500" />
                </div>
                <p className="text-xl ml-5 font-medium drop-shadow-2xl">
                  (+48) 123 456 789
                </p>
              </div>
              <div className="flex p-1 drop-shadow-xl">
                <div className="bg-white rounded-full">
                  <BsEnvelopeFill className="text-lg m-2 text-pink-500" />
                </div>
                <p className="text-lg ml-5 font-medium drop-shadow-2xl">
                  kontakt@webadex.pl
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Services;
