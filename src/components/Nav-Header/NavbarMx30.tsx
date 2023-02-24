import { GiBookStorm } from "react-icons/gi"
function Navbar() {
  return (
    <>
      <nav>
        <div className="container flex flex-col gap-8 justify-between items-center md:flex-row">
          <GiBookStorm className="text-6xl text-violet-700" />
        </div>
      </nav>
    </>
  )
}
export default Navbar
