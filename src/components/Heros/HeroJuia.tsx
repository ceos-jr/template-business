import React, { useRef, useState } from "react"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Keyboard, Pagination, Navigation } from "swiper"

interface SlideProps {
  titulo: string
  img: string
}
const List: SlideProps[] = [
  {
    titulo: "gato",
    img: "/images/Hero/gatobgazul.webp",
  },
  {
    titulo: "gato2",
    img: "/images/Hero/gatobgazul.webp",
  },
]

  
const HeroJuia = () => {
  return (
    <section>
      <Swiper
        className="w-full h-screen"
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      >
        {List.map((item) => (
          <SwiperSlide key={item.titulo} className="text-center text-lg bg-white flex justify-center items-center w-full h-full relative overflow-hidden">
          <Image
            src={item.img}
            alt={`${item.titulo} image`}
            className="object-cover"
            fill
          />
          
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroJuia
