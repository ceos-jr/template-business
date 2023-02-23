import styles from "./NavbarJuia.module.css"
import React, { useState } from "react"
import { FaCat, FaBars, FaTimes } from "react-icons/fa"

const NavbarJuia = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <FaCat />
        </a>
        <div className="hamburguer" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={closeMenu}>
              Our services
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About us
            </a>
          </li>
          <li className="nav-item">
            <a href="#footer" onClick={closeMenu}>
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default NavbarJuia
