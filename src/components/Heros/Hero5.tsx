import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"
import SlideImage from "../Carousel/SlideImage"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

interface SlideProps {
  title: string
  img: string
  text: string
}

const Slides: SlideProps[] = [
  {
    title: "site",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&dl=nasa-yZygONrUBe8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "Conecte-se com o mundo a partir de nossos serviços!",
  },
  {
    title: "app",
    img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&dl=robynne-hu-HOrhCnQsxnQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "Encontre soluções para os seus problemas!",
  },
  {
    title: "sistemas",
    img: "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&dl=jonatan-pie-3l3RwQdHRHg-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "Tenha as últimas tecnologias aplicadas ao seu negócio.",
  },
]

const Hero5 = () => {
  return (
    <section>
      <div>
        <Swiper
          style={{
            //@ts-ignore
            "--swiper-theme-color": "#ffffff",
          }}
          className="w-full"
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {Slides.map((item) => (
            <SwiperSlide
              key={item.title}
              className="overflow-hidden items-center relative justify-center w-full h-full aspect-video"
            >
              <Image src={item.img} alt={item.title} priority fill />
              <div className="absolute top-20 sm:top-32 md:top-52 lg:top-72 xl:top96 2xl:top-1/2 bg-white">
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl 2xl:text-7xl whitespace-normal font-bold">
                  {item.text}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero5
