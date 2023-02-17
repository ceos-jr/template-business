import ServiceCard5 from "./ServiceCard5"
import { StaticImageData } from "next/image"
import {Service1Type} from "./Services1"

const services1: Service1Type[] = [
  {
    name: "Feature 1",
    image: "https://images.unsplash.com/photo-1676235496827-715660aca4f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    // image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true ",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Feature 2",
    image: "https://images.unsplash.com/photo-1676235496827-715660aca4f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem illo consequatur culpa porro nobis iste necessitatibus non quas, inventore sit autem fugit sunt explicabo quasi, magni sed quo? Optio?"
  },
  {
    image: "https://images.unsplash.com/photo-1676235496827-715660aca4f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    name: "Feature 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium reprehenderit in enim molestiae possimus, blanditiis ipsa recusandae. Saepe praesentium dolores neque accusantium nemo quis corporis voluptate alias ducimus provident."
  }
]

const Services5 = () => {
  return (
    <section className="container flex flex-col gap-y-16 bg-stone-200	 justify-center items-center mx-auto px-4 mt-24 divide-y divide-black md:py-8 ">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Our <span className="text-red-800	">Features</span>
        </h1>
        <p className="pt-4 font-light text-gray-800 uppercase">
          Adquira um dos nossos servicos
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-8 p-12 w-full">
        {services1.map((service) => (
          <ServiceCard5 key={service.name} {...service} />
        ))}
      </ul>
    </section>
  )
}

export default Services5
