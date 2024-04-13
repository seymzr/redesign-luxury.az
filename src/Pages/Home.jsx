import React from "react";
import Button from "../components/button.tsx";
import ArrowSec from "../icons/arrow-sec.tsx";
import CallIcon from "../icons/call.tsx";
import Experience from "../components/experience.jsx";
import Catalogue from "../components/Catalogue.jsx";
const Home = () => {
  const services = [
    {
      title: "Project Plan",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Realization",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];
  const reviews = [
    {
      img: "/natasha.png",
      name: "Nattasha Mith",
      location: "Sydney, USA",
      review:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      img: "/benny.png",
      name: "Benny Roll",
      location: "Sydney, New York",
      review:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      img: "/raymond.png",
      name: "Raymond Galario",
      location: "Sydney, Australia",
      review:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
  ];

  const projects = [
    {
      img: "/project2.png",
      name: "Modern Bedroom",
      text: "Decor / Artchitecture",
    },
    {
      img: "/project1.png",
      name: "Modern Kitchen",
      text: "Decor / Artchitecture",
    },
    {
      img: "/project4.png",
      name: "Modern Living Room",
      text: "Decor / Artchitecture",
    },
    {
      img: "/project3.png",
      name: "Modern Dining Hall",
      text: "Decor / Artchitecture",
    },
  ];

  const clientLogos = [
    {
      img: "/clientLogo1.svg",
    },
    {
      img: "/clientLogo2.svg",
    },
    {
      img: "/clientLogo3.svg",
    },
    {
      img: "/clientLogo4.svg",
    },
    {
      img: "/clientLogo5.svg",
    },
  ];

  const experiences = [
    {
      num: 12,
      text: "Years Of Experiance",
    },
    {
      num: 85,
      text: "Success Project",
    },
    {
      num: 15,
      text: "Active Project",
    },
    {
      num: 95,
      text: "Happy Customers",
    },
  ];
  return (
    <div className="">
      <section class="w-full  h-screen  lg:min-h-[110vh] px-4 md:px-12 xl:px-0 flex flex-col-reverse md:flex-row items-center ">
      <div class="w-full mx-auto flex flex-col  p-5 items-center justify-center bg-primary-200 h-full">
          <h1 class="text-[40px] leading-[50px] md:text-[60px] xl:text-[85px] pb-4 font-dm md:leading-[106.25px] w-full xl:max-w-[70%] text-primary-100">
            {" "}
            {/* Let Your Home Be Unique */}Eviniz Özəl Olsun{" "}
          </h1>
          <p class=" md:text-[22px] pb-5 font-jost text-primary-400 w-full lg:max-w-[70%]">
          Evinizin fərqli interyerə sahib olmağını istəyirsizsə Redesign Luxury komandasına müraciət edə bilərsiz
          </p>
          {/* <Button text="Get Started" variant="secondary" className="self-start"/> */}
        </div>
        <div className="bg-hero w-full h-full">

        </div>
        
      </section>

      <Catalogue />
      

      <section class="w-full lg:max-w-[1200px] mx-auto px-12 xl:px-0 flex flex-col-reverse justify-center items-center lg:grid grid-cols-2 gap-[75px] pt-[100px] lg:pt-[200px]">
        <div class="flex flex-col gap-8 max-w-[472px] items-center lg:items-start py-6">
          <h2 class="text-[30px] text-center capitalize lg:text-left font-dm tracking-wide leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue ">
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p class="text-base md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div class="flex gap-4 pt-3 items-center">
            <CallIcon />
            <p class="flex flex-col text-text-gray-200 font-jost tracking-tight">
              <span class="text-2xl font-bold leading-9 ">012345678</span>
              <span class="text-[22px] leading-8">Call Us Anytime</span>
            </p>
          </div>
          <Button text="Get Free Estimate" />
        </div>

        <div>
          <img src="/about-img.jpg" alt="" className="rounded-tr-[50%] rounded-bl-[30%]" />
        </div>
      </section>
      <section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
        <div class="w-full flex flex-col bg-primary-300 rounded-[48px] px-6 py-[88px]">
          <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto">
            What the People Thinks About Us
          </h2>
          <div class="flex flex-col gap-8 lg:gap-10 lg:flex-row justify-between">
            {reviews.map((rev) => {
              return (
                <div class="w-full bg-white max-w-[370px] px-[37px] py-[53px] rounded-3xl mx-auto flex flex-col justify-center gap-4 md:gap-6">
                  <div class="flex flex-col sm:flex-row gap-6 items-center">
                    <img src={rev.img} alt="" />
                    <p class="flex flex-col tracking-tight leading-9">
                      <span class="text-primary-200 text-lg lg:text-[25px] font-dm">
                        {rev.name}
                      </span>
                      <span class="text-text-gray-200 text-base lg:text-lg font-jost">
                        {rev.location}
                      </span>
                    </p>
                  </div>
                  <p class="font-jost tracking-tight leading-8 text-base text-center sm:text-left text-text-gray lg:text-[22px]">
                    {rev.review}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
        <div class="w-full flex flex-row justify-between items-center gap-12 max-w-[1200px] overflow-x-scroll no-scrollbar">
          {clientLogos.map((logo) => (
            <img src={logo.img} alt="" />
          ))}
        </div>
      </section>

      <section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
        <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-2 mx-auto">
          Follow Our Projects
        </h2>
        <p class="text-base md:text-[22px] text-center tracking-tight font-jost text-text-gray leading-[33px] lg:max-w-[60%] mx-auto">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-[104px] lg:gap-y-[56px] mt-12 lg:mt-[93px]">
          {projects.map((proj) => {
            return (
              <div class="w-full flex flex-col gap-4">
                <img src={proj.img} alt="" />
                <p class="flex flex-col tracking-tight leading-9">
                  <span class="text-primary-200 text-lg lg:text-[25px] font-dm">
                    {proj.name}
                  </span>
                  <span class="text-text-gray-200 text-base lg:text-lg font-jost">
                    {proj.text}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section class="w-full bg-primary-300 px-12 xl:px-0 mx-auto mt-[100px] lg:mt-[200px] py-[151px]">
        <div class="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row lg:justify-center items-center overflow-x-scroll no-scrollbar">
          {experiences.map((exp, i) => {
            return (
              <Experience text={exp.text} num={exp.num} i={i} client:load />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
