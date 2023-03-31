import { Members2Type } from "./Members2"
import { AiOutlineUser } from "react-icons/ai"
import Image from "next/image"

type Members2Props = Members2Type
const MemberCard2 = ({ image, name, role, description }: Members2Props) => {
  return (
    <div className="p-10 px-10 text-center jusitfy-center items-center flex flex-col bg-zinc-800 rounded-lg shadow-lg">
      <div className="overflow-hidden relative w-40 h-40 rounded-full">
        {image ? (
          <Image
            src={image}
            alt={`member ${name}`}
            className="object-cover"
            sizes="10rem"
            placeholder="empty"
            fill
          />
        ) : (
          <AiOutlineUser className="w-full h-full text-gray-800 bg-white" />
        )}
      </div>
      <h3 className="text-3xl font-bold pt-12">{name}</h3>
      <h4 className="font-bold text-2xl text-violet-800">{role}</h4>
      <p>{description}</p>
    </div>
  )
}
export default MemberCard2
