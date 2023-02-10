import { IconType } from "react-icons"

const MX30MediaLinkDark = ({
  link,
  Icon,
}: {
  link: string
  Icon: IconType
}) => {
  return (
    <a href={link}>
      <Icon className="p-1 rounded-lg transition-colors duration-300 cursor-pointer hover:text-fuchsia-300 text-violet-500 hover:bg-violet-800" />
    </a>
  )
}

export default MX30MediaLinkDark
