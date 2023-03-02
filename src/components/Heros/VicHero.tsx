/*import Carousel from "../Carousel/Carousel"

const Hero = () => {
  return (
    <section className="h-[95vh] w-full bg-white z-0 md:h-screen">
      <Carousel />
    </section>
  )
}

export default Hero */


import React, { useRef, useState } from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Keyboard, Pagination, Navigation } from "swiper"


interface SlideProps {
    titulo: string
    image: string
  }
  const List: SlideProps[] = [
    {
      titulo: "CAT",
      image: "https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/cat.jpg",
    }, 
    {
      titulo: "DOG",
      image: "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/dog.jpg?raw=true",
    },
    {
      titulo: "MOUNTAIN",
      image: "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/mountains.jpg?raw=true",
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
          modules={[Keyboard, Pagination, Navigation]}
        >
          {List.map((item) => (
            <SwiperSlide key={item.titulo} className="text-center text-lg bg-transparent flex justify-center items-center w-full h-full relative overflow-hidden">
            <Image
              src={item.image}
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
  
export default Hero
/*export default () => {
    return (
      <Swiper
        effect="coverflow"
        spaceBetween={500}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      ><Image
          src={image}
          alt={`service ${name} image`}
          className="object-cover"
          sizes="(max-width: 1538px) 80vw, 1000px"
          fill
        />
        <div className="container mx-auto py- px-4"></div>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    );
  }; */