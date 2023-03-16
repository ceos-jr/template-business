import { useEffect, useState, useRef } from "react"
export type StatisticsCardMx30Props = {
  number: number
  name: string
  description: string
  speed: number
  visible: boolean
  className: string
  delay: string
}
const StatisticCardMx30 = ({
  number,
  name,
  description,
  speed,
  visible,
  className,
  delay,
}: StatisticsCardMx30Props) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (visible === true) {
      interval = setInterval(() => {
        if (value >= number) {
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
      className={`flex flex-col gap-3 justify-center items-center p-6 font-bold rounded-xl backdrop-blur-md bg-zinc-800 transition-all ease-in-out duration-1000 ${className}`}
      style={{ transitionDelay: delay }}
    >
      <div className="text-4xl font-bold text-violet-800">{value}</div>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default StatisticCardMx30
