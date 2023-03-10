import { useState, useEffect } from "react"
import { GiBookStorm } from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar3 = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "CONTACT", link: "/" },
  ]
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const toggleNavbar = () => {
    setOpen((previous) => !previous)
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  return (
    <div
      className={`transition-all duration-600 bg-gradient-to-r from-zinc-800 to-zinc-900 shadow-md w-full fixed z-10 top-0 left-0 ${
        scroll ? "opacity-100 " : "opacity-80 py-3 "
      }`}
    >
      <div className="transition-all md:flex items-center justify-between py-4 hidden md:px-10 px-7">
        <div className="font-bold text-2l cursor-pointer flex items-center text-violet-700">
          <span className="text-2xl">
            <GiBookStorm className="text-4xl text-violet-700" />
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
      <div className="md:hidden relative py-4 ">
        <div className="flex justify-between px-4 items-center">
          <GiBookStorm className="text-3xl text-violet-700" />
          <button onClick={toggleNavbar}>
            <GiHamburgerMenu
              className={`transition-colors text-xl active:text-violet-700 ${
                open ? "text-violet-700" : "text-gray-400"
              }`}
            />
          </button>
        </div>
        <ul
          className={`duration-300 overflow-hidden transition-all gap-3 absolute flex flex-col justify-between items-center w-full bg-gradient-to-r from-purple-900 to-zinc-800 ${
            open ? "max-h-60 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
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
  )
}
export default Navbar3
