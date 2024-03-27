import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import logo from "../png prem.png";

const Navigation = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#1f2937] w-full'>
      <img src={logo} alt="/" className='h-[50px]' />
      <ul className='hidden md:flex'>
        <Link to='/'><li className='p-4 hover:underline cursor-pointer'>Insurance Agency</li></Link>
        <Link to='/motors'><li className='p-4 hover:underline cursor-pointer'>Premiere Motors</li></Link>
        <Link to='/about'><li className='p-4 hover:underline cursor-pointer'>About Us</li></Link>
      </ul>
      <div onClick={handleNav} className='cursor-pointer block md:hidden'>
        {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}  />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1f2937] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <img src={logo} alt="/" className='h-[50px]' />
        <ul className='pt-12 uppercase p-4 '>
        <Link to='/'><li className='p-4 hover:underline cursor-pointer border-b border-gray-700'>Insurance Agency</li></Link>
        <Link to='/motors'><li className='p-4 hover:underline cursor-pointer border-b border-gray-700'>Premiere Motors</li></Link>
        <Link to='/about'><li className='p-4 hover:underline cursor-pointer border-b border-gray-700'>About Us</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
