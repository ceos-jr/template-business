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
}
const List: SlideProps[] = [
  {
    titulo: "CAT",
    image:
      "https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/cat.jpg",
  },
  {
    titulo: "DOG",
    image:
      "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/dog.jpg?raw=true",
  },
  {
    titulo: "MOUNTAIN",
    image:
      "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/mountains.jpg?raw=true",
  },
]

const Hero = () => {
  return (
    <section>
      <Swiper
        effect="coverflow"
        className="w-full h-screen"
        slidesPerView={2}
        spaceBetween={0}
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
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
