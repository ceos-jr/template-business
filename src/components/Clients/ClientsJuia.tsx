import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

 
const ClientsJuia = () => {
    return(
        <section className="bg-white w-full h-screen mx-auto">
        <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCards]}
        slidesPerView={'auto'}

      >
        <SwiperSlide >
          <div className= " bg-red-500 block max-w-sm rounded-lg p-10 m-20 ">
          <h1>a</h1>
          </div>
          </SwiperSlide>
        <SwiperSlide className = "bg-blue-500 block max-w-sm rounded-lg p-10 m-20 ">b</SwiperSlide>
        <SwiperSlide className = "bg-green-500 block max-w-sm rounded-lg p-10 m-20 ">c</SwiperSlide>
      </Swiper>
      </section>
    )
}

export default ClientsJuia