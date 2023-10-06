import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiFillHome, AiFillQuestionCircle} from 'react-icons/ai'
import { BsFillChatFill, BsFillPeopleFill, } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNavbar = () => {
        setNav(!nav);
    }
    
    function checkNav() {
        if(nav){
            return <AiOutlineClose size={25}/>
        } else {
            return <AiOutlineMenu size={25}/>
        }
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ADEX</h1>
        <ul className='hidden lg:flex lg:justify-center lg:items-center whitespace-nowrap text-xl font-semibold'>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <AiFillHome size={20} className='mx-2'/> <span>Strona główna</span> </li>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <BsFillPeopleFill size={20} className='mx-2'/> <span>O nas</span> </li>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <AiFillQuestionCircle size={20} className='mx-2'/> <span>FAQ</span> </li>
            <li className='p-3 flex items-center rounded-lg navBarHoverLarge'> <BsFillChatFill size={20} className='mx-2'/> <span>Kontakt</span> </li>
            <li className='m-2 px-5 py-3 flex items-center text-black bg-white rounded-lg navBarHoverOffer'> <span>Oferta</span></li>
        </ul>
        <div className='lg:hidden' onClick={handleNavbar}>
            {checkNav()}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ADEX</h1>
            <ul className='uppercase whitespace-nowrap'>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall'> <AiFillHome size={20} className='mx-2'/> <span>Strona główna</span> </li>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall' > <BsFillPeopleFill size={20} className='mx-2'/> <span>O nas</span> </li>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall'> <AiFillQuestionCircle size={20} className='mx-2'/> <span>FAQ</span> </li>
            <li className='p-4 flex items-center border-b border-b-gray-600 navBarHoverSmall'> <BsFillChatFill size={20} className='mx-2'/> <span>Kontakt</span> </li>
            <li className='p-4 text-black bg-white navBarHoverOffer'>Oferta</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar