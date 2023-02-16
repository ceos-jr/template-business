import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
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
    <footer className="p-16 w-full bg-gray-900 divide-y md:py-8">
      <div className="flex flex-col gap-5 justify-evenly py-10 md:flex-row md:py-5">
        <div className="flex flex-col gap-4">
          <img
            className="w-36"
            src="https://www.oowlish.com/wp-content/uploads/2021/03/oowlish-logo-white.svg"
          />
          <p className="w-64 text-xs font-extralight text-white">
            {" "}
            Because our mission is to give every company, no matter the size,
            the opportunity to innovate and help build a better future.{" "}
          </p>
        </div>
        <div className="flex gap-10 text-sm font-normal text-white">
          <a
            className="transition-colors cursor-pointer duration-400 hover:text-primary-600"
            href="#"
          >
            {" "}
            OUR SERVICES{" "}
          </a>
          <a
            className="transition-colors cursor-pointer duration-400 hover:text-primary-600"
            href="#"
          >
            {" "}
            ABOUT US{" "}
          </a>
          <a
            className="transition-colors cursor-pointer duration-400 hover:text-primary-600"
            href="#"
          >
            {" "}
            WORK WITH US{" "}
          </a>
          <a
            className="transition-colors cursor-pointer duration-400 hover:text-primary-600"
            href="#"
          >
            {" "}
            CONTACT US{" "}
          </a>
        </div>

        <div className="flex-column text-start align-end md:text-end">
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
      <p className="py-4 text-xs text-center text-white">
        {" "}
        Todos os direitos reservados © Ceos Jr.{" "}
      </p>
    </footer>
  )
}
