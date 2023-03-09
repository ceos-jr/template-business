import CardJuia from "./StatsCardJuia"
import Image from "next/image"
import { useInView } from 'react-intersection-observer';
import React from 'react'

export type StatsType = {
  counter: number
  text: string
}

const stats: StatsType[] = [
  { counter: 999, text: "Services requested" },
  { counter: 999, text: "Happy cats out there" },
  { counter: 0, text: "Complaints (they don't talk)" },
]

const Animation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
}

const StatsSectionJuia = () => {
  return (
    <React.Fragment>
      <style jsx>{`
        .animacao-horizontal {
          @apply absolute left-0;
          transform: translateX(-100%);
          animation: mover-horizontal 2s ease-out forwards;
        }

        @keyframes mover-horizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

    <section ref={ref} className="w-full relative bg-blue-200">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/763/763755.png"
          id="supergato"
          alt="gatito"
          width={100}
          height={100}
          className="{`transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}"
        />
        {stats.map((statistic) => (
            <CardJuia key={statistic.counter} {...statistic} />
          ))}
      </div>
      
    </section>
    </React.Fragment>
  )
}

export default StatsSectionJuia
