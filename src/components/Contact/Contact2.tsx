import { useState } from "react"

function InputValidate(props) {
  const errorStyle = props.error ? "border-rose-500" : "";

  return (
    <label className="grid grid-columns-1 justify-items-center w-3/4 my-3">
      <span className=" text-white w-3/4">{props.name}</span>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className={
          props.error ? 
            "w-3/4 h-6 text-sky-1000 bg-blue-100 p-0.5 rounded-sm active: outline-none border-2 border-rose-500" : 
            "w-3/4 h-6 text-sky-1000 bg-blue-100 p-0.5 rounded-sm active: outline-none"
        }
      ></input>
    </label>
  )
}

function Input(props) {
  const erroInput = (<InputValidate 
    type={props.type} 
    name={props.name}
    value={props.value}
    setValue={props.setValue}
    error={true}
  />);
  const okInput = (<InputValidate 
    type={props.type} 
    name={props.name}
    value={props.value}
    setValue={props.setValue}
    error={false}
  />);

  switch (props.type) {
    case "email":
      if (props.value.search("@") && props.value.search(".")) {
        return okInput;
      } else {
        return erroInput;
      }
      break;
  
    default:
      return okInput;
      break;
  }
}

function handleOnChange(e, setter) {
  setter(e.target.value)
}

const Contact2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [desc, setDesc] = useState("");

  return (
    <section className="container flex bg-blue-300 py-4 rounded-lg justify-center m-5">
      <div className="flex justify-around content-center bg-slate-700 w-3/4 py-5 min-h-50">
        <form className="grid justify-items-center w-5/12">
          <Input name="name" type="text" value={name} setValue={setName} />
          <Input name="email" type="email" value={email} setValue={setEmail} />
          <Input name="number" type="number" value={number} setValue={setNumber} />
          <label className="grid grid-columns-1 justify-items-center w-3/4 my-3">
            <span className=" text-white w-3/4">description</span>
            <textarea
              value={desc}
              className="w-3/4 text-sky-1000 bg-blue-100 p-0.5 rounded-sm resize-none"
              rows={5}
              maxLength={256}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </label>
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
  );
}

export default Contact2
