import React from 'react'
import logo from '/hoobank.svg'
function Nav() {
  return (
    <div className="flex w-[100%] py-8  justify-between items-center">
      <div className='flex items-center gap-2'>
        <img className='h-[40px] ' src={logo} alt="Hoobank logo" />
        <h1 className='text-[20px] text-white font-[600] '>Hoo<span className='text-[aqua]'>Bank</span></h1>
      </div>
      <div className="flex gap-12 justify-around font-[300] text-[19px] text-white opacity-90">
        <a className="opacity-90 hover:opacity-[1] duration-[0.5] " href="">
          Home
        </a>
        <a className="opacity-90 hover:opacity-[1] duration-[0.5] " href="">
          About Us
        </a>
        <a className="opacity-90 hover:opacity-[1] duration-[0.5] " href="">
          Features
        </a>
        <a className="opacity-90 hover:opacity-[1] duration-[0.5] " href="">
          Solution
        </a>
      </div>
    </div>
  );
}

export default Nav
