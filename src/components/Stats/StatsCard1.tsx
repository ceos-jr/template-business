import { useEffect, useState } from "react";
import { Statistic } from "./Stats1";

export interface StatisticsCardProps extends Statistic {
  speed: number;
}
const StatisticCard = ({ number, name, speed }: StatisticsCardProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      if (value >= number) {
        clearInterval(interval);
        return;
      }
      setValue(value + 5);
    }, 10 / speed);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-8 font-bold rounded-lg backdrop-blur-md bg-white/10">
      <h1 className="text-5xl text-primary-500">{value}</h1>
      <h2 className="text-xl">{name}</h2>
    </div>
  );
};

export default StatisticCard;
