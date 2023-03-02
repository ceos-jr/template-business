import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"
import SlideImage from "../Carousel/SlideImage";

interface SlideProps {
    title: string
    img: string
    text: string
}

const Slides: SlideProps [] = [
    {
        title: "site",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&dl=campbell-3ZUsNJhi_Ik-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        text: "Conecte-se com o mundo a partir de nossos serviços!"
    },
    {
        title: "app",
        img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        text: "Encontre soluções para os seus problemas!"
    },
    {
        title: "sistemas",
        img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        text: "Tenha as últimas tecnologias aplicadas ao seu negócio."
    }
] 

const Hero5 = () => {
    return(
        <section >
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
                    delay:2000,
                    disableOnInteraction:false
                }}
                pagination={{
                    clickable: true,
                }}
                >
                  {Slides.map((item) => (
                        <SwiperSlide
                        key={item.title}
                        className="flex overflow-hidden relative justify-center items-center w-full h-full text-lg text-center bg-zinc-800 aspect-video"
                        >
                            

                        </SwiperSlide>
                    ))
                  }  
                </Swiper> 
            </div>
        </section>
    )
}

export default Hero5