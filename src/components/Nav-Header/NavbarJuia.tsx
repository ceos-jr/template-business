import React, {useState} from 'react'
import {FaCat, FaBars, FaTimes} from 'react-icons/fa'

const NavbarJuia = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="max-w-full bg-white"> {/*header*/}
            <nav>
                <FaCat className="text-3xl"/>
                <div className="onClick={handleClick}">
                    {click ?  (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="m-6">
                        <a href="/" onClick={closeMenu}>Home</a>
                    </li>
                    <li className="m-6">
                        <a href="#services" onClick={closeMenu}>Our services</a>
                    </li>
                    <li className="m-6">
                        <a href="#about" onClick={closeMenu}>About us</a>
                    </li>
                    <li className="m-6">
                        <a href="#footer" onClick={closeMenu}>Contact us</a>

                    </li>

                </ul>
            </nav>
            
        </div>
    )
}

export default NavbarJuia