import styles from "./NavbarJuia.module.css"
import React, { useState } from "react"
import { FaCat, FaBars, FaTimes } from "react-icons/fa"

const NavbarJuia = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/">
          <FaCat size="4 rem" />
        </a>
        <div className={styles.hamburguer} onClick={handleClick}>
          {click ? <FaTimes size={30} style={{color: "#f9d71c"}} /> : (<FaBars size={30} style={{color: "#f9d71c"}} />)}
        </div>
        <ul className={'navmenu ${click ? "active" : ""}'}>
          <li className={styles.navitem}>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="text-white">
            <a href="#services" onClick={closeMenu}>
              Our services
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="#about" onClick={closeMenu}>
              About us
            </a>
          </li>
          <li className={styles.navitem}>
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
