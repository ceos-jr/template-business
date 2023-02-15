import Image from "next/image"
import { ServiceLucasType } from "./SevicesLucas"

type ServiceLucasTypeProps = ServiceLucasType

const ServiceCardLucas = ({name, image, description} : ServiceLucasTypeProps) => {
    return(
        <div className="flex flex-col overflow-hidden items-center bg-white rounded-md">
            <div className = "overflow-hidden w-full aspect-video">
                <Image
                    src = {image}
                    alt = {'service ${name}'}
                    width={7680}
                    height={4320}
                />
            </div>


        </div>
    )
}

export default ServiceCardLucas