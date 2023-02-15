import VicServiceCard from "./VicServiceCard"
import Vic1 from "@/images/services/vic1.webp"
import Vic2 from "@/images/services/vic2.webp"
import Vic3 from "@/images/services/vic3.webp"
import { StaticImageData } from "next/image"

export type Service1Type = {
  name: string
  image: StaticImageData | string

}

const services1: Service1Type[] = [
  {
    name: "Servico 1",
    image: Vic1,
  },

]

const services2: Service1Type[] = [
  {
    name: "Servico 2",
    image: Vic2,
  },

]

const services3: Service1Type[] = [
  {
    name: "Servico 3",
    image: Vic3,
  },

]



const VicServices = () => {
  return (
    <section className="container flex flex-col gap-y-16 bg-amber-100 justify-center items-center mx-auto mt-24 divide-y divide-black md:py-8 ">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Nossos <span className="text-primary-500">Servicos</span>
        </h1>
        <p className="pt-4 font-light text-gray-800 uppercase">
          Adquira um dos nossos servicos
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-3 ">
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