import StatisticCard, { StatisticsCardProps } from "./StatsCard1"
import Button1 from "../layout/Button1"

export type Statistic = {
  number: number
  name: string
  description?: string
}

const statistics: StatisticsCardProps[] = [
  { number: 945, name: "Jobs", speed: 1 },
  { number: 949, name: "Hours Saved", speed: 1 },
  { number: 958, name: "Useful thing", speed: 1 },
  { number: 965, name: "Change", speed: 1 },
]

const StatisticsSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-2">
        <div className="flex flex-col gap-12 justify-center items-center text-white">
          <p className="w-full font-light uppercase">Lorem Ipsum</p>
          <h1 className="w-full text-4xl font-bold">
            Our solutions for your{" "}
            <span className="text-primary-400">business growth</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            purus tellus, maximus at ornare id, sagittis in ante. Proin
            ultricies est arcu, eget facilisis lacus ultrices sed. Nulla sed
            urna semper, faucibus elit vel, ornare ipsum. Nullam lorem est,
            vulputate sit amet lorem eget, gravida sagittis ex.
          </p>
          <Button1 type="primary">Contact us</Button1>
        </div>
        <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 md:grid-rows-2">
          {statistics.map((statistic) => (
            <StatisticCard key={statistic.name} {...statistic} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
