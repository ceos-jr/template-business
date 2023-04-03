import React, {ChangeEvent, useState} from "react"



//uma constante com propriedades  DO FORMULÁRIO "vazio pq o formulario começa vazio"
const formProps ={
  name: "",
  age: "",
  tel: "",
  email: "",
}; 


//constante formData recebe o valor inicial formProps e esse valor será alterado pela função setFormData
const [formData, setFormData] = useState(formProps);



const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData);
};

const formulario = () => {
return (
  <section className="container flex flex-col gap-8 justify-center items-center mx-auto h-screen">
    <h1 className="text-4xl text-primary">Said Jr assassino de aluguel</h1>
    <p className="text-secondary">lutador de mma</p>
    <form
      className="flex flex-col space-y-8 w-1/2"
      onSubmit={(e) => registerUser(e)}
    >
      <input
        type="text"
        placeholder="Nome"
        className="form-input"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Idade"
        className="form-input"
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Telefone para contato"
        className="form-input"
        onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
      />
      <input
        type="email"
        placeholder="E-mail"
        className="form-input"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="submit"
        value="Enviar"
        className="py-4 bg-red-500 from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-r focus:outline-zinc-900 active:py-6z"
      />
    </form>
  </section>
);
};
export default formulario;


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

/*arrow function que vai mudar um campo e manter todos os outros iguais
const changeFormData = () => {
  setFormData()
} */
