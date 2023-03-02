import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

const Hero = () => {
    return(
        <div>
            <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>

        </div>
    )
}