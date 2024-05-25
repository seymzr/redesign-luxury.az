import React from "react";
import Button from "../components/button.tsx";
import ArrowSec from "../icons/arrow-sec.tsx";
import CallIcon from "../icons/call.tsx";
import Experience from "../components/experience.jsx";
import Catalogue from "../components/Catalogue.jsx";
import { Link } from "react-router-dom";
import ArrowPri from "../icons/arrow-pri.tsx";
import PartnersSwiper from "../components/PartnersSwiper.jsx";
import { useTranslation } from "react-i18next";
const Home = () => {
  const {t,i18n} = useTranslation()
  

  const projects = [
    {
      img: "/bedroomproject.jpg",
      name: "Modern Bedroom",
      text: "Decor / Artchitecture",
    },
    {
      img: "/kitchen.jpg",
      name: "Modern Kitchen",
      text: "Decor / Artchitecture",
    },
    {
      img: "/living.jpg",
      name: "Modern Living Room",
      text: "Decor / Artchitecture",
    },
    {
      img: "/dining.jpg",
      name: "Modern Dining Hall",
      text: "Decor / Artchitecture",
    },
  ];

 
  const experiences = [
    {
      num: 13,
      text: t('homepage.counts.experience'),
      plus:true
    },
    {
      num: 150,
      text: t('homepage.counts.success'),
      plus:true

    },
    {
      num: 30,
      text: t('homepage.counts.active'),
      plus:true

    },
    {
      num: 150,
      text: t('homepage.counts.customers'),
      plus:true

    },
  ];
  return (
    <div className="">
      <section className="w-full  h-screen  lg:min-h-[110vh] px-4 md:px-12 xl:px-0 flex flex-col-reverse md:flex-row items-center ">
        <div className="w-full mx-auto flex flex-col  p-5 items-center justify-center bg-primary-200 h-full">
          <h1 className="text-[40px] leading-[50px] md:text-[60px] xl:text-[85px] pb-4 font-dm md:leading-[106.25px] w-full xl:max-w-[70%] text-primary-100">
            {" "}
            {/* Let Your Home Be Unique */}{t('homepage.hero.title')}{" "}
          </h1>
          <p className=" md:text-[22px] pb-5 font-jost text-primary-400 w-full lg:max-w-[70%]">
            {t('homepage.hero.desc')}
          </p>
          {/* <Button text="Get Started" variant="secondary" className="self-start"/> */}
        </div>
        <div className="bg-hero w-full h-full"></div>
      </section>

      <Catalogue />

      <section className="w-full lg:max-w-[1200px] mx-auto px-12 xl:px-0 flex flex-col-reverse justify-center items-center lg:grid grid-cols-2 gap-[75px] pt-[100px] lg:pt-[200px]">
        <div className="flex flex-col gap-8 max-w-[472px] items-center lg:items-start py-6">
          <h2 className="text-[30px] text-center capitalize lg:text-left font-dm tracking-wide leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue ">
            {t('homepage.section2.title')}
          </h2>
          <p className="text-base md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">
          {t('homepage.section2.desc')}
          </p>
          <div className="flex gap-4 pt-3 items-center">
            <a aria-label="link to redesign luxury telephone number" href="tel:+994502555200">
              <CallIcon />
            </a>
            <a href="tel:+9942555200" className="flex flex-col text-text-gray-200 font-jost tracking-tight">
              <span className="text-2xl font-bold leading-9 ">050 255 52 00</span>

            </a>
          </div>
          {/* <Button text="Get Free Estimate" /> */}
        </div>

        <div>
          <img
            src="/about-img.jpg"
            alt=""
            className="rounded-tr-[50%] rounded-bl-[30%]"
          />
        </div>
      </section>
      
      <section className="w-full pt-[100px] lg:pt-[150px] px-12 lg:px-0 mx-auto lg:max-w-[1200px] ">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-[30px] text-center lg:text-left font-dm tracking-wide capitalize leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue ">
              {t('homepage.about.title')}
            </h2>
            <p className="text-base md:text-[22px] lg:max-w-[85%] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">
            {t('homepage.about.desc')}
            </p>
          </div>
          <div className="relative w-fit">
            <img src="/gallery.jpg" alt="" className="  z-10" />
            <img
              src="/rectangle.svg"
              alt="rectangle"
              className="w-36 absolute -top-6 -left-6 -z-10"
            />
          </div>
        </div>
      </section>
      <section className="w-full pt-[100px] lg:pt-[150px] px-12 lg:px-0 mx-auto lg:max-w-[1200px] ">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse justify-between gap-24 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-[30px] text-center lg:text-left font-dm tracking-wide capitalize leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue ">
            {t('homepage.mission.title')}
            </h2>
            <p className="text-base md:text-[22px] lg:max-w-[95%] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">
            {t('homepage.mission.desc')}
            </p>
          </div>
          <div className="relative w-fit">
            <img src="/gallery2.jpg" alt="" className="  z-10" />
            <img
              src="/rectangle.svg"
              alt="rectangle"
              className="w-48 absolute -top-8 -right-8 -z-10"
            />
          </div>
        </div>
      </section>


      {/* <section className="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
        <div className="w-full flex flex-row justify-between items-center gap-12 max-w-[1200px] overflow-x-scroll no-scrollbar">
          {clientLogos.map((logo) => (
            <img src={logo.img} alt={logo.img} />
          ))}
        </div>
      </section> */}

      <section className="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
        <h2 className="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-2 mx-auto">
          {t('homepage.projects')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-[104px] lg:gap-y-[56px] mt-12 lg:mt-[93px]">
          {projects.map((proj,index) => {
            return (
              <div key={index} className="w-full flex flex-col gap-4">
                <img src={proj.img} alt="" />
                
              </div>
            );
          })}
        </div>
        <Link to='/gallery' className="bg-primary-300 mx-auto text-primary-200 hover:text-white hover:bg-primary-100 rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit duration-300  text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[16px] my-12">{t('seemore')} <ArrowPri /></Link>

      </section>

      <section className="w-full bg-primary-300 px-12 xl:px-0 mx-auto mt-[100px] lg:mt-[200px] py-[151px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row lg:justify-center items-center overflow-x-scroll no-scrollbar">
          {experiences.map((exp, i) => {
            return (
              <Experience key={i} plus={exp.plus} text={exp.text} num={exp.num} i={i} client:load />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
