import { useState } from "react"

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const resp = await fetch("http://localhost:4000/criar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative  bg-zinc-900 h-fit w-screen">
      <div className="pt-16 flex items-center pb-8 justify-center xl:pt-28">
        <h1 className="text-white font-sans text-3xl font-bold sm:text-5xl">
          {" "}
          VOU <span className="text-violet-800">VAZAR</span> SEUS{" "}
          <span className="text-violet-800">DADOS 😈</span>{" "}
        </h1>
      </div>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Name"
          className="floating-input peer w-full md:w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-violet-700 focus:bg-white focus:outline-none"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <label htmlFor="name" className="floating-label">
          Name
        </label>

        <input
          type="email"
          placeholder="saidjr@said.com"
          className="floating-input peer w-full md:w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-violet-700 focus:bg-white focus:outline-none"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label htmlFor="email" className="floating-label">
          Email
        </label>
        <input
          type="tel"
          placeholder="+55(85)9107-4044"
          className="floating-input peer w-full md:w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-violet-700 focus:bg-white focus:outline-none"
          onChange={(e) => setData({ ...data, number: e.target.value })}
        />

        <input
          type="text"
          placeholder="Address"
          className="floating-input peer w-full md:w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-violet-700 focus:bg-white focus:outline-none"
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
        <input
          type="submit"
          value="Send"
          className="focus:outline-none mt-5 w-full md:w-40 text-zinc-900 bg-violet-700 focus:bg-violet-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        />
      </form>
    </div>
  )
}

export default Form
