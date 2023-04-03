import { useState } from "react"
import Image from "next/image"

const Contact2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [desc, setDesc] = useState("");

    const [descErroStyle, setDescErroStyle] = useState({});
    return(
        <div className = "relative h-fit w-screen">
            <Image
                src = "https://oowlish.com/wp-content/uploads/2021/03/Grupo-de-mascara-4.png"
                alt = "img"
                className="-z-10 object-cover object-center"
                fill
            />
            
            <div className="pt-16 flex items-center pb-8 justify-center xl:pt-28">
                <h1 className="text-white font-sans text-3xl font-bold sm:text-5xl"> We are ready, are you? </h1>
            </div>
            <form className="flex flex-col items-center justify-center">
                <input type="name" name="" id="" placeholder="Name" className="w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
                <input type="email" name="" id="" placeholder="example@gmail.com" className="w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
                <input type="phone" name="" id="" placeholder="xx 12345-6789" className="w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={number} />
                <textarea id="message" rows={6} className="block p-2.5 w-2/5 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Write your thoughts here..." value={desc} ></textarea>
                
            </form>
            <div className="flex py-8 align-middle justify-center items-center">
                <button type="button" className="focus:outline-none w-40 text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Send</button>
            </div>
        </div>
    )

}

export default Contact2