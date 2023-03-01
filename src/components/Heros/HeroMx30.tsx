import Image from "next/image"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper"

interface SlideProps {
  name: string
  image: string
}

const List: SlideProps[] = [
  {
    name: "image1",
    image:
      "https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true",
  },
  {
    name: "image2",
    image:
      "https://images.unsplash.com/photo-1673997058976-497b8e85f3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto&force=true",
  },
]

const HeroMx30 = () => {
  return (
    <section>
      <Swiper
        className="w-full h-screen bg-zinc-800"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        //className="mySwiper"
      >
        {List.map((item) => (
          <SwiperSlide
            key={item.name}
            className="text-center text-lg bg-zinc-800 flex justify-center items-center w-full h-full relative overflow-hidden aspect-video"
          >
            <Image
              src={item.image}
              alt={`${item.name} image`}
              className="object-cover"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default HeroMx30
