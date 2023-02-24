import Link from "next/link"
import React, { useState, useEffect } from "react"
import { FaCat, FaBars, FaTimes } from "react-icons/fa"

const NavbarJuia = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("transparent")
  const [textColor, setTextColor] = useState("white")

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#BFDBFE")
        setTextColor("#3b82f6")
      } else {
        setColor("transparent")
        setTextColor("#ffffff")
      }
    }
    window.addEventListener("scroll", changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <FaCat className="m-auto" style={{ color: `${textColor}` }} />
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-4xl drop-shadow-lg shadow-black"
          >
            Meow
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#services">Our Services</Link>
          </li>
          <li className="p-4">
            <Link href="/seila">About us</Link>
          </li>
          <li className="p-4">
            <Link href="/#footer">Contact us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <FaTimes
              size={30}
              style={{ color: `${textColor}` }}
              className="drop-shadow-lg shadow-black hover:cursor-pointer"
            />
          ) : (
            <FaBars
              size={30}
              style={{ color: `${textColor}` }}
              className="drop-shadow-lg shadow-black hover:cursor-pointer"
            />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-blue-200 ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:font-extrabold"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClicfont-extrabold
              className="p-4 text-4xl hover:font-extrabold"
            >
              <Link href="/#services">Our Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:font-extrabold "
            >
              <Link href="/seila">About us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:font-extrabold "
            >
              <Link href="/#footer">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarJuia
