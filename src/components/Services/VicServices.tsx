import VicServiceCard from "./VicServiceCard"
import { StaticImageData } from "next/image"

export type Service1Type = {
  name: string
  image: StaticImageData | string

}

const services1: Service1Type[] = [
  {
    name: "Feature 1",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true ",
  },

]

const services2: Service1Type[] = [
  {
    name: "Feature 2",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true ",
  },

]

const services3: Service1Type[] = [
  {
    name: "Feature 3",
    image: "https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true ",
  },

]



const VicServices = () => {
  return (
    <section className="container flex flex-col gap-y-16 bg-stone-200	 justify-center items-center mx-auto mt-24 divide-y divide-black md:py-8 ">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Our <span className="text-red-800	">Features</span>
        </h1>
        <p className="pt-4 font-light text-gray-800 uppercase">
          Adquira um dos nossos servicos
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-2 ">
        {services1.map((service) => (
          <VicServiceCard key={service.name} {...service} />
        ))}
        <div>
          <p className="text-xl">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti delectus et natus officia? Delectus, aliquid vero sunt voluptatem saepe voluptate quis amet, necessitatibus officia fugiat molestias earum dignissimos aspernatur."</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-2">
        {services2.map((service) => (
          <VicServiceCard key={service.name} {...service} />
        ))}
        <div>
          <p className="text-xl">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officiis et amet beatae eveniet voluptatem autem consectetur quidem hic neque architecto molestiae, harum nemo distinctio omnis recusandae ad assumenda delectus!"</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-2">
        {services3.map((service) => (
          <VicServiceCard key={service.name} {...service} />
        ))}
        <div>
          <p className="text-xl">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, id? Laboriosam harum quis aliquid fugiat iure voluptatem praesentium culpa accusamus! Eaque ea unde voluptatem cum placeat quia necessitatibus labore neque!"</p>
        </div>
      </div>
    </section>
  )
}

export default VicServices