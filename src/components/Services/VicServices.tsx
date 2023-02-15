import VicServiceCard from "./VicServiceCard"
import Service1Img from "@/images/services/service-1.webp"
import { StaticImageData } from "next/image"

export type Service1Type = {
  name: string
  image: StaticImageData | string
  description: string
}

const services1: Service1Type[] = [
  {
    name: "Servico 1",
    image: "images/services/vic1.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },

]

const services2: Service1Type[] = [
  {
    name: "Servico 2",
    image: "images/services/vic2.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },

]

const services3: Service1Type[] = [
  {
    name: "Servico 3",
    image: "images/services/vic3.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },

]



const VicServices = () => {
  return (
    <section className="container flex flex-col gap-y-16 bg-amber-100 justify-center items-center mx-auto mt-24 ">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Nossos <span className="text-primary-500">Servicos</span>
        </h1>
        <p className="pt-4 font-light text-gray-800 uppercase">
          Adquira um dos nossos servicos
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-3">
        {services1.map((service) => (
          <VicServiceCard key={service.name} {...service} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-3">
        {services2.map((service) => (
          <VicServiceCard key={service.name} {...service} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-3">
        {services3.map((service) => (
          <VicServiceCard key={service.name} {...service} />
        ))}
      </div>

    </section>
  )
}

export default VicServices