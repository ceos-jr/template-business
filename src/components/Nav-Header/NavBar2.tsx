import Link from "next/link"
import React, { useState, useEffect } from "react"
import { FaCat, FaBars, FaTimes } from "react-icons/fa"

const Navbar2 = () => {
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
      className="fixed top-0 left-0 z-10 w-full duration-300 ease-in"
    >
      <div className="flex justify-between items-center p-4 m-auto text-blue-400 max-w-[1240px]">
        <Link href="/">
          <FaCat className="m-auto" style={{ color: `${textColor}` }} />
          <h1
            style={{ color: `${textColor}` }}
            className="text-4xl font-bold drop-shadow-lg shadow-black"
          >
            Meow
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link
              href="/"
              className="underline decoration-blue-500 decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] hover:decoration-blue-500/50 focus:decoration-[0.5rem] focus:decoration-blue-500/50"
            >
              Home
            </Link>
          </li>

          <li className="p-4">
            <Link
              href="/#services"
              className="underline decoration-blue-500 decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] hover:decoration-blue-500/50 focus:decoration-[0.5rem] focus:decoration-blue-500/50"
            >
              Our Services
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="AboutUs"
              className="underline decoration-blue-500 decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] hover:decoration-blue-500/50 focus:decoration-[0.5rem] focus:decoration-blue-500/50"
            >
              About us
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/#footer"
              className="underline decoration-blue-500 decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] hover:decoration-blue-500/50 focus:decoration-[0.5rem] focus:decoration-blue-500/50"
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block z-10 sm:hidden">
          {nav ? (
            <FaTimes
              size={30}
              style={{ color: `${textColor}` }}
              className="hover:cursor-pointer drop-shadow-lg shadow-black"
            />
          ) : (
            <FaBars
              size={30}
              style={{ color: `${textColor}` }}
              className="hover:cursor-pointer drop-shadow-lg shadow-black"
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
              className="p-4 text-4xl hover:font-extrabold"
            >
              <Link href="/seila">About us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:font-extrabold"
            >
              <Link href="/#footer">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
