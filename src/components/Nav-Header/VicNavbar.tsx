import Home from "pages"
import { useEffect, useState } from "react"
import { FaCube } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import Link from "next/link"
const links = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/" },
  { name: "Pricing", link: "/" },
  { name: "Contact", link: "/" },
  { name: "Features", link: "/" },
]
const VicNavbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const [isScrolled, setisScrolled] = useState(false)
  function changeMe() {
    if (window.scrollY >= 80) {
      setisScrolled(true)
    } else {
      setisScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeMe)

    return () => {
      window.removeEventListener("scroll", changeMe)
    }
  }, [])

  return (
    <header className={`w-full transition-all duration-500 fixed z-10 top-0 left-0 bg-gray-200 px-2 py-4 ${isScrolled? "opacity-100":"opacity-80"}`}>
      <nav className="hidden md:flex justify-between items-center ">
        <FaCube />
        <ul className="flex items-center gap-4">
          {links.map((item) => (
            <li>
              <Link className="hover:text-red-900 text-md" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="bg-gray-200 relative w-full md:hidden">
        <div className="flex justify-between">
          <FaCube />
          <RxHamburgerMenu onClick={() => setisOpen(!isOpen)} />
        </div>
        <ul
          className={`transition-all duration-300 bg-gray-200 flex flex-col justify-between items-center gap-4 ${
            isOpen ? "py-4 max-h-60 opacity-100" : "py-0 opacity-0 max-h-0"
          }`}
        >
          {links.map((item) => (
            <li>
              <Link className="hover:text-red-900 text-md" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default VicNavbar
