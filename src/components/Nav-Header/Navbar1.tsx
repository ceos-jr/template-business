import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const NavItemData = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "Our Services",
    url: "#",
  },
  {
    text: "About Us",
    url: "#",
  },
  {
    text: "Contact Us",
    url: "#",
  },
  {
    text: "Multi-Page",
    url: "#",
  },
]

interface NavItemProps {
  text: string
  url: string
}

const NavItemMobile = ({ text, url }: NavItemProps) => {
  return (
    <li className="w-full text-gray-800 border-b border-gray-200 hover:text-primary-500 transition-colors duration-300 ease-in">
      <a href={url} className="block text-center w-full py-4">
        {text}
      </a>
    </li>
  )
}

const NavItem = ({ text, url }: NavItemProps) => {
  return (
    <li className="text-white mx-4">
      <a
        href={url}
        className={`
            relative px-2 py-2 [transtition:_color_300ms_ease-in] 
            before:absolute 
            before:w-0 before:h-0.5 
            before:bottom-0 before:left-0
            before:bg-primary-500 
            before:rounded-full
            before:[transition:_width_300ms_ease-in]
            hover:text-primary-500
            hover:before:w-full
          `}
      >
        {text}
      </a>
    </li>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen((previous) => !previous)
  }

  return (
    <nav className="relative flex px-4 h-20 w-full lg:h-24">
      <div className="container flex justify-between items-center">
        <a href="#">
          <h2 className="text-2xl text-white uppercase font-extrabold">
            Finance Business
          </h2>
        </a>
        <ul className="hidden bg-transparent lg:flex">
          {NavItemData.map((data) => {
            return (
              <NavItem
                key={data.url + data.text}
                text={data.text}
                url={data.url}
              />
            )
          })}
        </ul>
        <button
          className="bg-white px-2 py-2 rounded lg:hidden"
          onClick={toggleNavbar}
        >
          <GiHamburgerMenu className="text-primary-500 w-5 h-5" />
        </button>
        <ul
          className={
            "absolute flex flex-col -top-96 left-0 w-full px-4 bg-white opacity-0 [transition:_opacity_0.3s_0.2s_ease-out] lg:hidden" +
            (open ? " translate-y-[29rem] opacity-100" : "")
          }
        >
          {NavItemData.map((data) => {
            return (
              <NavItemMobile
                key={data.url + data.text}
                text={data.text}
                url={data.url}
              />
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
