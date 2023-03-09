import React, { useRef, useState } from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { Keyboard, Pagination, Navigation, EffectCoverflow } from "swiper"

interface SlideProps {
  titulo: string
  image: string
  descricao: string
}
const List: SlideProps[] = [
  {
    titulo: "CAT",
    image:
      "https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/cat.jpg",
    descricao: "Whiskas",
  },
  {
    titulo: "DOG",
    image:
      "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/dog.jpg?raw=true",
    descricao: "Royal Canin",
  },
  {
    titulo: "MOUNTAIN",
    image:
      "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/mountains.jpg?raw=true",
    descricao: "Mount Everest",
  },
]

const Hero = () => {
  return (
    <section>
      <Swiper
        effect="coverflow"
        className="w-full h-screen"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, EffectCoverflow]}
        coverflowEffect={{
          rotate: 30,
          slideShadows: true,
        }}
      >
        {List.map((item) => (
          <SwiperSlide
            key={item.titulo}
            className="text-center text-lg bg-transparent flex justify-center items-center w-full h-full relative overflow-hidden"
          >
            <Image
              src={item.image}
              alt={`${item.titulo} image`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 50vw,
              "
              priority
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  sm:w-2/5 lg:w-11/12 xl:w-11/12 2xl:w-3/5 h-auto w-fit bg-inherit bg-opacity-50 rounded-lg text-center">
              <h1 className="text-8xl text-white font-bold">
                {item.descricao}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
//<h1 className=" md:text-center text-8xl font-bold font-sans px-32 py-32   text-white">
//              {item.descricao}
//          </h1>
//"absolute md:container md:mx-auto bg-white"
//"absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/2 h-auto bg-white bg-opacity-50 rounded-lg shadow-md text-center"
//h1  md:text-center text-8xl font-bold font-sans px-32 py-32   text-white
