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
  texto: string
}
const List: SlideProps[] = [
  {
    titulo: "gato",
    img: "/images/Hero/gatonachuva.webp",
    texto: "Get the purrrfect boat for your cat!",
  },
  {
    titulo: "gato2",
    img: "/images/Hero/gatodefone.webp",
    texto: "You're probably asking yourself: Why?",
  },
  {
    titulo: "gato3",
    img: "/images/Hero/gatogiga.webp",
    texto: ". . . But you should ask: WHY NOT?!",
  },
]

const HeroJuia = () => {
  return (
    <section>
      <Swiper
        style={{
          //@ts-ignore
          "--swiper-theme-color": "#ffffff",
        }}
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
          <SwiperSlide
            key={item.titulo}
            className="text-center text-lg bg-white flex justify-center items-center w-full h-screen overflow-hidden relative"
          >
            <Image
              src={item.img}
              alt={`${item.titulo} image`}
              className="object-cover lg:object-fill"
              fill
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 h-auto bg-white bg-opacity-50 rounded-lg shadow-md text-center">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold py-4 font-sans drop-shadow-lg shadow-black">
                {item.texto}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroJuia
