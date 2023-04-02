import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// Import Swiper styles
import { EffectCoverflow, Pagination } from "swiper"

import Image from "next/image"

interface SlideProps {
  titulo: string
  img: string
  texto: string
}

const List: SlideProps[] = [
  {
    titulo: "meow",
    img: "https://cdn-icons-png.flaticon.com/512/763/763771.png",
    texto: "... Meow, meow (Thanks to Meow's Company, now I have a boat with a roof!",
  },
  {
    titulo: "meow2",
    img: "https://cdn-icons-png.flaticon.com/512/763/763773.png",
    texto: "I had to hunt for my own food every day, but now that I have a boat, I can eat sashimi anytime.",
  },
  {
    titulo: "meow3",
    img: "https://cdn-icons-png.flaticon.com/512/8036/8036693.png",
    texto: "Years ago, I had a dream of traveling the world, but people only cared about dogs. Meow's Company has created an accessible and reliable environment for cats, and now I have my own boat!",
  },
]

const ClientsJuia = () => {
  return (
    <section className="flex flex-wrap justify-center items-center bg-gray-100">
      <h1 className="font-bold text-2xl m-5">What they say about us</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCoverflow, Pagination]}
        slidesPerView={"auto"}
        className="h-1/2"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {List.map((item) => (
          <SwiperSlide
            key={item.titulo}
            className="bg-pink-200 h-80 w-50"
          >
            <div className = "grid grid-cols-2">
            <Image
              src={item.img}
              alt={`${item.titulo} image`}
              className="m-10"
              width={300}
              height={250}
              priority
            />
            <div className="m-6 w-1/2 text-xl py-6">{item.texto}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ClientsJuia
