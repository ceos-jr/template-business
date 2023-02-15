import { StaticImageData } from "next/image"
import ServiceCardLucas from "./ServiceCardLucas"

export type ServiceLucasType = {
    name: string
    image: string
    description: string
}

const services: ServiceLucasType [] = [
    {
    name: "Sites Institucionais",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true",
    description: "Desenvolvemos a melhor solução para a sua empresa.",
    },
    {
    name: "Sistemas",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true",
    description: "Desenvolvemos a melhor solução para a sua empresa.",
    },
    {
    name: "Acessoria",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true",
    description: "Desenvolvemos a melhor solução para a sua empresa.",
    },
    {
    name: "Amizade",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true",
    description: "Desenvolvemos a melhor solução para a sua empresa.",
    }
]


const ServicesLucas = () =>{
    return(
        <section className="container flex flex-col justify-center items-center mx-auto">
            <div className="flex flex-col gap-3 text-gray-800 text-center py-10">
                <h1 className= "text-6xl font-bold"> Our Services </h1>
                <p className="text-lg"> End-To-End Innovation Enablers, helping your company unlock it’s full innovation potential. </p>
            </div>
            <div className="flex flex-col gap-16 p-6 w-full md:flex-row">
                {services.map((service) => (<ServiceCardLucas key={service.name} {...service} />))}
            </div>
        </section>
    )
}

export default ServicesLucas