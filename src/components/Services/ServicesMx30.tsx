import React from "react"
import { StaticImageData } from "next/image"
import { Service1Type } from "./Services1"
import Service1Img from "@/images/services/service-1.webp"
import ServiceCard from "./ServiceCardMx30"

const services: Service1Type[] = [
  {
    name: "Service 1",
    image: Service1Img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Service 2",
    image: Service1Img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Service 3",
    image: Service1Img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Service 4",
    image: Service1Img,
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
          Some of our services
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
