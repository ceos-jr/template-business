import Image from "next/image";

interface CardServicoProps {
  name: string;
  image: string;
  description: string;
}

const CardServico = ({ name, image, description }: CardServicoProps) => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-gray-100 rounded-lg shadow-xl min-h-64">
      <div className="overflow-hidden relative w-full aspect-video">
        <Image
          src={image}
          alt={`image-${name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default CardServico;
