import Image from "next/image"
import NavBar3 from "@/components/Nav-Header/NavBar4"
import Footer2 from "@/components/Footers/Footer2"

const AboutUs = () => {
  return (
    <section>
      <div>
        <NavBar3 />
      </div>
      <div>
        <Image
          className="flex flex-col items-center h-full object-cover min-h-[18.75rem] max-h-[35rem] pb-12"
          alt="Sobre"
          src="/images/about/AboutImagem.jpg"
          width={1920}
          height={100}
        />
      </div>
      <div>
        <h1 className="font-bold pb-4 pl-8 text-4xl text-fuchsia-400">
          Quem Somos
        </h1>
        <p className="pl-8 leading-8 pb-12 px-4 py-8">
          Fundada em 1997, a Ceos é a Empresa Júnior do curso de Ciência da
          Computação da Universidade Federal do Ceará - UFC. Sempre focados na
          excelência e guiados por nosso lema O céu é o limite, desenvolvemos
          soluções inovadoras e personalizadas para o seu problema por meio do
          desenvolvimento de sites institucionais, sistemas personalizados,
          acessorias e outros serviços. Somos a CEOS, uma empresa formada por
          estudantes comprometidos em oferecer soluções inovadoras em tecnologia
          da informação para nossos clientes. Buscamos sempre atualização
          constante em nossas áreas de atuação, e trabalhamos em prol da ética e
          responsabilidade social.
        </p>
      </div>
      <div>
        <p className="font-semibold pb-2 pl-8 text-xl text-sky-600">
          Nossos Valores
        </p>
        <p className="font-bold pb-4 pl-8 text-3xl px-8 text-fuchsia-400">
          Por que confiar na *insira o nome da empresa*
        </p>
      </div>
      <div className="grid pl-8 gap-8 py-8 px-4 md:grid-cols-2">
        <span className="flex flex-col leading-8">
          <p className="pb-4 text-xl text-sky-600 font-semibold">valor1</p>
          <p className="opacity-70">
            O trabalho em equipe um valor essencial para alcançar resultados de
            alta qualidade. Nos acreditamos que a colaboração entre membros de
            diferentes habilidades e perspectivas é fundamental e envolve ouvir
            atentamente as opiniões de todos os envolvidos, respeitar e
            valorizar as ideias dos outros, e assumir responsabilidade
            compartilhada pelos resultados finais.
          </p>
        </span>
        <span className="flex flex-col leading-8">
          <p className="pb-4 text-xl text-sky-600 font-semibold">valor2</p>
          <p className="opacity-70">
            O trabalho em equipe um valor essencial para alcançar resultados de
            alta qualidade. Nos acreditamos que a colaboração entre membros de
            diferentes habilidades e perspectivas é fundamental e envolve ouvir
            atentamente as opiniões de todos os envolvidos, respeitar e
            valorizar as ideias dos outros, e assumir responsabilidade
            compartilhada pelos resultados finais.
          </p>
        </span>
        <span className="flex flex-col leading-8">
          <p className="pb-4 text-xl text-sky-600 font-semibold">valor3</p>
          <p className="opacity-70">
            O trabalho em equipe um valor essencial para alcançar resultados de
            alta qualidade. Nos acreditamos que a colaboração entre membros de
            diferentes habilidades e perspectivas é fundamental e envolve ouvir
            atentamente as opiniões de todos os envolvidos, respeitar e
            valorizar as ideias dos outros, e assumir responsabilidade
            compartilhada pelos resultados finais.
          </p>
        </span>
        <span className="flex flex-col leading-8 pb-8">
          <p className="pb-4 text-xl text-sky-600 font-semibold">valor4</p>
          <p className="opacity-70">
            O trabalho em equipe um valor essencial para alcançar resultados de
            alta qualidade. Nos acreditamos que a colaboração entre membros de
            diferentes habilidades e perspectivas é fundamental e envolve ouvir
            atentamente as opiniões de todos os envolvidos, respeitar e
            valorizar as ideias dos outros, e assumir responsabilidade
            compartilhada pelos resultados finais.
          </p>
        </span>
      </div>
      <Footer2 />
    </section>
  )
}

export default AboutUs
