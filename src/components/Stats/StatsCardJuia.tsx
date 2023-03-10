import React from 'react'
import { StatsType } from "./Statsjuia"

type CardProps = StatsType


const CardJuia = ({ counter, text}: CardProps) => {
    return(
        <div className = "flex flex-col gap-4 items-center p-4 font-bold rounded-lg shadow-xl min-h-64  bg-yellow-200" >
            <h1 className="text-5xl text-pink-600">{counter}</h1>
            <h1 className="text-gray-500">{text}</h1>
        </div>
    )
}
export default CardJuia