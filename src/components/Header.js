import React from 'react'
import Logo from '../images/Netflix_Logo_PMS.png';

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-36' src={Logo} alt="logo"/>
    </div>
  )
}

export default Header