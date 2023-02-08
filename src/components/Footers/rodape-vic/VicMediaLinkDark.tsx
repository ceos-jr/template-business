import { IconType } from "react-icons"

const VicMediaLinkDark = ({ link, Icon }: { link: string; Icon: IconType }) => {
  return (
    <a href={link}>
      <Icon className="p-1 rounded-lg transition-colors duration-300 cursor-pointer hover:text-gray-900 text-rose-900 hover:text-sky-600" />
    </a>
  )
}

export default VicMediaLinkDark
