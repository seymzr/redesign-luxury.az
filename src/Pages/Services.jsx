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
      icon: "/landschaft.png",
      title: "Landşaft Dizaynı",
      text: "ərazinin peyzaj və təbii mühitini planlaşdırmaq, inkişaf etdirmək və tərtib etmək məqsədilə icra edilən bir sahədir.",
    },
    {
      icon: "/exterior.png",
      title: "Eksteryer Dizayn",
      text: "bir binanın və ya mülkün ərazisinin xarici görünüşünü, tərtibatını və düzəlməsini planlaşdırmaq, inkişaf etdirmək və təşkil etmək məqsədilə icra olunur.",
    },
    {
      icon: "/interior.png",
      title: "İnteryer Dizayn",
      text: "müştərinin tələblərini və mekanın funksional tələblərini örtüşdürən gözəl və praktik iç mekanlar yaratmağa nail olmaq məqsədilə işləyən bir sahədir.",
    },
    {
      icon: "/exterior.png",
      title: "Layihələndirmə",
      text: "müəyyən edilmiş şərtlər üçün sıfırdan obyekt yaratmağa imkan verən ilkin təsvirin tərtibidir.",
    },
    {
      icon: "/interior.png",
      title: "Təmir/Tikinti",
      text: "müasir inşaat sahəsində dayanıqlıq və uzunömürlülük təmin edən vacib bir prosesdir.",
    },
    
  ];

  const howWeWorkDetails = [
    {
      imgIcon: ServiceIconOne,
      numIcon: One,
      img: "/service1.png",
      title: "İlkin mərhələ",
      info: "Baxış və ölçünün götürülməsi üçün mənzilə(obyektə) gedilir. Sifarişçinin istəkləri nəzərə alınaraq bir neçə versiyada bölgü planı tərtib olunur.  Sifarişçi tərəfindən seçilən bölgü planı üzərində yerləşim planı hazırlanır. ",
    },
    {
      imgIcon: ServiceIconTwo,
      numIcon: Two,
      img: "/service2.png",
      title: "Dizayn mərhələsi",
      info: "Dizayn hər bir sifarişçiyə individual olaraq hazırlanır. Mükəmməl dizaynla yanaşı ,  funksional və rahat interyer təqdim edilir.  Hər bir detalın sifarişçiyə özəl olması üçün zövq və istəklər nəzərə alınır. İstəklərə uyğun olaraq standartlardan kənar və gözoxşayan dizayn hazırlanır.",
    },
    {
      imgIcon: ServiceIconThree,
      numIcon: Three,
      img: "/service3.png",
      title: "Təmir mərhələsi",
      info: "Dizaynın reallaşması üçün ən vacib və qəliz mərhələlərdən biri təmirdir. Ustalarımız işinin peşəkarı mühəndislərdir. Keyfiyyətli və səliqəli təmir üçün işinizi peşəkarlara həvalə edin.",
    },
    {
      imgIcon: ServiceIconFour,
      numIcon: Four,
      img: "/service4.png",
      title: "Mebel və aksessuar mərhələsi",
      info: "İnteryerin dizaynla birə-bir uyğunlaşması üçün mebel və aksessuar seçimi düzgün edilməlidir. Sifarişçinin komfortlu və estetik interyerə sahib olması üçün ən xırda detal belə diqqətlə seçilir.",
    },
    
  ];
  return (
    <di className="">
      <div className="bg-services px-12">
        <h1 className="container py-64 text-xl md:text-6xl uppercase font-semibold font-serif tracking-widest text-white ">
          Xİdmətlərİmİz
        </h1>
      </div>

      <section className="lg:max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 lg:gap-y-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] justify-between ">
        {services.slice(0,3).map((service) => {
          return (
            <div className="w-full col-span-1 max-w-[358px] mx-auto flex rounded-[30px] bg-primary-300/60 px-5 py-[83px] flex-col justify-center items-center gap-3 md:gap-5">
              <img src={service.icon} alt="" />
              <h3 className="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose">
                {service.title}
              </h3>
              <p className="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center">
                {" "}
                {service.text}
              </p>
            </div>
          );
        })}
        
      </section>
      <div className="lg:max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-8 lg:gap-10 items-center justify-center my-8 lg:my-10">
        {services.slice(3,5).map((service) => {
          return (
            <div className="w-full col-span-1 max-w-[358px] mx-auto flex rounded-[30px] bg-primary-300/60 px-5 py-[83px] flex-col justify-center items-center gap-3 md:gap-5">
              <img src={service.icon} alt="" />
              <h3 className="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose">
                {service.title}
              </h3>
              <p className="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center">
                {" "}
                {service.text}
              </p>
            </div>
          );
        })}
        </div>

      <section className="px-12 xl:px-0 w-full mt-[100px] lg:mt-[200px] min-h-screen ">
        <div className="w-full lg:max-w-[1200px] p-12 mx-auto lg:px-[116px] lg:py-[160px] bg-primary-300 rounded-[70px] ">
          <h2 className="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full capitalize lg:max-w-[50%] pb-2 mx-auto">
            Biz necə İşləyirik
          </h2>
          <p className="text-base md:text-[22px] text-center tracking-tight font-jost text-text-gray leading-[33px] lg:max-w-[60%] mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>

          <div className="pt-[70px] lg:pt-[100px] flex flex-col gap-[70px] ">
            {howWeWorkDetails.map((detail, index) => {
              const ImageIcon = detail.imgIcon;
              const NumberIcon = detail.numIcon;
              const className = `flex justify-between flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-[50px] items-center max-w-[967px]`;

              return (
                <div className={className}>
                  <img src={detail.img} alt="" />
                  <div className="flex flex-col gap-12 lg:gap-[58px]">
                    <div className="justify-between hidden lg:flex">
                      <ImageIcon />
                      <NumberIcon />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose">
                        {detail.title}
                      </h3>
                      <p className="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px]">
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
