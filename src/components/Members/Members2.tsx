<<<<<<< HEAD
import { StaticImageData } from "next/image"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import { Autoplay, Pagination, Navigation } from "swiper"
import MemberCard2 from "./MemberCard2"

export type Members2Type = {
  image?: StaticImageData | string
  name: string
  role: string
  description: string
}

const members: Members2Type[] = [
  {
    image:
      "https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=birmingham-museums-trust-4lj3rJsR420-unsplash.jpg&w=1920",
    name: "Sir Edward Coley Burne-Jones",
    role: "Pre-Raphaelite Expert",
    description:
      "Pioneer of the revival of the ideal of the “artist-craftsman,” so influential to the development of 20th-century industrial design.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535643302794-19c3804b874b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=abstral-official-cyOKLSgkgCE-unsplash.jpg&w=1920",
    name: "Seu Zé",
    role: "Dono do Mercadinho Seu Zé",
    description:
      "Nascido no interior do sertão cearense, 5o filho de Dona Maria. Tem 20 netos, 5 filhos e uma humilde lojinha na esquina",
  },
]
export default function App() {
  return (
    <>
      <div className="w-full text-white bg-zinc-900 pb-24">
        <div className="container flex flex-col gap-y-16 justify-center items-center py-16 px-8 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Conheça a <span className="text-violet-800">MX ENTERPRISES</span>
            </h1>
            <h2 className="pt-4 font-light text-gray-400 text-xl">
              Vislumbre nossos membros mais bonitos!
            </h2>
          </div>
        </div>
        <Swiper
          style={{
            //@ts-ignore
            "--swiper-theme-color": "#5B21B6",
          }}
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
          className="w-full lg:w-1/3"
        >
          {members.map((mx30) => (
            <SwiperSlide key={mx30.name}>
              <MemberCard2
                image={mx30.image}
                name={mx30.name}
                role={mx30.role}
                description={mx30.description}
                {...members}
              ></MemberCard2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
=======
import React, { CSSProperties } from "react"
import MemberCard2 from "./MemberCard2"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import ConorImg from "@/images/members/conor.webp"

const slideStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const memberInfo = [
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#",
  },
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#",
  },
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#",
  },
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#",
  },
]

const Members2 = () => {
  return (
    <section className="flex relative flex-col justify-center mx-auto py-10">
      <div className="container">
        <h2 className="z-10 mb-4 text-xl text-primary-500 md:mb-0">
          Nosso Time
        </h2>
        <h3 className="z-10 text-3xl font-semibold leading-10 max-w-[45ch]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          sapiente!
        </h3>
        <Swiper
          className="w-full h-[30rem]"
          style={{
            // @ts-ignore
            "--swiper-theme-color": "#84cc16",
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
        >
          {memberInfo.map((member, index) => {
            return (
              <SwiperSlide key={`slider-${index}`} style={slideStyle}>
                <MemberCard2
                  name={member.name}
                  role={member.role}
                  memberImg={member.memberImg}
                  memberImgAlt={member.memberImgAlt}
                  linkedinURL={member.linkedinURL}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Members2
>>>>>>> origin/main
