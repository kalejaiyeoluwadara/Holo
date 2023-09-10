import React from 'react'
import people01 from './assets/people01.png'
import people02 from "./assets/people02.png";
import people03 from "./assets/people03.png";
import quote from "./assets/quotes.svg";
const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

const Card = ({name,content,title,img}) =>{
  return (
    <div className="flex h-[380px] flex-col w-[400px] text-white disc gap-10 items-start px-6 py-12 rounded-[14px]">
      <img src={quote} alt="" />
      <div>
        <p className="text-[17px] tracking-wide leading-7 font-[300] opacity-80">
         {content}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <img className="h-[60px]" src={img} alt="" />
        <div className="text-white">
          <p className="text-[20px]  font-[400]">{name}</p>
          <p className="text-[17px] tracking-wide leading-7 font-[300] opacity-80">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
function People() {
  return (
    <div className="pt-20">
      <div className="flex px-12  w-[90%] items-center justify-between  text-white">
        <h1 className="text-[40px] font-[500]">
          What People are <br /> saying about us
        </h1>
        <p className="text-[17px] tracking-wide leading-7 font-[300] opacity-80">
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>

      {/* cards */}
      <div className='pt-20 flex gap-10'>
       {
         feedback.map((item) =>{
          const {name,content,img,title,id} = item;
           return (
             <Card key={id} name={name} content={content} img={img} title={title} />
           );
        })
       }
      </div>
    </div>
  );
}

export default People
