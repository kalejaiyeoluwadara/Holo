import React from 'react'

function Count() {
  return (
    <div className="flex h-[20vh] tracking-wide justify-between">
      <div className="flex items-center gap-4">
        <h1 className=" text-white font-bold text-[35px]">3800+</h1>
        <p className="uppercase textgrad text-[20px] font-[500]">user active</p>
      </div>
      <div className="flex relative items-center gap-4">
        <div className="line line1"></div>
        <h1 className=" text-white font-bold text-[35px]">230+</h1>
        <p className="uppercase textgrad text-[20px] font-[500]">
          trusted by company
        </p>
        <div className="line line2"></div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className=" text-white font-bold text-[35px]">$230M+</h1>
        <p className="uppercase textgrad text-[20px] font-[500]">transaction</p>
      </div>
    </div>
  );
}

export default Count
