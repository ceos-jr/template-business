import Button from "../layout/Button1"
import { type } from "../Services/Sevices4"
import { pages } from "../../../node_modules/next/dist/esm/server/render"
function Input(props) {
  return (
    <label className="grid grid-columns-1 justify-items-center w-3/4 my-3">
      <span className=" text-white w-3/4">{props.name}</span>
      <input
        type={props.type}
        name={props.name}
        className="w-3/4 h-6 text-sky-1000 bg-blue-100 p-0.5 rounded-sm"
      ></input>
    </label>
  )
}

const Contact2 = () => {
  return (
    <section className="container flex bg-blue-300 py-4 rounded-lg justify-center m-5">
      <div className="flex justify-around content-center bg-slate-700 w-3/4 py-5 min-h-50">
        <form className="grid justify-items-center w-5/12">
          <Input name="name" type="text" />
          <Input name="email" type="email" />
          <Input name="number" type="number" />
          <Input name="descripition" type="text" />
          <button type="submit">Submit</button>
        </form>
        <div className="grid justify-items-center content-center w-5/12 min-h-70">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum, metus vel fermentum mattis, est ex placerat erat, et
            mattis nunc nisl nec libero. Morbi eget bibendum urna. Proin
            lobortis nisl non varius sollicitudin. Donec dui felis, varius a
            nibh vel, vestibulum laoreet mauris. Duis pharetra magna mollis
            felis pulvinar, vel consectetur felis molestie. Sed eget laoreet
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact2
