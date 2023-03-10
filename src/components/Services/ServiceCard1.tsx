import Image from "next/image"
import { Service1Type } from "./Services1"

type ServiceCard1Props = Service1Type

const ServiceCard = ({ name, image, description }: ServiceCard1Props) => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-gray-100 rounded-lg shadow-xl min-h-64">
      <div className="overflow-hidden relative w-full aspect-video">
        <Image
          src={image}
          alt={`service ${name}`}
          className="object-cover"
          placeholder="blur"
          sizes="(max-width: 768px) 80vw, 350px"
          fill
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
