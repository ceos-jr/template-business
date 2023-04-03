//Importando ícones da biblioteca react-icons (font awesome)
import {
  FaCube,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"

//importando o arquivo que estiliza o hover
import VicMediaLinkDark from "./VicMediaLinkDark"

// To generate whatsapp link https://postcron.com/en/blog/landings/whatsapp-link-generator/

//criando uma constante que atribui links a cada um dos nomes dos ícones, que posteriormente serão renderizados junto com o medialinkdark
const socialMedia = {
  instagram: "https://www.instagram.com/ceosjr/",
  linkedin:
    "https://www.linkedin.com/company/ceos-jr-empresa-junior-da-computa%C3%A7%C3%A3o-ufc/",
  whatsapp:
    "https://api.whatsapp.com/send?phone=77777777&text=Bem%20vindo%20a%20CEOS",
  facebook: "https://pt-br.facebook.com/",
}

//criando a constante que faz o footer propriamente
const FooterVic = () => {
  return (
    <footer className="py-16 px-8 w-full md:py-8 bg-slate-200">
//mx-auto centraliza o container
      <div className="container mx-auto">
        // criando colunas dentro do container com espaço 8 entre elas , add margem de baixo de 8,a partir de 768 px, 4 colunas sao criadas
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4 text-sky-900">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-400">Product</h2>
            //alinha as colunas verticalmente conforme a resolução da tela. cria uma lista nao ordenada
            <ul className="flex flex-col gap-4">
              <li>
                <a
                //transition(propriedade) pra especificar que propriedade deve mudar
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Start a Trial
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Watch Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-400">Links</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="transition-colors cursor-pointer hover:text-rose-900"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-400">Contact</h2>
            <ul className="flex flex-col gap-4">
              <li>(85) 7777 7777</li>
              <li>ceosadmin@gmail.com</li>
              <li>Campus do Pici - UFC, Fortaleza, CE</li>
            </ul>
          </div>
          <div>
            <img src="/images/buildyour.jpg" height="1000" width="1000"></img>
          </div>
        </div>
        <div className="my-4 h-0.5 bg-gray-400 rounded-full"></div>
        //justify-between dispôe os items do container igualmente distanciados
        <div className="flex gap-8 justify-between text-rose-900">
          <h3>Copyright © 2023 Financial Business</h3>
          <div className="flex gap-2 items-center text-3xl">
            {socialMedia.instagram && (
              //auto explicativo
              <VicMediaLinkDark
                link={socialMedia.instagram}
                Icon={FaInstagram}
              />
            )}
            {socialMedia.whatsapp && (
              <VicMediaLinkDark link={socialMedia.whatsapp} Icon={FaWhatsapp} />
            )}
            {socialMedia.linkedin && (
              <VicMediaLinkDark link={socialMedia.linkedin} Icon={FaLinkedin} />
            )}
            {socialMedia.facebook && (
              <VicMediaLinkDark
                link={socialMedia.facebook}
                Icon={FaFacebookF}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterVic
