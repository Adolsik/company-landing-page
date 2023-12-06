import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiFillHome, AiFillQuestionCircle} from 'react-icons/ai'
import {BsFillChatFill, BsFillPeopleFill } from "react-icons/bs";
import {MdCodeOff} from 'react-icons/md'
import LogoFull from '../assets/logoFull-cropped.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNavbar = () => {
        setNav(!nav);
    }
    
    function checkNav() {
        if(nav){
            return <AiOutlineClose size={25} className='z-50'/>
        } else {
            return <AiOutlineMenu size={25} className='z-50'/>
        }
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-[#FFFFFF] rounded-xl mt-2 z-50'>
        <div className='z-50'>
            <img src={LogoFull} alt="logo webadex" className='w-[100%] mt-[7%] hover:scale-110 ease-in-out duration-300' />
        </div>
        <ul className='hidden lg:flex lg:justify-center lg:items-center whitespace-nowrap text-xl defaultFont z-50'>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <AiFillHome size={20} className='mx-2'/> <span>Strona główna</span> </li>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <BsFillPeopleFill size={20} className='mx-2'/> <span>O nas</span> </li>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <AiFillQuestionCircle size={20} className='mx-2'/> <span>FAQ</span> </li>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <BsFillChatFill size={20} className='mx-2'/> <span>Kontakt</span> </li>
            <a href='#offer'><li className='m-2 px-5 py-3 flex items-center text-black bg-[#87C4FF] rounded-lg navBarHoverOffer'> <span>Oferta</span></li></a>
        </ul>
        <div className='lg:hidden' onClick={handleNavbar}>
            {checkNav()}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[72%] border-r border-r-gray-900 h-full bg-[#FAF9F6] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#39A7FF] m-4'>WEBADEX</h1>
            <ul className='uppercase whitespace-nowrap'>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall'> <AiFillHome size={20} className='mx-2'/> <span>Strona główna</span> </li>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall' > <BsFillPeopleFill size={20} className='mx-2'/> <span>O nas</span> </li>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall'> <AiFillQuestionCircle size={20} className='mx-2'/> <span>FAQ</span> </li>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall'> <BsFillChatFill size={20} className='mx-2'/> <span>Kontakt</span> </li>
            <a href='#offer' onClick={handleNavbar}><li className='p-4 text-black bg-[#87C4FF] hover:text-lg ease-in-out duration-150'>Oferta</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar