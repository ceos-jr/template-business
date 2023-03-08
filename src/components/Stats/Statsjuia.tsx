import CardJuia from "./StatsCardJuia"
import Image from "next/image"
import { useEffect } from 'react';

export type StatsType = {
  counter: number
  text: string
}

const stats: StatsType[] = [
  { counter: 999, text: "Services requested" },
  { counter: 999, text: "Happy cats out there" },
  { counter: 999, text: "Happy cats out there" },
]


const StatsSectionJuia = () => {
  return (
    <section className="w-full relative bg-blue-200">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/763/763755.png"
          id="image"
          alt="gatito"
          width={100}
          height={100}
          className="top-0"
        />
        {stats.map((statistic) => (
            <CardJuia key={statistic.counter} {...statistic} />
          ))}
      </div>
      
    </section>
  )
}

export default StatsSectionJuia
