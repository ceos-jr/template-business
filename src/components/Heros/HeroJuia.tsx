import React, { useRef, useState } from "react"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Keyboard, Pagination, Navigation } from "swiper"

{
  /*const photos = [
    "gatobgazul.webp",
    "gatoehomi.webp",
    "gatoemuie.webp",
    "gatonatalino.webp"
]*/
}

const HeroJuia = () => {
  return (
    <section>
      <Swiper
        className="w-full h-full"
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
        //className="mySwiper"
      >
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
            Slide1
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
            Slide 4
          </SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroJuia
