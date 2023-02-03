import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavItemData = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "Our Services",
    url: "#",
  },
  {
    text: "About Us",
    url: "#",
  },
  {
    text: "Contact Us",
    url: "#",
  },
  {
    text: "Multi-Page",
    url: "#",
  },
]

interface NavItemProps {
  text: string;
  url: string;
}

const NavItemMobile = ({ text, url }: NavItemProps) => {
  return (
    <li
      className="w-full text-gray-800 border-b border-gray-200 hover:text-primary-500 transition-colors duration-300 ease-in"
    >
      <a href={url} className="block text-center w-full py-4">{text}</a>
    </li>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((previous) => (!previous));
  }

  return (
    <nav className="relative flex justify-between items-center h-20 w-full px-6">
      <a href="#">
        <h2
          className="text-2xl text-white uppercase font-extrabold"
        >
          Finance Business
        </h2>
      </a>
      <button
        className="bg-white px-2 py-2 rounded lg:hidden"
        onClick={toggleNavbar}
      >
        <GiHamburgerMenu
          className="text-primary-500 w-5 h-5"
        />
      </button>
      {open && (
        <ul 
          className="absolute flex flex-col top-20 left-0 w-full px-4 bg-white lg:hidden"
        >
          {NavItemData.map((data) => {
            return (
              <NavItemMobile 
                key={data.url + data.text}
                text={data.text}
                url={data.url}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;                              