import CardJuia from "./StatsCardJuia"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import React from "react"

export type StatsType = {
  counter: number
  text: string
}

const stats: StatsType[] = [
  { counter: 999, text: "Services requested" },
  { counter: 999, text: "Happy cats out there" },
  { counter: 0, text: "Complaints*" },
]

const StatsSectionJuia = () => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      threshold: 0.5,
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    }, opts)
    if (myRef.current) observer.observe(myRef.current)

    return () => {
      if (myRef.current) observer.unobserve(myRef.current)
    }
  }, [])

  return (
    <section ref={myRef} className="w-full relative bg-blue-200">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/763/763755.png"
          id="supergato"
          alt="gatito"
          width={100}
          height={100}
          className={`transition-all ease-in-out duration-1000 ${
            isVisible
              ? "opacity-100 transform-none animate-bounce"
              : "opacity-0 -translate-y-30"
          }`}
        />
        {stats.map((statistic) => (
          <CardJuia key={statistic.counter} {...statistic} />
        ))}

        <span className="absolute bottom-0 left-0 p-5 text-sm italic text-gray-600 ">
          * They can't talk
        </span>
      </div>
    </section>
  )
}

export default StatsSectionJuia
