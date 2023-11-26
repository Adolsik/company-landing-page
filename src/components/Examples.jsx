import React from 'react'

import Fade from 'react-reveal/Fade'
import { Card } from 'flowbite-react';
import Image from '../assets/portal.webp'


const Examples = () => {
  return (
    <div className='bg-[#E0F4FF] w-full h-full min-h-[600px]'>
        <Fade left duration={1000} distance='50%'>
        <div className='flex justify-center items-center py-4 m-4 text-4xl sm:text-5xl md:text-6xl text-center font-bold text-[#000000]'>
            <h1>Co możemy dla ciebie zrobić?</h1>
        </div>
        </Fade>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Fade left duration={1500} distance='50%'>
            <Card
                imgSrc={Image}
                imgAlt="Strony internetowe"
               
                className='m-2 bg-white h-[450px] shadow-2xl hover:scale-105 ease-in duration-150 p-1'
                >
                <h5 className="ml-2 text-2xl font-bold tracking-tight text-black">
                    <p>
                    Strony internetowe
                    </p>
                </h5>
                <p className="font-normal text-gray-700 m-2">
                    <p>
                    Nowoczesna i responsywna strona internetowa, która pomoże Ci dotrzec do nowych klientów.
                    </p>
                </p>
            </Card>
            </Fade>
            <Fade left duration={1500} distance='50%'>
            <Card
                imgSrc={Image}
                imgAlt="Landing page"
                
                className='m-2 bg-white shadow-2xl h-[450px] hover:scale-105 ease-in duration-150 p-1'
                >
                <h5 className="ml-2 text-2xl font-bold tracking-tight text-black  ">
                    <p>
                    Landing page
                    </p>
                </h5>
                <p className="font-normal text-gray-700 m-2">
                    <p>
                    To prosta strona, która ma pomóc Ci osiągnąć konkretny cel: sprzedać dany produkt czy usługę, zachęcić do kontaktu, a także pomóc w obranej strategii marketingowej.
                    </p>
                </p>
            </Card>
            </Fade>
            <Fade left duration={1500} distance='50%'>
            <Card
                imgSrc={Image}
                imgAlt="Portale Internetowe"
                
                className='m-2 bg-white h-[450px] shadow-2xl hover:scale-105 ease-in duration-150 p-1 '
                >
                <h5 className="ml-2 text-2xl font-bold tracking-tight text-black ">
                    <p>
                    Portale internetowe
                    </p>
                </h5>
                <p className="font-normal text-gray-700 m-2">
                    <p>
                    Portal internetowy to znacznie bardziej rozbudowana strona internetowa z większą ilością funkcji. Wykonujemy różnego rodzaju portale (od informacyjnych i tematycznych po ogłoszeniowe i aukcyjne)
                    </p>
                </p>
            </Card>
            </Fade>
            <Fade left duration={1500} distance='50%'>
            <Card
                imgSrc={Image}
                imgAlt="Aplikacje internetowe"
                className='m-2 bg-white h-[450px] shadow-2xl hover:scale-105 ease-in duration-150 p-1'
                >
                <h5 className="ml-2 text-2xl font-bold tracking-tight text-black ">
                    <p>
                    Aplikacje internetowe
                    </p>
                </h5>
                <p className="font-normal text-gray-700 m-2">
                    <p>
                        Aplikacja internetowa to aplikacja uruchamiana w przeglądarce, która przez dostarczony interfejs ma dostarczać użytkownikowi jakąś konkretną usługę. Na przykład (aplikacje bookingowe, konkursowe) czy też systemy ERP
                    </p>
                </p>
            </Card>
            </Fade>
        </div>
    </div>
  )
}

export default Examples