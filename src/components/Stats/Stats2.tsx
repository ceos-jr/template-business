import StatisticCardMx30 from "./StatsCard2"
import { useEffect, useState, useRef } from "react"
import { StatisticsCardMx30Props } from "./StatsCard2"
const statistics: StatisticsCardMx30Props[] = [
  {
    number: 945,
    name: "Jobs",
    description: "hey",
    speed: 9,
    visible: false,
    className: "",
    delay: "500ms",
  },
  {
    number: 946,
    name: "Hours Saved",
    description: "alo",
    speed: 10,
    visible: false,
    className: "",
    delay: "750ms",
  },
  {
    number: 958,
    name: "Useful thing",
    description: "hi",
    speed: 11,
    visible: false,
    className: "",
    delay: "1000ms",
  },
  {
    number: 965,
    name: "Change",
    description: "hello",
    speed: 12,
    visible: false,
    className: "",
    delay: "1250ms",
  },
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
      if (entry.intersectionRatio > 0) {
        setIsVisible(entry.isIntersecting)
        if (myRef.current) observer.unobserve(myRef.current)
      }
      /* Acima so ta fazendo o seguinte: Se aparece um pouco da tela, o set is visible ta on. 
    Dai, como ele ta on, ele foi observado, e dps de observar, ele trava e n observa mais.*/
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
        <div
          className={`grid grid-cols-1 gap-10 text-white md:grid-cols-2 md:grid-rows-2 font-bold`}
        >
          {statistics.map((mx30, index) => (
            <StatisticCardMx30
              key={mx30.name}
              number={mx30.number}
              name={mx30.name}
              description={mx30.description}
              speed={mx30.speed}
              visible={isVisible}
              delay={mx30.delay}
              className={`
                ${
                  isVisible
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-x-20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSectionMx30
