import React from 'react'
import logo from './assets/logo.svg'
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
 const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
 const socialMedia = [
   {
     id: "social-media-1",
     icon: instagram,
     link: "https://www.instagram.com/",
   },
   {
     id: "social-media-2",
     icon: facebook,
     link: "https://www.facebook.com/",
   },
   {
     id: "social-media-3",
     icon: twitter,
     link: "https://www.twitter.com/",
   },
   {
     id: "social-media-4",
     icon: linkedin,
     link: "https://www.linkedin.com/",
   },
 ];
function Footer() {
  return (
    <div className="bg  md:px-20 sm:px-12 px-10 flex flex-col mt-20 pt-20  text-white">
      <div className="flex pt-12 justify-between">
        <div className="flex  w-[30vw] gap-5 flex-col">
          <h1 className="font-[600] text-[35px] ">
            <img src={logo} alt="" />
          </h1>
          <p className="text-[17px] opacity-80 ">
            A new way to make the payments
            <br />
            easy, reliable and secure.
          </p>
        </div>
        <div className="flex gap-20 justify-between">
          <div className="w-[200px]">
            <h1 className="mb-5 font-[600] text-[20px] capitalise ">
              {footerLinks[0].title}
            </h1>
            <ul>
              {footerLinks[0].links.map((it) => {
                return <li>{it.name}</li>;
              })}
            </ul>
          </div>
          <div className="w-[200px]">
            <h1 className="mb-5 font-[600] text-[20px] capitalise ">
              {footerLinks[1].title}
            </h1>
            <ul>
              {footerLinks[1].links.map((it) => {
                return <li>{it.name}</li>;
              })}
            </ul>
          </div>
          <div className="w-[200px]">
            <h1 className="mb-5 font-[600] text-[20px] capitalise ">
              {footerLinks[2].title}
            </h1>
            <ul>
              {footerLinks[2].links.map((it) => {
                return <li>{it.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-20 opacity-[0.4]" />
      <div className="flex justify-between items-center pb-[50px] w-[100%] ">
        <div className="flex gap-4 text-[18px]  ">
          <h1>Copyright@</h1>
          <h1>2023 HooBank. All right reserved</h1>
        </div>
        <div className="flex gap-5">
          {socialMedia.map((d) => {
            return (
              <a key={d.id} href={d.link}>
                <img className="h-[22px]" src={d.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer
