import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"
import { GiBookStorm } from "react-icons/gi"
import MX30MediaLinkDark from "./MX30MediaLinkDark"

const socialMedia = {
  instagram: "https://www.instagram.com/ceosjr/",
  linkedin:
    "https://www.linkedin.com/company/ceos-jr-empresa-junior-da-computa%C3%A7%C3%A3o-ufc/",
  whatsapp:
    "https://api.whatsapp.com/send?phone=77777777&text=Bem%20vindo%20a%20CEOS",
  facebook: "https://pt-br.facebook.com/",
}

const LinkText = ({ link, text }: { link: string; text: string }) => {
  return (
    <li>
      <a
        href={link}
        className="text-white transition-colors duration-300  hover:text-violet-500"
      >
        {text}
      </a>
    </li>
  )
}

const Footer6 = () => {
  return (
    <footer className="py-16 px-8 bg-zinc-900 md:py-8">
      <div className="flex justify-between flex-col gap-8 md:flex-row items-center container">
        <GiBookStorm className="text-6xl text-violet-700" />
        <div className="flex text-4xl">
          {socialMedia.instagram && (
            <MX30MediaLinkDark
              link={socialMedia.instagram}
              Icon={FaInstagram}
            />
          )}
          {socialMedia.whatsapp && (
            <MX30MediaLinkDark link={socialMedia.whatsapp} Icon={FaWhatsapp} />
          )}
          {socialMedia.linkedin && (
            <MX30MediaLinkDark link={socialMedia.linkedin} Icon={FaLinkedin} />
          )}
          {socialMedia.facebook && (
            <MX30MediaLinkDark link={socialMedia.facebook} Icon={FaFacebookF} />
          )}
        </div>
      </div>
      <ul className="py-4 flex flex-col justify-center items-center md:flex-row container gap-8">
        <LinkText link="000" text="Carrers" />
        <LinkText link="351" text="Help Center" />
        <LinkText link="352" text="Terms of Service" />
        <LinkText link="353" text="Privacy" />
      </ul>
    </footer>
  )
}
export default Footer6
