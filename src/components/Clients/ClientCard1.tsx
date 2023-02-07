import { Client1Type } from "./Clients1"

type ClientCard1Props = Client1Type

const ClientCard1 = ({ name, position, testament }: ClientCard1Props) => {
  return (
    <div className="p-4 text-center bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      <h4 className="font-bold text-primary-400">{position}</h4>
      <p>{testament}</p>
    </div>
  )
}

export default ClientCard1
