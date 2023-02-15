import Image from "next/image"
import { Service1Type } from "./Services1"
type ServiceCard2Props = Service1Type

const ServiceCard = ({ name, image, description }: ServiceCard2Props) => {
  return (
    <div className="group flex overflow-hidden flex-col items-center bg-zinc-800 rounded-md shadow-md shadow-violet-800 min-h-64 hover:shadow-lg hover:shadow-violet-700 ">
      <div className="overflow-hidden relative w-full aspect-video">
        <Image
          src={image}
          alt={`service ${name}`}
          className="object-cover"
          placeholder="empty"
          fill
          sizes="(max-width: 768px) 100vw,
          20vw"
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white group-hover:text-violet-800">
          {name}
        </h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
export default ServiceCard
