import React from "react";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";

const Content = () => {
  return (
    <Fade delay={300} distance="10%" top>
      <div className="text-black h-screenz-0">
        <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
          <p className="text-[#39A7FF] font-bold p-2 ">
            POPRAW Z NAMI SWÓJ MARKETING
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold pt-4 text-left ">
            Zadbamy
          </h1>
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold pb-6 pt-2 ">
            o Twój wizerunek w sieci
          </h1>
          <div className="flex justify-center items-center ">
            <p className="md:text-5xl sm:text-4xl text-2xl font-bold ">
              Nasze strony są{" "}
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-2xl font-bold pl-2 md:pl-4 text-[#39A7FF]"
              strings={[
                "profesjonalne",
                "nowoczesne",
                "responsywne",
                "szybkie",
              ]}
              typeSpeed={70}
              backSpeed={80}
              loop
            />
          </div>
          <p className="md:text-xl mx-4 text-lg text-gray-500 font-bold py-4 drop-shadow-xl ">
            Zamów profesjonalną i nowoczesną stronę internetową i zwiększ swoje
            szanse na rynku oraz popraw swój wizerunek w sieci.
          </p>
          <a href="#oferta">
            <button className="bg-[#39A7FF] w-[200px] text-lg rounded-md font-medium my-6 mx-auto py-3 text-white drop-shadow-md font-link checkOfferButtonHover ">
              Sprawdź ofertę
            </button>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default Content;
