import CardJuia from "./StatsCardJuia"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import React from "react"

export type StatsType = {
  nome: string
  counter: number
  text: string
  speed: number
  visible: boolean
  className: string
  delay: string
}

const stats: StatsType[] = [
  { nome: "services", counter: 999, text: "Services requested", speed: 10, visible: false, className: "", delay: "500ms" },
  { nome: "cats",counter: 999, text: "Happy cats out there", speed: 10, visible: false, className: "", delay: "500ms" },
  { nome: "complaint", counter: 0, text: "Complaints*", speed: 10, visible: false, className: "", delay: "500ms" },
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
      if (entry.intersectionRatio > 0) {
        setIsVisible(entry.isIntersecting)
        if (myRef.current) observer.unobserve(myRef.current)
      }
    }, opts)
    if (myRef.current) observer.observe(myRef.current)

    return () => {
      if (myRef.current) observer.unobserve(myRef.current)
    }
  }, [])

  return (
    <section ref={myRef} className="w-full relative bg-blue-200">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-4 relative w-full h-full">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/763/763755.png"
          alt="gatito"
          width={100}
          height={100}
          className={`transition-all ease-in-out duration-1000 justify-center ${
            isVisible
              ? "opacity-100 transform-none animate-bounce"
              : "opacity-0 -translate-y-30"
          }`}
        />
        {stats.map((juia, index) => (
          <CardJuia 
          key={juia.nome}
          counter={juia.counter}
          text={juia.text}
          nome={juia.nome}
          speed={juia.speed}
          visible={isVisible}
          delay={juia.delay}
          className={`
          ${
            isVisible
              ? "opacity-100 transform-none"
              : "opacity-0 translate-x-20"
          }`}
          />
        ))}

        <span className="absolute bottom-0 left-0 p-5 text-sm italic text-gray-600 ">
          * They cannot talk
        </span>
      </div>
    </section>
  )
}

export default StatsSectionJuia
