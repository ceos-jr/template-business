import Image from "next/image"
import { Service1Type } from "./Services1"

type ServiceCard1Props = Service1Type

const ServiceCard = ({ name, image, description }: ServiceCard1Props) => {
  return (
    <li className="flex overflow-hidden flex-col bg-green-50 rounded-md shadow-xl min-h-64">
      <div className="overflow-hidden relative w-full aspect-video">
        <Image
          src={image}
          alt={`service ${name} image`}
          className="object-cover"
          sizes="(max-width: 1538px) 80vw, 1000px"
          fill
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-xl italic">{description}</p>
      </div>
    </li>
  )
}

export default ServiceCard
