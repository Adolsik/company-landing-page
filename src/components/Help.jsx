import React from "react";
import BackGround from "../assets/bg.jpg";
import Fade from "react-reveal/Fade";

const Help = () => {
  return (
    <Fade left duration={500} distance="10%">
      <div
        className="h-[275px] bg-[#E0F4FF] font-link text-white bg-contain"
        style={{ backgroundImage: `url(${BackGround})` }}
      >
        <div className="flex flex-col content-center text-center">
          <h1 className="m-2 p-2 text-3xl md:text-4xl lg:text-5xl mt-[50px] drop-shadow-xl">
            Nie wiesz, którą usługę wybrać?{" "}
          </h1>
          <h1 className="m-2 p-2 text-3xl md:text-4xl lg:text-5xl drop-shadow-xl">
            Umów się na <br className="md:hidden" />{" "}
            <br className="md:hidden" />{" "}
            <a className="border-2 py-2 px-6  rounded-full border-white hover:bg-white hover:text-[#39A7FF] cursor-pointer ease-in-out duration-150">
              <span className="font-semibold"> BEZPŁATNĄ KONSULTACJĘ</span>{" "}
            </a>
          </h1>
        </div>
      </div>
    </Fade>
  );
};

export default Help;
