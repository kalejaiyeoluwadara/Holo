import React from 'react'
import Button from './button';
import bill from "./assets/card.png";
function Deal() {
  return (
    <div className="flex items-center justify-between pt-20">
      <div className="flex flex-col text-white items-start w-[600px] gap-8">
        <h1 className="text-[40px] font-[600]">
          Find a better card deal
          <br />
          in few easy steps.
        </h1>
        <p className="text-[17px] tracking-wide leading-7 font-[400] opacity-80 ">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div>
        <img className="h-[500px] w-[500px] " src={bill} alt="" />
      </div>
    </div>
  );
}

export default Deal
