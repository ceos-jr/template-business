import {
  FaCube,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"
import MediaLinkDark from "./MediaLinkDark"

// To generate whatsapp link https://postcron.com/en/blog/landings/whatsapp-link-generator/
const socialMedia = {
  instagram: "https://www.instagram.com/ceosjr/",
  linkedin:
    "https://www.linkedin.com/company/ceos-jr-empresa-junior-da-computa%C3%A7%C3%A3o-ufc/",
  whatsapp:
    "https://api.whatsapp.com/send?phone=77777777&text=Bem%20vindo%20a%20CEOS",
  facebook: "https://pt-br.facebook.com/",
}

const Footer1 = () => {
  return (
    <footer className="py-16 px-8 w-full bg-gray-900 md:py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 text-white md:grid-cols-3">
          <div>
            <FaCube className="mb-4" size="4rem" />
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Links</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-primary-400"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-primary-400"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-primary-400"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-primary-400"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <ul className="flex flex-col gap-2">
              <li>(85) 7777 7777</li>
              <li>ceosadmin@gmail.com</li>
              <li>Campus do Pici - UFC, Fortaleza, CE</li>
            </ul>
          </div>
        </div>
        <div className="my-4 h-0.5 bg-gray-400 rounded-full"></div>
        <div className="flex gap-8 justify-between text-white">
          <h3>Copyright © 2023 Financial Business</h3>
          <div className="flex gap-2 items-center text-3xl">
            {socialMedia.instagram && (
              <MediaLinkDark link={socialMedia.instagram} Icon={FaInstagram} />
            )}
            {socialMedia.whatsapp && (
              <MediaLinkDark link={socialMedia.whatsapp} Icon={FaWhatsapp} />
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
    </footer>
  )
}

export default Footer1
