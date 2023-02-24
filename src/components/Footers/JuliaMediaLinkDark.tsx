import { IconType } from "react-icons"

const JuliaMediaLinkDark = ({
  link,
  Icon,
}: {
  link: string
  Icon: IconType
}) => {
  return (
    <a href={link}>
      <Icon className="p-1 rounded-lg transition-colors duration-300 cursor-pointer hover:text-gray-900 text-white hover:bg-blue-600" />
    </a>
  )
}

export default JuliaMediaLinkDark
