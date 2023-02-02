import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineUser, AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import { IconType } from "react-icons";

interface CardMembroProps {
  name: string;
  position: string;
  image?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

const MediaLink = ({ Icon, link }: { Icon: IconType; link: string }) => {
  return (
    <a href={link}>
      <Icon className="p-1 text-lime-400 rounded-lg border-2 border-lime-400 transition-all duration-500 cursor-pointer hover:text-white hover:bg-lime-400" />
    </a>
  );
};

const CardMembro = ({
  name,
  position,
  image,
  linkedin,
  instagram,
  facebook,
  twitter,
}: CardMembroProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 bg-gray-100 rounded-lg shadow-xl">
      <div className="overflow-hidden relative w-32 h-32 rounded-full">
        {image ? (
          <Image
            src={image}
            fill
            alt={`member-${name}`}
            className="object-cover"
          />
        ) : (
          <AiOutlineUser className="w-full h-full text-gray-800 bg-white" />
        )}
      </div>
      <p className="text-3xl font-bold text-gray-800">{name}</p>
      <p className="text-gray-800">{position}</p>
      <div className="flex gap-4 justify-center items-center text-4xl">
        {instagram && <MediaLink Icon={FaInstagram} link={instagram} />}
        {facebook && <MediaLink Icon={FaFacebookF} link={facebook} />}
        {linkedin && <MediaLink Icon={FaLinkedinIn} link={linkedin} />}
        {twitter && <MediaLink Icon={AiOutlineTwitter} link={twitter} />}
      </div>
    </div>
  );
};

export default CardMembro;
