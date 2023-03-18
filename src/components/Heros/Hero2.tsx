import Image from "next/image"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper"

interface SlideProps {
  name: string
  image: string
  text: string
}

const Slide = ({ name, image, text }: SlideProps) => {
  return (
    <>
      <Image
        src={image}
        priority
        alt={`${name} image`}
        className="object-cover"
        fill
      />
      <div className="absolute left-1/4 top-3/4 w-4/5 h-auto text-center bg-gradient-to-r from-purple-900 rounded-lg shadow-md opacity-80 transform -translate-x-2/3 sm:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 to-zinc-800">
        <p className="py-4 text-lg text-white md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl drop-shadow-lg">
          {text}
        </p>
      </div>
    </>
  )
}

const List: SlideProps[] = [
  {
    name: "image1",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&dl=campbell-3ZUsNJhi_Ik-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "SAID CARROS🚓",
  },
  {
    name: "image2",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&dl=florian-olivo-4hbJ-eymZ1o-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "SAID CODIGOS☢",
  },
]

const Hero2 = () => {
  return (
    <section>
      <Swiper
        style={{
          //@ts-ignore
          "--swiper-theme-color": "#5B21B6",
        }}
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
      >
        {List.map((item) => (
          <SwiperSlide
            key={item.name}
            className="flex overflow-hidden relative justify-center items-center w-full h-full text-lg text-center bg-zinc-800 aspect-video"
          >
            <Slide name={item.name} image={item.image} text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Hero2
