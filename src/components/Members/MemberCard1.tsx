import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineUser, AiOutlineTwitter } from "react-icons/ai"
import { IconType } from "react-icons"
import { Member1Type } from "./Members1"
import Image from "next/image"

type CardMembroProps = Member1Type

const MediaLink = ({ Icon, link }: { Icon: IconType; link: string }) => {
  return (
    <a href={link}>
      <Icon className="p-1 rounded-lg border-2 transition-all duration-500 cursor-pointer hover:text-white text-primary-400 border-primary-400 hover:bg-primary-400" />
    </a>
  )
}

const MemberCard1 = ({
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
      <div className="overflow-hidden relative w-40 h-40 rounded-full">
        {image ? (
          <Image
            src={image}
            alt={`member ${name}`}
            className="object-cover"
            sizes="10rem"
            placeholder="blur"
            fill
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
  )
}

export default MemberCard1
