import { GiHamburgerMenu } from "react-icons/gi"
import Image from "next/image"
import { useState } from "react"
import { NavItemData } from "./Navbar1"

const NavItens: NavItemData[] = [
    {
        text: "OUR SERVICES",
        url: "#",
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


const NavBar = ({text, url} : NavItemData) => {
    return (
        <nav className="sticky top-0 w-full z-10">
            <div className="hidden lg:flex bg-white relative items-center justify-between">
                <Image className="w-36 ml-32 cursor-pointer"
                    src="https://lever-client-logos.s3.us-west-2.amazonaws.com/7f79646a-e11b-4235-a63b-8b22e5034eac-1626955700749.png"
                    alt="logo"
                    width={1080}
                    height={720}
                />
                <ul className="flex gap-8 text-sm font-semibold mr-24">
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

            <div>

            </div>
        </nav>
    )
}



export default NavBar