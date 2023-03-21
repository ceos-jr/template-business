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
  descricao: string
}
const List: SlideProps[] = [
  {
    titulo: "CAT",
    image:
      "https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/cat.jpg",
    descricao: "Whiskas",
  },
  {
    titulo: "DOG",
    image:
      "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/dog.jpg?raw=true",
    descricao: "Royal Canin",
  },
  {
    titulo: "MOUNTAIN",
    image:
      "https://github.com/vercel/next.js/blob/canary/examples/image-component/public/mountains.jpg?raw=true",
    descricao: "Mount Everest",
  },
]

const Hero = () => {
  return (
    <section>
      <Swiper
        effect="coverflow"
        className="w-full h-screen"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
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
            className="flex overflow-hidden relative justify-center items-center w-full h-full text-lg text-center bg-transparent"
          >
            <Image
              src={item.image}
              alt={`${item.titulo} image`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute left-1/2 top-1/4 h-auto text-center bg-opacity-50 rounded-lg transform -translate-x-1/2 -translate-y-1/2 sm:w-2/5 lg:w-11/12 xl:w-11/12 2xl:w-3/5 w-fit bg-inherit">
              <h1 className="text-8xl font-bold text-white">
                {item.descricao}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
