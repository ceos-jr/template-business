import React, {ChangeEvent, useState} from "react"



//uma constante com propriedades título e corpo DO FORMULÁRIO "vazio pq o formulario começa vazio"
const formProps ={
  title: "",
  body: "",
}; 


//constante formData recebe o valor inicial formProps e esse valor será alterado pela função setFormData
const [formData, setFormData] = useState(formProps);

//arrow function que vai mudar um campo e manter todos os outros iguais
const changeFormData = () => {
  setFormData()
}







/* outra constante que Guarda o estado da variável formProps
const [formData, setFormData] = useState(formProps);
const {title,body} = formData;







/*
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement
  setFormData((prevState) =>({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
};


const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData);

  setFormData(formProps);
};




const formulario = () => {
  return (
    <section className="w-full h-fit justify-center rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-400  ">
      <div className=" container mx-auto flex flex-col items-center justify-center p-8 py-16 bg-white h-3/5  rounded-2xl">
        <h1 className="text-center text-align"> 
        "sxdhaihjisjidjjdsljdojsdjhgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
        </h1>
        <form onSubmit={onSubmit}>
          <input type ="text" id="title" value={title} onChange={onChange}></input>
          <input type ="text" id="body" value={body} onChange={onChange} ></input>
          <button onClick={evento} type ="submit">Upload</button>
          <input type ="submit"></input>
        </form>
      </div>
    </section>
  )
}

export default formulario

*/