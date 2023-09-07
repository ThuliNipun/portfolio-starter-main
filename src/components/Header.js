import React from 'react';
import  Logo  from "../assets/logo.svg";

const Header = () => {
  return <header className=' p-8'>
    <div className='container mx-auto flex items-center justify-between'>
      <a href='#'>
        <img src={Logo} alt=''/>
      </a>

      <button className='btn btn-sm'>
        Hire Me
      </button>
    </div>
  </header>;
};

export default Header;
