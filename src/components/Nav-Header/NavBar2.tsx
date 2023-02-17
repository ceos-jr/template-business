import { GiHamburgerMenu } from "react-icons/gi"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import useScrollLock from "../../../hooks/useScrollLock"
import { NavItemData } from "./Navbar1"
import Link from "next/link"

const NavItens: NavItemData[] = [
    {
        text: "OUR SERVICES",
        url: "#services",
    },
    {
        text: "ABOUT US",
        url: "#",
    },
    {
        text: "WORK WITH US",
        url: "#",
    },
    {
        text: "CONTACT US",
        url: "#",
    },

]

const NavBar = () => {
    const [show, setShow] = useState(true)
    const { lockScroll, unlockScroll } = useScrollLock()
    const heightRef = useRef(0)
  
    useEffect(() => {
      const handleScroll = () => {
        const currentHeight = window.scrollY
  
        if (heightRef.current - currentHeight < 0) {
          setShow(false)
        } else {
          setShow(true)
        }
  
        heightRef.current = currentHeight
      }
  
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    })
    const [open, setOpen] = useState(false)

    const toggleNavbar = () => {
        if (!open) {
            lockScroll()
          } else {
            unlockScroll()
          }
          setOpen((previous) => !previous)
        }
    return(

        <nav className='sticky top-0 w-full z-10 [transition:_transform_350ms_ease-out] ${
            show ? "" : "-translate-y-48"}'>
            <div className="hidden mx-auto md:flex bg-white relative items-center justify-between">
                <Link href={"#"}>
                <Image className="w-36 ml-0 cursor-pointer lg:ml-32"
                    src="https://lever-client-logos.s3.us-west-2.amazonaws.com/7f79646a-e11b-4235-a63b-8b22e5034eac-1626955700749.png"
                    alt="logo"
                    width={1080}
                    height={720}
                />
                </Link>
                <ul className="flex gap-8 text-sm font-semibold md:mr-0 md:gap-0 lg:mr-12 xl:mr-36">
                    {NavItens.map((NavItens, index) => (
                        <a key={index} href={NavItens.url} className="relative px-6 py-7 
                        before:absolute 
                        before:w-0 before:h-1 
                        before:bottom-0 before:left-0
                        before:bg-gray-700 
                        before:[transition:300ms]
                        hover:before:w-full"> {NavItens.text}</a>
                    ))
                    }
                </ul>
            </div>
                    
            <nav className="fixed w-full justify-between bg-white md:hidden">
                <Link href={"#"}>
                    <Image className="w-32 ml-0 cursor-pointer lg:ml-32"
                        src="https://lever-client-logos.s3.us-west-2.amazonaws.com/7f79646a-e11b-4235-a63b-8b22e5034eac-1626955700749.png"
                        alt="logo"
                        width={1080}
                        height={720}
                />
                </Link>
                <button className="">
                    
                </button>
                
            </nav>
        </nav>
    )
}
    


export default NavBar