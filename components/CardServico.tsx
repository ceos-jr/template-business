import ExportedImage from "next-image-export-optimizer";
import { Service } from "./NossosServicos";

type CardServicoProps = Service;

const CardServico = ({ name, image, description }: CardServicoProps) => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-gray-100 rounded-lg shadow-xl min-h-64">
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
  );
};

export default CardServico;
