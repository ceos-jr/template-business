import ServiceCard from "./ServiceCard1";
import Service1Img from "../../public/images/services/service-1.webp";
import { StaticImageData } from "next/image";

export type Service1Type = {
  name: string;
  image: StaticImageData | string;
  description: string;
};

const services: Service1Type[] = [
  {
    name: "Servico 1",
    image: "images/services/service-1.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Servico 2",
    image: Service1Img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
  {
    name: "Servico 3",
    image: Service1Img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet.",
  },
];

const Services1 = () => {
  return (
    <section className="container flex flex-col gap-y-16 justify-center items-center mx-auto mt-24">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Nossos <span className="text-primary-500">Servicos</span>
        </h1>
        <p className="pt-4 font-light text-gray-800 uppercase">
          Adquira um dos nossos servicos
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services1;
