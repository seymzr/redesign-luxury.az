
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function PartnersSwiper({images}) {

    return (
        <div className="w-full pt-[100px] lg:pt-[150px] px-12 lg:px-0 mx-auto lg:max-w-[1200px] ">
            {/* <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left ">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider">LUXURY DECOR TO CREATE COMFORT IN OUR HOME</h2>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p>
                                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p>
                                We create distinctive and unique designs that are inspired by the latest trends in interior design and fashion.
                            </p>
                            <a href="" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowUpRight /> </a>
                        </div>
                    </div>
                </div>
            </div> */}

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}

            >
                {images.map((img,index)=>(
                    <SwiperSlide>
                    <img src={img.img} alt="partner" />
                </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}