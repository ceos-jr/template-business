import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"
import Image from "next/image"
import { BsLinkedin } from "react-icons/bs"

interface SlideProps {
  name: string
  img: string
  phrase: string
  social: string
}

const List: Slideprops[] = [
  {
    name: "Diogenes",
    img: "https://philosophy.redzambala.com/sites/default/files/field/image/diogenes-4.jpg",
    phrase: "Diogenes of Sinope",
    color: "bg-red-400",
  },
  {
    name: "Plato",
    img: "https://cdn.britannica.com/88/149188-050-DC34842F/Plato-portrait-bust-original-Capitoline-Museums-Rome.jpg",
    phrase: "Plato of Athens",
    color: "bg-blue-400",
  },
  {
    name: "Aristotle",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
    phrase: "Aristotle of Stagira",
    color: "bg-green-400",
  },
  {
    name: "Immmanuel Kant",
    img:"https://www.art-prints-on-demand.com/kunst/unbekannter_kuenstler/portraet_von_immanuel_kant_172.jpg",
    phrase: "Immanuel Kant",  
    color: "bg-yellow-400",
  },
  {
    name: "Heidegger",
    img: "https://static.todamateria.com.br/upload/ma/rt/martinheideggercc.jpg",
    phrase: "Martin Heidegger",
    color: "bg-purple-400",
  },
  {
    name: "Sartre",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Sartre_1967_crop.jpg",
    phrase: "Jean-Paul Sartre",
    color: "bg-pink-400",
  },  
  {
    name: "Nietzsche",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/1200px-Nietzsche187a.jpg",
    phrase: "Friedrich Nietzsche",
    color: "bg-indigo-400",
  },

]

const Members0 = () => {
  return (
    <section className="h-1/2 w-full container sm:w-1/2 xl:w-2/5">
      <h1 className="m-10 font-bold text-xl font-sans ">Nosso time é composto pelos lendários filósofos:</h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="items-center justify-center "
      >
        {List.map((item) => (
          <SwiperSlide
            key={item.name}
            className= {`${item.color} w-1/2 h-1/2 rounded-xl items-center`}
          >
            <Image
              src={item.img}
              alt={`${item.name} image`}
              height={100}
              width={100}
              priority
              className="rounded-full container mt-4 2xl:w-2/4"
            />

            <div className="flex container relative">
              <h1 className="font-sans m-4 lg:text-xl xl:text-2xl 2xl:text-4xl">{item.phrase}</h1>
              <BsLinkedin className="h-8 w-8 absolute right-8 bottom-4 lg:h-12 lg:w-12 2xl:h-20 2xl:w-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Members0
