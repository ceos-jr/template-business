import React from "react"
import { StatsType } from "./Stats4"
import { useEffect, useState, useRef } from "react"

type CardProps = StatsType

const CardJuia = ({
  nome,
  counter,
  text,
  speed,
  visible,
  className,
  delay,
}: CardProps) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (visible === true) {
      interval = setInterval(() => {
        if (value >= counter) {
          clearInterval(interval)
          return
        }
        setValue(value + 5)
      }, 100 / speed)
    }

    return () => {
      clearInterval(interval)
    }
  }, [visible, value])

  return (
    <div
      className={`flex flex-col gap-4 items-center p-4 font-bold rounded-lg shadow-xl min-h-64  bg-yellow-200 transition-all ease-in-out duration-1000 ${className}`}
      style={{ transitionDelay: delay }}
    >
      <h1 className="text-5xl text-pink-600">{value}</h1>
      <h1 className="text-gray-500">{text}</h1>
    </div>
  )
}
export default CardJuia
