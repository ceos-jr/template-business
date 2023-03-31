import { Client2Type } from "./Clients2"
type ClientCard2Props = Client2Type
const ClientCard2 = ({ name, role, testimony }: ClientCard2Props) => {
  return (
    <div className="p-10 pb-10 text-center bg-zinc-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      <h4 className="font-bold text-violet-800">{role}</h4>
      <p>{testimony}</p>
    </div>
  )
}
export default ClientCard2
