import ClientCard2 from "./ClientCard2"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import { Autoplay, Pagination, Navigation } from "swiper"
// import required modules
import { EffectCards } from "swiper"

export type Client2Type = {
  name: string
  role: string
  testimony: string
}

const clients: Client2Type[] = [
  {
    name: "Tubias",
    role: "Head nos Portulovers",
    testimony: "Si si si mano, mucho legal, gostei mucho mesmo",
  },
  {
    name: "Cubias",
    role: "Head nos Portuhaters",
    testimony: "No no no mano, mucho chato, gostei mucho pouco",
  },
  {
    name: "Anti-Rego",
    role: "sei la",
    testimony: "No no no mano, mucho chato, gostei mucho pouco",
  },
  {
    name: "Pro-Rego",
    role: "sei nao",
    testimony: "No no no mano, mucho chato, gostei mucho pouco",
  },
]
export const Clients2 = () => {
  return (
    <div className="w-full text-white bg-zinc-900">
      <div className="container flex flex-col gap-y-16 justify-center items-center py-16 px-8 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            O que eles dizem <span className="text-violet-800">sobre nós</span>
          </h1>
          <h2 className="pt-4 font-light text-gray-400 text-xl">
            Testemunho dos nossos melhores clientes
          </h2>
          {clients.map((mx30) => (
            <ClientCard2
              key={mx30.name}
              name={mx30.name}
              role={mx30.role}
              testimony={mx30.testimony}
              {...clients}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <div className="w-full text-white bg-zinc-900 pb-24">
        <div className="container flex flex-col gap-y-16 justify-center items-center py-16 px-8 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              O que eles dizem{" "}
              <span className="text-violet-800">sobre nós</span>
            </h1>
            <h2 className="pt-4 font-light text-gray-400 text-xl">
              Testemunho dos nossos melhores clientes
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
          className="w-screen lg:w-1/3"
        >
          {clients.map((mx30) => (
            <SwiperSlide key={mx30.name}>
              <ClientCard2
                name={mx30.name}
                role={mx30.role}
                testimony={mx30.testimony}
                {...clients}
              ></ClientCard2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
