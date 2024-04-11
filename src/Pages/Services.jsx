import React from "react";
import One from "../icons/one.tsx";
import Two from "../icons/two.tsx";
import Three from "../icons/three.tsx";
import Four from "../icons/four.tsx";
import ServiceIconOne from "../icons/service1-icon.tsx";
import ServiceIconTwo from "../icons/service2-icon.tsx";
import ServiceIconThree from "../icons/service3-icon.tsx";
import ServiceIconFour from "../icons/service4-icon.tsx";

const Services = () => {
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
    {
      title: "2d/3d Art Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Retail design",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Decoration Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];

  const howWeWorkDetails = [
    {
      imgIcon: ServiceIconOne,
      numIcon: One,
      img: "/service1.png",
      title: "Concept & Details",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      imgIcon: ServiceIconTwo,
      numIcon: Two,
      img: "/service2.png",
      title: "Idea For Work",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      imgIcon: ServiceIconThree,
      numIcon: Three,
      img: "/service3.png",
      title: "Design",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      imgIcon: ServiceIconFour,
      numIcon: Four,
      img: "/service4.png",
      title: "Perfection",
      info: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
  ];
  return (
    <di className="">
      <section class="w-full bg-services h-[50vh] flex justify-center items-end">
        <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white rounded-tl-[37px] rounded-tr-[37px] gap-2.5">
          <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200 ">
            Services
          </h1>
          <p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray">
            {" "}
            <a href="/">Home</a> / Services{" "}
          </p>
        </div>
      </section>

      <section class="lg:max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 lg:gap-y-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] justify-between ">
        {services.map((service) => {
          return (
            <div class="w-full col-span-1 max-w-[358px] mx-auto flex rounded-[30px] hover:bg-primary-300 px-5 py-[83px] flex-col justify-center items-center gap-3 md:gap-5">
              <h3 class="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose">
                {service.title}
              </h3>
              <p class="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center">
                {" "}
                {service.text}
              </p>
            </div>
          );
        })}
      </section>

      <section class="px-12 xl:px-0 w-full mt-[100px] lg:mt-[200px] min-h-screen ">
        <div class="w-full lg:max-w-[1200px] p-12 mx-auto lg:px-[116px] lg:py-[160px] bg-primary-300 rounded-[70px] ">
          <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full capitalize lg:max-w-[50%] pb-2 mx-auto">
            How We Work
          </h2>
          <p class="text-base md:text-[22px] text-center tracking-tight font-jost text-text-gray leading-[33px] lg:max-w-[60%] mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>

          <div class="pt-[70px] lg:pt-[100px] flex flex-col gap-[70px] ">
            {howWeWorkDetails.map((detail, index) => {
              const ImageIcon = detail.imgIcon;
              const NumberIcon = detail.numIcon;
              const className = `flex justify-between flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-[50px] items-center max-w-[967px]`;

              return (
                <div class={className}>
                  <img src={detail.img} alt="" />
                  <div class="flex flex-col gap-12 lg:gap-[58px]">
                    <div class="justify-between hidden lg:flex">
                      <ImageIcon />
                      <NumberIcon />
                    </div>
                    <div class="flex flex-col gap-3">
                      <h3 class="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose">
                        {detail.title}
                      </h3>
                      <p class="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px]">
                        {detail.info}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </di>
  );
};

export default Services;