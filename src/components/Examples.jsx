import React from 'react'
import Fade from 'react-reveal/Fade'
import bgImage from '../assets/backgroundExamples.svg'
import { FcApproval} from "react-icons/fc";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";


const Examples = () => {
  return (
    <div className='w-full flex flex-col justify-start h-[650px] lg:h-[550px] xl:h-[500px] z-50 text-white font-link'>
        <Fade left duration={1000} distance='50%'>
            {/* Examples */}
            <img src={bgImage} alt="background" className='w-[100%] h-[75%] lg:h-[70%] xl:h-[60%] object-cover absolute' />
            <div className='xl:ml-[10%]'>
            <div>
              <h1 className='text-6xl m-4 mb-0 ml-12 p-4 pb-2'>Co możemy dla ciebie zrobić?</h1>
            </div>
            <div className='xl:grid grid-cols-2 gap-0 xl:w-[50%] xl:mt-6'>
              <div className='flex ml-12 p-4'>
                <FcApproval className='text-4xl'/>
                <p className='ml-1 text-3xl '>Strony internetowe</p>
              </div>
              <div className='flex ml-12 xl:ml-0 p-4'>
                <FcApproval className='text-4xl'/>
                <p className='ml-1 xl:ml text-3xl '>Portale internetowe</p>
              </div>
              <div className='flex ml-12 p-4'>
                <FcApproval className='text-4xl'/>
                <p className='ml-1 text-3xl '>Aplikacje internetowe</p>
              </div>
              <div className='flex ml-12 xl:ml-0 p-4'>
                <FcApproval className='text-4xl'/>
                <p className='ml-1 text-3xl '>Landing Page</p>
              </div>
            </div>
            {/* Contact */}
            <div className='ml-16 xl:ml-[15%]  xl:mt-[2%]' >
              <div className='w-[250px] bg-[#9470f5] rounded-xl '>
                <h1 className='text-2xl p-2 m-2'>Skontaktuj się z nami</h1>
              </div>
              <div className=''>
                <div className='flex ml-3 p-1'>
                  <div className='bg-white rounded-full'>
                    <BsFillTelephoneFill className='text-lg m-2  text-[#9470f5]'/>
                  </div>
                  <p className='text-xl ml-5 font-medium'>(+48) 123 456 789</p>
                </div>
                <div className='flex ml-3 p-1'>
                  <div className='bg-white rounded-full'>
                    <BsEnvelopeFill className='text-lg m-2   text-[#9470f5]'/>
                  </div>
                  <p className='text-lg ml-5 font-medium'>kontakt@webadex.pl</p>
                </div>
              </div>
            </div>
            </div>
        </Fade>
    </div>
  )
}

export default Examples