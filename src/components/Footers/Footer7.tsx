import {
  FaCube,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"
import MediaLinkDark from "./MediaLinkDark"

const socialMedia = {
  instagram: "https://www.instagram.com/ceosjr/",
  linkedin:
    "https://www.linkedin.com/company/ceos-jr-empresa-junior-da-computa%C3%A7%C3%A3o-ufc/",
  whatsapp:
    "https://api.whatsapp.com/send?phone=77777777&text=Bem%20vindo%20a%20CEOS",
  facebook: "https://pt-br.facebook.com/",
}

export default function FooterLucas() {
  return (
    <footer className="py-16 px-16 bg-gray-900 md:py-8 divide-y">
      <div className="flex justify-evenly py-10 md:py-5 flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-4">
          <img
            className="w-36"
            src="https://www.oowlish.com/wp-content/uploads/2021/03/oowlish-logo-white.svg"
          />
          <p className="text-white text-xs font-extralight w-64">
            {" "}
            Because our mission is to give every company, no matter the size,
            the opportunity to innovate and help build a better future.{" "}
          </p>
        </div>
        <div className="flex gap-10 text-white text-sm font-normal">
          <a
            className="transition-colors cursor-pointer hover:text-primary-600 duration-400"
            href="#"
          >
            {" "}
            OUR SERVICES{" "}
          </a>
          <a
            className="transition-colors cursor-pointer hover:text-primary-600 duration-400"
            href="#"
          >
            {" "}
            ABOUT US{" "}
          </a>
          <a
            className="transition-colors cursor-pointer hover:text-primary-600 duration-400"
            href="#"
          >
            {" "}
            WORK WITH US{" "}
          </a>
          <a
            className="transition-colors cursor-pointer hover:text-primary-600 duration-400"
            href="#"
          >
            {" "}
            CONTACT US{" "}
          </a>
        </div>

        <div className="flex-column text-start align-end md:text-end ">
          <a className="text-sm text-white"> FOLLOW US </a>
          <div className="flex gap-2 items-center text-3xl">
            {socialMedia.instagram && (
              <MediaLinkDark link={socialMedia.instagram} Icon={FaInstagram} />
            )}
            {socialMedia.linkedin && (
              <MediaLinkDark link={socialMedia.linkedin} Icon={FaLinkedin} />
            )}
            {socialMedia.facebook && (
              <MediaLinkDark link={socialMedia.facebook} Icon={FaFacebookF} />
            )}
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs text-white">
        {" "}
        Todos os direitos reservados © Ceos Jr.{" "}
      </p>
    </footer>
  )
}
