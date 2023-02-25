import { useState } from "react"
import { GiBookStorm } from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "CONTACT", link: "/" },
  ]
  const [open, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen((previous) => !previous)
  }
  return (
    <div className="shadow-md w-full fixed z-10 top-0 left-0">
      <div className="md:flex items-center justify-between bg-zinc-800 py-4 hidden md:px-10 px-7">
        <div className="font-bold text-2l cursor-pointer flex items-center text-violet-700">
          <span className="text-3xl">
            <GiBookStorm className="text-6xl text-violet-700" />
          </span>
          Company_Name
        </div>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l">
              <a
                href={link.link}
                className="text-gray-400 hover:text-violet-700 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden items-center justify-between bg-zinc-800 py-4 ">
        <div className="flex justify-between items-center">
          <GiBookStorm className="text-3xl text-violet-700" />
          <button onClick={toggleNavbar}>
            <GiHamburgerMenu className="text-xl text-violet-700" />
          </button>
          <ul
            className={
              "absolute flex flex-col items-center -top-96 left-0 w-full bg-zinc-800 opacity-0 [transition:_opacity_300ms_200ms_ease-out] lg:hidden" +
              (open ? " translate-y-[27rem] opacity-100" : "")
            }
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-l">
                <a
                  href={link.link}
                  className="text-gray-400 hover:text-violet-700 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
