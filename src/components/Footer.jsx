import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';
import { BsFillTelephoneFill, BsEnvelopeFill, BsClock } from "react-icons/bs";
import Logo from '../assets/icon.ico'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-20 text-gray-600'>
      <div>
        <div className='flex items-center justify-between hover:scale-105 duration-300 ease-in-out cursor-pointer'>
          <img src={Logo} alt="logo webadex" className='w-[10%] mr-2' />
          <h1 className='w-full text-3xl font-bold text-[#39A7FF]'>WEBADEX</h1>
        </div>
        <p className='py-4 text-left'>Tworzymy nowoczesne strony internetowe – terenem naszego
        działania jest głównie województwo małopolskie. Niezależnie od lokalizacji, nasz cel jest
        jeden: dostarczenie Klientowi narzędzia do prowadzenia biznesu
        najwyższej jakości.
        </p>
        <div className='flex md:w-[75%]'>
            <a href="fb-todo"> <FaFacebookSquare size={30} className='mr-2 hover:scale-110 hover:text-[#4267B2] duration-300 ease-in-out'/></a>
            <a href="inst-todo"><FaInstagram size={30} className='hover:scale-110 duration-300 ease-in-out' /> </a>
        </div>
      </div>
      <div className='lg:col-span-1 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Menu</h6>
        <ul>
            <a href="todo"><li className='py-2 text-md hover:scale-110 duration-150 ease-in-out'>Strona główna</li></a>
            <a href="todo"><li className='py-2 text-md hover:scale-110 duration-150 ease-in-out'>O nas</li></a>
            <a href="todo"><li className='py-2 text-md hover:scale-110 duration-150 ease-in-out'>FAQ</li></a>
            <a href="todo"><li className='py-2 text-md hover:scale-110 duration-150 ease-in-out'>Kontakt</li></a>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-md text-gray-400'>Kontakt</h6>
        <ul>
            <div className='flex items-center justify-start py-2'>
              <div className=''>
                <BsFillTelephoneFill className='text-lg mr-2 text-gray-400'/>
              </div>
              <p className='text-md font-medium'>(+48) 123 456 789</p>
            </div>
            <div className='flex items-center justify-start py-2'>
              <div className=''>
                <BsEnvelopeFill className='text-lg mr-2 text-gray-400'/>
              </div>
              <p className='text-md font-medium'>kontakt@webadex.pl</p>
            </div>
            <div className='flex items-center justify-start py-2'>
              <div className=''>
                <BsClock className='text-lg mr-2 text-gray-400'/>
              </div>
              <p className='text-md font-medium'>Pon - Pt 8:00-16:00</p>
            </div>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;