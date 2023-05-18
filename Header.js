import React from 'react';

import Logo from "../assets/logo.png"

const Header = () => {
  return <header className='bg-pink-300 py-2'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {}
        <a href='https://www.linkedin.com/in/vladyslav-blazhenko-585007206/'>
          <img src={Logo} />
        </a>
        {}
      </div>
    </div>  
  </header>
};

export default Header;
