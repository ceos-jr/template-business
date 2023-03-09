import React from 'react'
import { StatsType } from "./Statsjuia"
import { useEffect } from 'react';

type CardProps = StatsType


const CardJuia = ({ counter, text}: CardProps) => {
    return(
        <div className = "flex flex-col gap-4 items-center p-4 font-bold rounded-lg shadow-xl min-h-64 bg-lime-300" >
            <h1 className="text-5xl text-transparent transition-colors">{counter}</h1>
            <h1>{text}</h1>
        </div>
    )
}
export default CardJuia