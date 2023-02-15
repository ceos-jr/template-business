import ExportedImage from "next-image-export-optimizer"
import { Service1Type } from "./VicServices"

type ServiceCard1Props = Service1Type

const ServiceCard = ({ name, image, description }: ServiceCard1Props) => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-green-50	 rounded-lg shadow-xl min-h-64">
      <div className="overflow-hidden relative w-full aspect-video">
        <ExportedImage
          src={image}
          alt={`image-${name}`}
          className="object-cover"
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
