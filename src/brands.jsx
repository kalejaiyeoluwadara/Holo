import React from 'react'
import binance from './assets/binance.png'
import airbnb from "./assets/airbnb.png";
import coinbase from "./assets/coinbase.png";
import dropbox from "./assets/dropbox.png";
const imgs = [binance,airbnb,coinbase,dropbox]
function Brands() {
  return (
    <div className='mt-20 pb-10 flex items-center justify-around '>
      {imgs.map((src) =>{
        return(
            <img className='w-[200px]' src={src} alt={src} />
        )
      })}
    </div>
  )
}

export default Brands
