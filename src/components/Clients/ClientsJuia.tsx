import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

 
const ClientsJuia = () => {
    return(
        <section className = "w-full h-full absolute">
        <Swiper
        style={{
          //@ts-ignore
          "--swiper-theme-color": "#ffffff",
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className = "flex justify-center items-center"
      >
        <SwiperSlide className = "flex items-center justify-center text-xl font-bold text-white relative">Slide 1</SwiperSlide>
        <SwiperSlide className = "flex items-center justify-center text-xl font-bold text-white relative">Slide 2</SwiperSlide>
        <SwiperSlide className = "flex items-center justify-center text-xl font-bold text-white relative">Slide 3</SwiperSlide>
        <SwiperSlide className = "flex items-center justify-center text-xl font-bold text-white relative">Slide 4</SwiperSlide>
      </Swiper>
      </section>
    )
}

export default ClientsJuia