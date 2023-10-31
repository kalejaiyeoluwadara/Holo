import React from 'react'
import Button from './button'
import star from './assets/Star.svg'
import shield from './assets/Shield.svg'
import send from "./assets/Send.svg";
import Reveal from './Reveal';
const stats = [
  {
    src:star,
    title: "Rewards",
    info: "The best cards offer some tantalizing combinations of items and prices.",
  },
  {
    src:shield,
    title: "100% secured",
    info: "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    src:send,
    title: "Balance transfer",
    info: "A balance transfer credit can safe you a lot of money in interest charges.",
  },
];
function Stats() {
  return (
    <div className="flex justify-between items-center text-white h-auto py-10">
      <div className="flex flex-col items-start w-[600px] gap-8">
        <h1 className="text-[45px] font-[700] opacity-100 ">
          You do the business, <br /> we'll handle the money.
        </h1>
        <p className="text-[17px] tracking-wide leading-7 font-[400] opacity-80 ">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money, but with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex flex-col   py-4  ">
        {stats.map((stat) => {
          const { src, title, info } = stat;
          return (
            <Reveal>
              <div className="flex disc  w-[450px] gap-10 items-center  px-4 rounded-[9px] py-3">
                <img className="h-[40px] w-[50px]" src={src} alt={title} />
                <div>
                  <p className="font-[500] text-[20px] ">{title}</p>
                  <p className="opacity-80">{info}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export default Stats
