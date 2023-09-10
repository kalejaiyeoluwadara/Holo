import React from 'react'
import bill from './assets/bill.png'
import apple from "./assets/apple.svg";
import google from './assets/google.svg'
import Button from './button';

function Info() {
  return (
    <div className='flex items-center justify-between pt-20'>
      <div>
        <img className="h-[500px] w-[500px] " src={bill} alt="" />
      </div>
      <div className="flex flex-col text-white items-start w-[600px] gap-8">
        <h1 className="text-[40px] font-[600]">
          Easily control your
          <br />
          billing and invoicing.
        </h1>
        <p className="text-[17px] tracking-wide leading-7 font-[400] opacity-80 ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='flex gap-4'>
            <img src={apple} alt="" />
            <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Info
