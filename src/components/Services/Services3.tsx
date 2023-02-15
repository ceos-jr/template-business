import Image from "next/image"
import { Service1Type } from "./Services1"

type ServiceCard3Props = Service1Type
const ServiceCard3 = ({ name, image, description }: ServiceCard3Props) => {
  return (
    <div className="w-full group">
      <div className="h-64 rounded-lg relative overflow-hidden">
        <Image
          src={image}
          alt={`service image for ${name}`}
          fill
          sizes="(max-width: 640px) 100vw,
              (max-width: 1024px) 40vw,
              (max-width: 1200px) 33vw,
              350px"
          className="object-cover group-hover:scale-125 transition-transform duration-1000"
        />
      </div>
      <h3 className="w-full h-6 mt-4 bg-gray-200 rounded-lg group-hover:scale-105 group-hover:font-bold group-hover:text-teal-700 transition-all text-center tracking-wider group-hover:cursor-pointer">
        {name}
      </h3>
      <p className="w-full p-4 mt-4 bg-gray-200 rounded-lg group-hover:scale-105 group-hover:text-teal-700 transition-all text-center tracking-wider group-hover:cursor-pointer">
        {description}
      </p>
    </div>
  )
}

const serviceList: ServiceCard3Props[] = [
  {
    name: "Service 1.0",
    description: "Vender barquinho",
    image:
      "https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true",
  },
  {
    name: "Service 2.0",
    description: "Arrumar barquinho",
    image:
      "https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true",
  },
  {
    name: "Service 3.0",
    description: "Comprar barquinho",
    image:
      "https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true",
  },
  {
    name: "Service 4.0",
    description: "Alugar barquinho",
    image:
      "https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true",
  },
]

const Services3 = () => {
  return (
    <section className="bg-gray-300">
      <div className="container px-6 py-10 mx-auto flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold tracking-wider text-gray-700">
          Our Services
        </h1>
        <div className="grid grid-cols-1 gap-8 mb-12 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 w-full">
          {serviceList.map((service) => (
            <ServiceCard3
              key={service.name}
              name={service.name}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services3
