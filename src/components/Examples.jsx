import React from 'react'
import {AiFillAppstore, AiFillRocket} from 'react-icons/ai'
import {BsPersonVcardFill} from 'react-icons/bs'
import {FaLaptop} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

const Examples = () => {
  return (
    <div className='bg-white w-full h-full min-h-[575px]'>
        <Fade left duration={1000} distance='50%'>
        <div className='flex justify-center items-center py-4 m-4 text-4xl sm:text-5xl md:text-6xl text-center font-bold text-[#000000]'>
            <h1>Co możemy dla ciebie zrobić?</h1>
        </div>
        </Fade>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Fade left duration={1500} distance='50%'>
            <div className='hover:shadow-2xl hover:shadow-black cursor-pointer bg-black ml-10 shadow-inner shadow-[#00df9a] w-4/5 m-4 px-8 py-8 rounded-lg hover:transition-all hover:ease-in-out hover:duration-200'>
                <FaLaptop size={200} className='text-[#00df9a] ml-10 sm:ml-0'/>
                <span className='text-4xl font-bold m-5 text-white '>Strony</span>
                <p className='text-4xl font-bold m-5 mt-0 text-white'>internetowe</p>
            </div>
            </Fade>
            <Fade left duration={1500} distance='50%'>
            <div className='hover:shadow-2xl hover:shadow-black bg-black ml-10 shadow-inner shadow-[#00df9a] w-4/5 m-4 px-8 py-8 rounded-lg hover:transition-all hover:ease-in-out hover:duration-200'>
                <AiFillRocket size={200} className='text-[#00df9a] ml-10 sm:ml-0'/>
                <span className='text-4xl font-bold m-5 text-white '>Landing</span>
                <p className='text-4xl font-bold m-5 mt-0 text-white '>page</p>
            </div>
            </Fade>
            <Fade left duration={1500} distance='50%'>
            <div className='hover:shadow-2xl hover:shadow-black bg-black ml-10 shadow-inner shadow-[#00df9a] w-4/5 m-4 px-8 py-8 rounded-lg hover:transition-all hover:ease-in-out hover:duration-200'>
                <BsPersonVcardFill size={200} className='text-[#00df9a] ml-10 sm:ml-0'/>
                <span className='text-4xl font-bold m-5 text-white '>Portale</span>
                <p className='text-4xl font-bold m-5 mt-0 text-white '>internetowe</p>
            </div>
            </Fade>
            <Fade left duration={1500} distance='50%'>
            <div className='hover:shadow-2xl hover:shadow-black bg-black ml-10 shadow-inner shadow-[#00df9a] w-4/5 m-4 px-8 py-8 rounded-lg hover:transition-all hover:ease-in-out hover:duration-200'>
                <AiFillAppstore size={200} className='text-[#00df9a] ml-10 sm:ml-0'/>
                <span className='text-4xl font-bold m-5 text-white '>Aplikacje</span>
                <p className='text-4xl font-bold m-5 mt-0 text-white '>internetowe</p>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Examples