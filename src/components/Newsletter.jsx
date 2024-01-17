import React, { useState } from "react";

const Newsletter = () => {
  const [policy, setPolicy] = useState(false);

  function showPrivacyPolicy() {
    setPolicy(!policy);
  }

  return (
    <div>
      <div className="bg-[#FFFFFF] py-16 w-full text-black max-h-[390px] lg:max-h-[300px] font-link z-50">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold ml-3">
              Chcesz otrzymywać informacje o zmianach i promocjach?
            </h1>
            <p className="ml-3">
              Zapisz się do naszego newslettera i bądz na bieżąco.
            </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-[95%] rounded-md text-black sm:ml-3 bg-gray-200"
                type="email"
                placeholder="Wpisz swój e-mail"
              />
              <button className="bg-[#39A7FF] text-white rounded-md font-medium  w-[200px] ml-4 my-6 px-6 py-3 items-center sm:mr-3">
                Wyślij
              </button>
            </div>
            <p className="ml-3">
              Wciskając przycisk zgadzasz się z{" "}
              <span
                onClick={showPrivacyPolicy}
                className="text-[#39A7FF] font-medium hover:text-[#87C4FF] cursor-pointer ease-in-out duration-300"
              >
                zasadami polityki prywatności
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="fixed z-50 top-0 -left-3 lg:top-[10%] lg:left-[30%]">
        <div
          id="defaultModal"
          tabIndex="-1"
          className={
            policy
              ? "flex w-screen top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              : "hidden"
          }
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg shadow-lg bg-gradient-to-r  bg-[#39A7FF] text-white opacity-95">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg text-white font-bold">
                  Polityka prywatności
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={showPrivacyPolicy}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only"></span>
                </button>
              </div>
              <div className="pl-4 pt-2 pr-1 pb-2">
                <p className="leading-relaxed text-sm md:text-base text-white font-medium">
                  1. Administratorem Pana/Pani danych osobowych jest WEBADEX{" "}
                  <br />
                  2. Dane będą przetwarzane w celu udzielenia odpowiedzi na
                  pytanie przesłane przez formularz kontaktowy na podstawie
                  prawnie uzasadnionych interesów realizowanych przez
                  administratora; art. 6 ust. 1 lit. f RODO*.
                  <br />
                  3. Odbiorcą Pana/Pani danych osobowych mogą być dostawcy usług
                  technicznych i organizacyjnych, którzy wspierają proces
                  udzielenia odpowiedzi.
                  <br />
                  4. Dane będą przechowywane do czasu zakończenia procesu
                  komunikacji.
                  <br />
                  5. Ma Pan/Pani prawo dostępu do swoich danych osobowych, ich
                  sprostowania, usunięcia lub ograniczenia przetwarzania.
                  <br />
                  6. Ma Pan/Pani prawo do wniesienia sprzeciwu wobec dalszego
                  przetwarzania.
                  <br />
                  7. Ma Pan/Pani także prawo do przenoszenia danych oraz
                  wniesienia skargi do organu nadzorczego.
                  <br />
                  8. Podanie przez Pana/Panią danych osobowych jest dobrowolne
                  Odmowa podania danych uniemożliwi udzielenie odpowiedzi.
                  <br /> <br />
                </p>
                <p className="md:text-base text-sm leading-relaxed text-white font-medium">
                  *Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679
                  z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                  związku z przetwarzaniem danych osobowych i w sprawie
                  swobodnego przepływu takich danych oraz uchylenia dyrektywy
                  95/46/WE (RODO).
                </p>
              </div>

              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={showPrivacyPolicy}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Akceptuj
                </button>
                <button
                  onClick={showPrivacyPolicy}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Odrzuć
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
