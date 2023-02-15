import Image from "next/image"
import { ServiceLucasType } from "./SevicesLucas"

type ServiceLucasTypeProps = ServiceLucasType


const ServiceCardLucas = ({name, image, description} : ServiceLucasTypeProps) => {
    return(
        <div className="flex flex-col overflow-hidden items-center bg-white rounded">
            <div className = "overflow-hidden w-full aspect-video relative">
                <Image
                    src = {image}
                    alt = {'service ${name}'}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    placeholder="empty"
                />
            </div>
            <div className="p-2 text-center">
                <h1 className="text-xl font-bold text-gray-800">{name}</h1>
                <p className="text-gray-500">{description}</p>
            </div>
            <a href="#" className="font-medium relative px-0 py-1 [transtition:_color_300ms_ease-in] 
            before:absolute 
            before:w-0 before:h-0.5 
            before:bottom-0 before:left-0
            before:bg-gray-500
            before:rounded-full
            before:[transition:_width_300ms_ease-in]
            hover:before:w-full"> Saiba Mais</a>


        </div>
    )
}

export default ServiceCardLucas