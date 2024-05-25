import { useTranslation } from "react-i18next";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function Catalogue() {
  const {t,i18n} =useTranslation()
  const items = [
    {
      id: "01",
      catagory: t('homepage.setups.bedroom.title'),

      image: "/bedroom.jpg",
      description:
      t('homepage.setups.bedroom.desc'),
    },
    {
      id: "02",
      catagory: t('homepage.setups.kitchen.title'),

      image: "/kitchen1.jpg",
      description:
      t('homepage.setups.kitchen.desc'),
    },
    {
      id: "03",
      catagory: t('homepage.setups.bathroom.title'),

      image: "/drowing.jpg",
      description:
      t('homepage.setups.bathroom.desc'),
    },
    {
      id: "04",
      catagory: t('homepage.setups.living.title'),

      image: "/livingroom.jpg",
      description:
      t('homepage.setups.living.desc'),
    },

    {
      id: "05",
      catagory: t('homepage.setups.hall.title'),

      image: "/gallery/gallery55.png",
      description:
      t('homepage.setups.hall.desc'),
    },
    {
      id: "06",
      catagory: t('homepage.setups.laundry.title'),

      image: "/gallery/gallery1.jpg",
      description:
      t('homepage.setups.laundry.desc'),
    },
    {
      id: "07",
      catagory: t('homepage.setups.exterior.title'),

      image: "/gallery/gallery24.png",
      description:
      t('homepage.setups.exterior.desc'),
    },
    {
      id: "08",
      catagory: t('homepage.setups.kid.title'),

      image: "/gallery/gallery25.png",
      description:
      t('homepage.setups.kid.desc'),
    },
    {
        id: "09",
        catagory: t('homepage.setups.wardrobe.title'),

        image: "/gallery/gallery42.jpg",
        description:
        t('homepage.setups.wardrobe.desc'),
      },
  ];

  return (
   <>
    <div className="grid gap-8 divide-gray-300 px-4 py-5 md:py-0 md:px-0 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
      {items.slice(0,4).map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <img src={item.image} alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur-sm">
            <div className="flex justify-between pb-4 ">
              <p className="text-sm">{item.catagory}</p>
              <span className="text-sm ">{item.id}</span>
            </div>
            
            <p className="py-4 text-gray-500 drop-shdaow">{item.description}</p>
          </div>

          <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
            <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
            <span className="">{item.id}</span>
          </div>
        </div>
      ))}
    </div>
     <div className="grid gap-8 divide-gray-300 px-4 py-5 lg:h-[450px] md:py-0 md:px-0 lg:divide-x lg:gap-0 lg:grid-cols-5 md:grid-cols-2">
     {items?.slice(4,9).map((item) => (
       <div key={item.id} className="relative overflow-hidden group h-full">
         <div className="h-full">
           <img src={item.image} alt="" className="w-full h-full" />
         </div>
         <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur-sm">
           <div className="flex justify-between pb-4 ">
             <p className="text-sm">{item.catagory}</p>
             <span className="text-sm ">{item.id}</span>
           </div>
           
           <p className="py-4 text-gray-500 drop-shdaow">{item.description}</p>
         </div>

         <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
           <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
           <span className="">{item.id}</span>
         </div>
       </div>
     ))}
   </div>
   </>
  );
}
