import { useState } from "react"
import Image from "next/image"

function InputValidate(props) {
  // const errorStyle = props.error ? "border-rose-500" : "";

  return (
    <label className="grid grid-columns-1 justify-items-center w-3/4 my-3">
      <span className=" text-slate-700 w-3/4">{props.name}</span>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={"w-3/4 h-6 text-slate-600 bg-blue-100 p-0.5 rounded-sm active: outline-none"}
        style={props.erroStyle}
      ></input>
    </label>
  )
}

function handleValidate(value, setErroStyle, name) {
  const error = () => { 
    const emailValidateRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const numberValidateRegex = new RegExp(/^[0-9()-\s]+$/);

    // console.log(emailValidateRegex.test(value));
    if (name === "name") {
      if (value.length < 4) {
        return true;
      } else {
        return false;
      }
    } else if (name === "email") {
      if (
        emailValidateRegex.test(value) === true &&
        value.length < 35
      ) {
        return false;
      } else {
        return true;
      }
    } else if (name === "number") {
      if (
        numberValidateRegex.test(value) === true &&
        value.length < 16
      ) {
        return false;
      } else {
        console.log(value);
        return true;
      }
    } else if (name === "desc") {
      if(value.length < 1) {
        return true;
      } else {
        return false;
      }
    } 
  };
  
  if(error() === true) {
    // console.log(value, name);
    setErroStyle({
      border: "solid red"  
    })
  } else {
    setErroStyle({
      border: "solid green"
    })
  }
}

function Input(props) {
  const [erroStyle, setErroStyle] = useState({});


  function onChange(event) {
    const value = event.target.value;

    handleValidate(value, setErroStyle, props.name);

    props.setvalue(value);
  }

  return (<InputValidate 
    type={props.type} 
    name={props.name}
    value={props.value}
    erroStyle={erroStyle}
    onChange={onChange}
  />)

}

const Contact2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");

  const [descErroStyle, setDescErroStyle] = useState({});

  return (
    <section className="flex bg-blue-200 py-5 w-full my-5 justify-center">
      <div className="flex justify-between content-center rounded-lg bg-white w-7/12 py-5 min-h-50 shadow-lg">
        <form className="grid justify-items-center w-5/12">
          <Input name="name" type="text" value={name} setvalue={setName} />
          <Input name="email" type="email" value={email} setvalue={setEmail} />
          <Input name="number" type="text" value={number} setvalue={setNumber} />
          <label className="grid grid-columns-1 justify-items-center w-3/4 my-3">
            <span className=" text-slate-700 w-3/4">description</span>
            <textarea
              value={desc}
              className="w-3/4 text-slate-700 bg-blue-100 p-0.5 rounded-sm resize-none active: outline-none"
              rows={5}
              maxLength={256}
              style={descErroStyle}
              onChange={(e) => {
                const value = event.target.value;

                handleValidate(value, setDescErroStyle, "desc");
            
                setDesc(value);
              }}
            ></textarea>
          </label>
          <button type="submit" 
            className="bg-green-500 p-1.5 px-2 rounded-full w-4/12  text-white
            text-base font-semibold 
            hover:bg-white hover:text-green-500 ease-in duration-100"
          >Submit</button>
        </form>

        <div className="grid grid-flow-row h-full p-5 min-h-70 w-7/12">
          <div className=" w-full text-2xl text-slate-700">
            <h1 >
              Lorem ipsum dolor sit amet
            </h1>
          </div>  

          <div className="relative w-full h-7/12 md:h-40">
            <Image
              src="images/contact/bg1.svg"
              alt="contact image"
              className="relative object-contain w-1"
              fill
            />
          </div>

          <div className= "flex place-content-endh10 text-lg text-slate-700">
            <p className= "h-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedn dsaadda
              dlsdds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact2
