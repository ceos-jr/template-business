import { useEffect, useState, useRef } from "react"
import { Statistic, StatisticsCardMx30Props } from "./StatsMx30"

const StatisticCardMx30 = ({
  number,
  name,
  description,
}: StatisticsCardMx30Props) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-6 font-bold rounded-xl backdrop-blur-md bg-zinc-800">
      <div className="text-4xl font-bold text-violet-800">{number}</div>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default StatisticCardMx30
