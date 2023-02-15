import React from "react"
import { StaticImageData } from "next/image"
import { Service1Type } from "./Services1"
import Service1Img from "@/images/services/service-1.webp"
import ServiceCard from "./ServiceCardMx30"

const services: Service1Type[] = [
  {
    name: "Service 1",
    image:
      "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Service 2",
    image:
      "https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Service 3",
    image:
      "https://images.unsplash.com/photo-1543710998-0b2b2a3c3a01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto&force=true",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Service 4",
    image:
      "https://images.unsplash.com/photo-1673997058976-497b8e85f3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto&force=true",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
]

const ServicesMx30 = () => {
  return (
    <section className="flex flex-col gap-y-20 justify-center items-center mx-auto py-10 bg-zinc-900">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Our <span className="text-violet-800">Services</span>
        </h1>
        <p className="pt-4 font-light text-white uppercase">
          Checkout our products
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  )
}

export default ServicesMx30
