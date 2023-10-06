import React from 'react'
import Fade from 'react-reveal/Fade'
import { BsPersonFill, BsPeopleFill } from "react-icons/bs";
import {FaHotel} from 'react-icons/fa6'


const Cards = () => {
  return (
    <Fade top distance='20%'>
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <BsPersonFill className='w-20 mx-auto mt-[-3rem] bg-white' size={100} />
              <h2 className='text-2xl font-bold text-center py-8'>Single Person</h2>
              <p className='text-center text-4xl font-bold'>zł549</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <BsPeopleFill className='w-20 mx-auto mt-[-3rem] ' size={100} />
              <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
              <p className='text-center text-4xl font-bold'>zł799</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <FaHotel className='w-20 mx-auto mt-[-3rem] ' size={100} />
              <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
              <p className='text-center text-4xl font-bold'>zł1299</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
    </Fade>
  )
}

export default Cards