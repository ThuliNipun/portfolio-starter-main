import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,BsChatSquare} from 'react-icons/bs';
import { Link } from 'react-scroll';
import {RiContactsBook2Fill} from 'react-icons/ri'

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto '>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto flex items-center justify-between px-5 text-2xl text-white/50 '>
        <Link to='home' 
        activeClass='active' 
        smooth = {true}
        offset={-200}
        className='flex items-center justify-center w-[60px] h-[60px] cursor-pointer'>
          <BiHomeAlt/>
        </Link>
        <Link to='about' 
        activeClass='active' 
        smooth = {true}
        spy={true}
        className='flex items-center justify-center w-[60px] h-[60px] cursor-pointer'>
          <BiUser/>
        </Link>
        <Link to='work' 
        activeClass='active' 
        smooth = {true}
        className='flex items-center justify-center w-[60px] h-[60px] cursor-pointer'>
          <BsBriefcase/>
        </Link>
        <Link to='services' 
        activeClass='active' 
        smooth = {true}
        className='flex items-center justify-center w-[60px] h-[60px] cursor-pointer'>
          <BsClipboardData/>
        </Link>
        <Link to='contact' 
        activeClass='active' 
        smooth = {true}
        className='flex items-center justify-center w-[60px] h-[60px] cursor-pointer'>
          <RiContactsBook2Fill/>
        </Link>
      </div>
    </div>

  </nav>
};

export default Nav;
