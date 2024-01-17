import React, { Component } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaMailBulk, FaExpeditedssl } from "react-icons/fa";
import { AiFillHdd } from "react-icons/ai";
import Fade from "react-reveal/Fade";

export default class Freebies extends Component {
  render() {
    return (
      <Fade right duration={500} distance="10%">
        <div className="text-center font-link mb-[50px]">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold flex items-center justify-center mt-14 p-2 mb-6">
            <h1 className=" text-center">
              GRATIS! do każdej realizacji otrzymasz
            </h1>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col p-4 items-center justify-center">
              <div>
                <div className="rounded-full drop-shadow-lg shadow-xl p-[50px] border w-[200px] hover:scale-105 ease-in-out duration-300 ">
                  <BsGlobe2 className="text-[100px]" />
                </div>
                <div className="flex flex-col mt-4">
                  <div>
                    <h1 className="font-bold text-2xl uppercase tracking-wider">
                      Domenę
                    </h1>
                  </div>
                  <p className="text-lg text-gray-500">
                    opłacimy ją na min. 1 rok
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 items-center justify-center mt-4">
              <div>
                <div className="rounded-full drop-shadow-lg shadow-xl p-[50px] border w-[200px] hover:scale-105 ease-in-out duration-300 ">
                  <AiFillHdd className="text-[100px]" />
                </div>
                <div className="flex flex-col mt-4">
                  <div>
                    <h1 className="font-bold text-2xl uppercase tracking-wider">
                      Hosting
                    </h1>
                  </div>
                  <p className="text-lg text-gray-500">
                    opłacimy go na min. 1 rok
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 items-center justify-center mt-4">
              <div>
                <div className="rounded-full drop-shadow-lg shadow-xl p-[50px] border w-[200px] hover:scale-105 ease-in-out duration-300 ">
                  <FaMailBulk className="text-[100px]" />
                </div>
                <div className="flex flex-col mt-4">
                  <div>
                    <h1 className="font-bold text-2xl uppercase tracking-wider">
                      Pocztę e-mail
                    </h1>
                  </div>
                  <p className="text-lg text-gray-500">
                    opłacimy ją na min. 1 rok
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 items-center justify-center mt-4">
              <div>
                <div className="rounded-full drop-shadow-lg shadow-xl p-[50px] border w-[200px] hover:scale-105 ease-in-out duration-300 ">
                  <FaExpeditedssl className="text-[100px]" />
                </div>
                <div className="flex flex-col mt-4">
                  <div>
                    <h1 className="font-bold text-2xl uppercase tracking-wider">
                      Certyfikat SSL
                    </h1>
                  </div>
                  <p className="text-lg text-gray-500">
                    opłacimy go na min. 1 rok
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
