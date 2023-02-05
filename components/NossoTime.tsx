import CardMembro from "./CardMembro";
import { StaticImageData } from "next/image";
import ConorImg from "../public/images/members/conor.webp";

export type Member = {
  name: string;
  position: string;
  image?: StaticImageData | string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
};

const members: Member[] = [
  {
    name: "Conor McGregor",
    position: "CEO",
    image: ConorImg,
  },
  {
    name: "Dana White",
    position: "Biggest fan of McGregor",
    image: "images/members/dana.webp",
  },
];

const NossoTime = () => {
  return (
    <div className="container flex flex-col gap-8 justify-center p-8 pt-24 mx-auto">
      <p className="text-lg font-semibold text-primary-600">Nosso Time</p>
      <h1 className="text-4xl font-bold text-gray-800">
        Somos uma equipe de pequenos contadores de historias e roubado da ceos
      </h1>
      <div className="p-4">
        {members.map((member) => (
          <CardMembro
            key={`member-${member.name}`}
            name={member.name}
            position={member.position}
            image={member.image}
            linkedin={member.linkedin}
            instagram={member.instagram}
            facebook={member.facebook}
            twitter={member.twitter}
          />
        ))}
      </div>
    </div>
  );
};

export default NossoTime;
