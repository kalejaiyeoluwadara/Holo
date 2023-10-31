import React from 'react'
import robot from './assets/robot.png'
import disc from "./assets/Discount.svg";
import arrow from "./assets/arrow-up.svg";
import {motion} from 'framer-motion'
function Intro() {
  return (
    <div className="flex z-40 relative gap-2 h-[90vh] mt-3 justify-between items-center">
      <div className="flex flex-col z-20 text-white gap-4">
        <motion.div
          initial={{
            y: -320,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
          className="py-2 flex w-[390px] gap-1 disc1 items-center rounded-md px-2 "
        >
          <img
            className="bg-gray-700 h-[30px] width-[30px] rounded-full "
            src={disc}
            alt=""
          />
          <h1 className="uppercase">
            <span className=" font-[600] opacity-[1]">20% </span>
            <span className="opacity-[0.8]">discount for </span>
            <span className=" font-[600] ">1 month</span>{" "}
            <span className="opacity-[0.8]">account</span>
          </h1>
        </motion.div>
        <div className="flex w-[100%] relative">
          <h1 className="text-[60px] w-[570px] capitalize font-[700] ">
            The next <span className="textgrad">generation</span>
            {""}
            <br />
            payment method.
          </h1>
          <motion.div
            initial={{
              x: -320,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="h-[150px] w-[150px]  capitalize flex-col text-center justify-center absolute right-8 br rounded-full flex items-center "
          >
            <div className="flex gap-2 text-[20px] ">
              <h1>get </h1>
              <img src={arrow} alt="" />
            </div>
            <div>
              <span>started</span>
            </div>
          </motion.div>
        </div>
        <div>
          <p className="w-[430px] font-[300] text-[17px] leading-[25px] opacity-90 ">
            Our team expert uses a terminology to identify the credit cards most
            likely to fit your needs. <br /> We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>

      <div className="absolute -right-20 ">
        <motion.img
          initial={{
            x: 520,
            rotate: 90,
          }}
          animate={{
            x: 0,
            rotate: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 1,
          }}
          className="h-[550px] w-[600px]"
          src={robot}
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro
