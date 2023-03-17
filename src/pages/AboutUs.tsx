import Image from "next/image"
import NavBar from "@/components/Nav-Header/NavBar4"

const AboutUs = () => {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div className="">
        <Image
          alt="Sobre"
          src="/images/about/AboutImagem.jpg"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default AboutUs
