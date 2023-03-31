import { useState } from "react"

function InputValidate(props) {
  // const errorStyle = props.error ? "border-rose-500" : "";

  return (
    <label className="grid grid-columns-1 justify-items-center w-3/4 my-3">
      <span className=" text-white w-3/4">{props.name}</span>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={"w-3/4 h-6 text-sky-1000 bg-blue-100 p-0.5 rounded-sm active: outline-none"}
        style={props.erroStyle}
      ></input>
    </label>
  )
}

function Input(props) {
  const [erroStyle, setErroStyle] = useState({});


  function onChange(event) {
    const value = event.target.value;

    const error = () => { 
      const emailValidateRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      const numberValidateRegex = new RegExp(/^[0-9()-\s]+$/);

      // console.log(emailValidateRegex.test(value));

      if (props.name === "email") {
        if (
          value.length < 4 ||
          ( 
            emailValidateRegex.test(value) === true &&
            value.length < 35
          ) 
        ) {
          return false;
        } else {
          return true;
        }
      } else if (props.name === "number") {
        if (
          value.length < 1 ||
          ( 
            numberValidateRegex.test(value) === true &&
            value.length < 20
          ) 
        ) {
          return false;
        } else {
          console.log(value);
          return true;
        }
      } else {
        return false;
      }
    };
    
    if(error() === true) {
      // console.log(value, props.name);
      setErroStyle({
        border: "solid red"  
      })
    } else {
      setErroStyle({
        border: "none"
      })
    }

    props.setValue(value);
  }

  return (<InputValidate 
    type={props.type} 
    name={props.name}
    value={props.value}
    setValue={props.setValue}
    erroStyle={erroStyle}
    onChange={onChange}
  />)

}

const Contact2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <section className="flex bg-blue-200 py-4 w-full my-5 justify-center">
      <div className="flex justify-between content-center rounded-lg bg-slate-700 w-3/4 py-5 min-h-50 shadow-lg">
        <form className="grid justify-items-center w-5/12">
          <Input name="name" type="text" value={name} setValue={setName} />
          <Input name="email" type="email" value={email} setValue={setEmail} />
          <Input name="number" type="text" value={number} setValue={setNumber} />
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
          <button type="submit" 
            className="bg-green-500 p-2 px-3 rounded-sm text-white
            hover:bg-white hover:text-green-500 ease-in duration-100"
          >Submit</button>
        </form>
        <div className="grid justify-items-center content-center p-10 min-h-70 w-7/12 fon">
          <p className= "text-lg text-white">
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
