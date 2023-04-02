import { Members3Type } from "./Members3"
import { AiOutlineUser } from "react-icons/ai"
import Image from "next/image"

type Members2Props = Members3Type
const MemberCard2 = ({ image, name, role, description }: Members2Props) => {
  return (
    <div className="flex flex-col items-center p-10 text-center rounded-lg shadow-lg jusitfy-center bg-zinc-800">
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
      <h3 className="pt-12 text-3xl font-bold">{name}</h3>
      <h4 className="text-2xl font-bold text-violet-800">{role}</h4>
      <p>{description}</p>
    </div>
  )
}
export default MemberCard2
