import React from 'react'
import Button from './button'
function Try() {
  return (
    <div className='w-full flex mb-20 items-center justify-center '>
      <div className="disc1 flex text-white justify-between items-center px-16 py-12 w-[85%] mt-20 rounded-[13px]  ">
        <div>
          <h1 className="font-[500] text-[35px] ">
            Let's try out our service now!
          </h1>
          <p className="font-[300] text-[15px] opacity-80 ">
            Everything you need to accept card payment
            <br />
            and grow your business anywhere on the planet.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Try
