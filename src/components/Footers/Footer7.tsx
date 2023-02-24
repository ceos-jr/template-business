import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"
import JuliaMediaLinkDark from "./JuliaMediaLinkDark"

const socialMedia = {
  instagram: "https://www.instagram.com/ceosjr/",
  linkedin:
    "https://www.linkedin.com/company/ceos-jr-empresa-junior-da-computa%C3%A7%C3%A3o-ufc/",
  whatsapp:
    "https://api.whatsapp.com/send?phone=77777777&text=Bem%20vindo%20a%20CEOS",
  facebook: "https://pt-br.facebook.com/",
}

const Footer7 = () => {
  return (
    <footer className="bg-blue-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-8">
      <div className="p-5 ">
        <ul>
          <p className="text-white font-bold drop-shadow-lg shadow-black text-3xl pb-6">
            Contact <span className="text-blue-600 drop-shadow-lg">US</span>
          </p>
          <div className="flex gap-6 pb-5 text-4xl hover:cursor-pointer">
            {socialMedia.instagram && (
              <JuliaMediaLinkDark
                link={socialMedia.instagram}
                Icon={FaInstagram}
              />
            )}
            {socialMedia.linkedin && (
              <JuliaMediaLinkDark
                link={socialMedia.linkedin}
                Icon={FaLinkedin}
              />
            )}
            {socialMedia.facebook && (
              <JuliaMediaLinkDark
                link={socialMedia.facebook}
                Icon={FaFacebookF}
              />
            )}
            {socialMedia.facebook && (
              <JuliaMediaLinkDark
                link={socialMedia.whatsapp}
                Icon={FaWhatsapp}
              />
            )}
          </div>
        </ul>
        <h1 className=" text-neutral-600 ">
          © 2022-2023 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            MeowCompany{" "}
          </span>
        </h1>
      </div>
    </footer>
  )
}

export default Footer7
