import { FiClock } from "react-icons/fi"
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
} from "react-icons/fa"

const SubHeader = () => {
  return (
    <div className="hidden absolute top-0 w-full h-12 bg-[#a4c639] z-10 md:flex">
      <div className="container flex justify-between">
        <ul className="flex text-white text-sm font-bold px-5 lg:px-0">
          <li className="flex items-center h-full px-5 border-x border-[#ffffff4d]">
            <a href="#" className="flex">
              <FiClock className="text-lg mr-2 self-start" />
              <span>Mon-Fri 09:00-17:00</span>
            </a>
          </li>
          <li className="flex items-center h-full px-5 border-r border-[#ffffff4d]">
            <a href="#" className="flex">
              <FaPhoneAlt className="text-sm mr-2 self-start" />
              <span>090-080-0760</span>
            </a>
          </li>
        </ul>
        <ul className="flex text-white text-sm font-bold px-4 lg:px-0">
          <li className="flex items-center h-full px-4 border-x border-[#ffffff4d]">
            <a href="#">
              <FaFacebookF className="text-sm font-bold" />
            </a>
          </li>
          <li className="flex items-center h-full px-4 border-r border-[#ffffff4d]">
            <a href="#">
              <FaTwitter className="text-sm font-bold" />
            </a>
          </li>
          <li className="flex items-center h-full px-4 border-r border-[#ffffff4d]">
            <a href="#">
              <FaLinkedinIn className="text-base font-bold" />
            </a>
          </li>
          <li className="flex items-center h-full px-4 border-r border-[#ffffff4d]">
            <a href="#">
              <FaBehance className="text-lg font-bold" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SubHeader
