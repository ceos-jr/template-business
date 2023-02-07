import { IconType } from "react-icons"

const MediaLinkDark = ({ link, Icon }: { link: string; Icon: IconType }) => {
  return (
    <a href={link}>
      <Icon className="p-1 rounded-lg transition-colors duration-300 cursor-pointer hover:text-gray-900 text-primary-400 hover:bg-primary-400" />
    </a>
  )
}

export default MediaLinkDark
