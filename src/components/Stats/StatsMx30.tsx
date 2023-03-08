import StatisticCardMx30 from "./StatsCardMx30"
import { useEffect, useState, useRef } from "react"
export type Statistic = {
  number: number
  name: string
  description: string
}
export type StatisticsCardMx30Props = Statistic
const statistics: StatisticsCardMx30Props[] = [
  { number: 945, name: "Jobs", description: "hey" },
  { number: 949, name: "Hours Saved", description: "alo" },
  { number: 958, name: "Useful thing", description: "hi" },
  { number: 965, name: "Change", description: "hello" },
]

const StatisticsSectionMx30 = () => {
  //Falta esse tipo aqui pra deixar o typescript feliz
  const myRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    //Dps le na internet sobre essas opcoes do Intersection Que são muito uteis
    const opts: IntersectionObserverInit = {
      threshold: 0.5,
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    }, opts)
    // O que tava faltando era esse if aqui pra garantir que o negocio existe
    if (myRef.current) observer.observe(myRef.current)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (myRef.current) observer.unobserve(myRef.current)
    }
  }, [])

  /*
   * O que ta acontecendo no componente é que toda vez que a secao ficar na tela ele
   * vai colocar o isVisible pra true e quando isso acontecer a gente coloca a opacidade pra 100
   * e tira o que a gente deslocou no translate-y com o transform-none
   * pra n deixar duro a gente coloca um transition-all duration-1000 e ease-in-out
   */
  return (
    <section ref={myRef} className="w-full bg-zinc-900">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-2">
        <div className="flex flex-col gap-12 justify-center items-center text-gray-400">
          <p className="w-full font-light uppercase">Lorem Ipsum</p>
          <h1
            className={`w-full text-4xl font-bold transition-all ease-in-out duration-1000 ${
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 -translate-y-20"
            }`}
          >
            Our solutions for your{" "}
            <span className="text-violet-800">business growth</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            purus tellus, maximus at ornare id, sagittis in ante. Proin
            ultricies est arcu, eget facilisis lacus ultrices sed. Nulla sed
            urna semper, faucibus elit vel, ornare ipsum. Nullam lorem est,
            vulputate sit amet lorem eget, gravida sagittis ex.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 text-white md:grid-cols-2 md:grid-rows-2">
          {statistics.map((statistic) => (
            <StatisticCardMx30 key={statistic.name} {...statistic} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSectionMx30
