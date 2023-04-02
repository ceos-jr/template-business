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
    titulo: "gay",
    img: "https://cdn-icons-png.flaticon.com/512/763/763771.png",
    texto: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    titulo: "gay2",
    img: "https://cdn-icons-png.flaticon.com/512/763/763773.png",
    texto: "The best services",
  },
  {
    titulo: "gay3",
    img: "https://cdn-icons-png.flaticon.com/512/8036/8036693.png",
    texto: "lixuuu",
  },
]

const ClientsJuia = () => {
  return (
    <section className="w-screen flex flex-wrap justify-center items-center bg-gray-100">
      <h1 className="font-bold text-2xl m-5">What they say about us</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCoverflow, Pagination]}
        slidesPerView={"auto"}
        className="h-1/2 flex items-center justify-center relative"
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
            className="bg-pink-200 bg-center h-80 w-50 m-6 grid grid-cols-2 rounded-lg"
          >
            <Image
              src={item.img}
              alt={`${item.titulo} image`}
              className="m-5"
              width={250}
              height={250}
              priority
            />
            <div className="m-6 w-1/2 font-bold text-xl ">{item.texto}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ClientsJuia
