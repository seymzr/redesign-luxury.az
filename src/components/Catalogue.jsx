import { TbArrowNarrowRight } from "react-icons/tb";

export default function Catalogue() {
  const items = [
    {
      id: "01",
      catagory: "BEDROOM SETUP",
      title: "Cossy Bedroom Setup",
      image: "/bedroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "02",
      catagory: "KITCHING SETUP",
      title: "Neat & Clean Kitchen",
      image: "/kitchen1.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "03",
      catagory: "BATHROOM SETUP",
      title: "Bath Room",
      image: "/drowing.jpg",
      description:
        "family bathroom with a clean and comfortable design for your family.",
    },
    {
      id: "04",
      catagory: "LIVING SETUP",
      title: "Clean Family Room",
      image: "/livingroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },

    {
      id: "05",
      catagory: "HALL SETUP",
      title: "Clean Family Room",
      image: "/livingroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "06",
      catagory: "LAUNDRY SETUP",
      title: "Clean Family Room",
      image: "/livingroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "07",
      catagory: "EXTERIOR SETUP",
      title: "Clean Family Room",
      image: "/livingroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "08",
      catagory: "KID ROOM SETUP",
      title: "Clean Family Room",
      image: "/livingroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
        id: "08",
        catagory: "WARDROBE ROOM SETUP",
        title: "Clean Family Room",
        image: "/livingroom.jpg",
        description:
          "family drowing room with a clean and comfortable design for your family.",
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
            <p className="block text-xl font-semibold" href="">
              {item.title}
            </p>
            <p className="py-4 text-gray-500 drop-shdaow">{item.description}</p>
          </div>

          <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
            <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
            <span className="">{item.id}</span>
          </div>
        </div>
      ))}
    </div>
     <div className="grid gap-8 divide-gray-300 px-4 py-5 md:py-0 md:px-0 lg:divide-x lg:gap-0 lg:grid-cols-5 md:grid-cols-2">
     {items?.slice(4,9).map((item) => (
       <div key={item.id} className="relative overflow-hidden group">
         <div>
           <img src={item.image} alt="" className="w-full h-full" />
         </div>
         <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur-sm">
           <div className="flex justify-between pb-4 ">
             <p className="text-sm">{item.catagory}</p>
             <span className="text-sm ">{item.id}</span>
           </div>
           <p className="block text-xl font-semibold" href="">
             {item.title}
           </p>
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
