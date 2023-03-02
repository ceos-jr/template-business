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
}

const Slide = ({ name, image }: SlideProps) => {
  return (
    <Image
      src={image}
      priority
      alt={`${name} image`}
      className="object-cover"
      fill
    />
  )
}

const List: SlideProps[] = [
  {
    name: "image1",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&dl=campbell-3ZUsNJhi_Ik-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "image2",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&dl=florian-olivo-4hbJ-eymZ1o-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
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
        classname = "w-full full"
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
            <Slide name={item.name} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Hero2

