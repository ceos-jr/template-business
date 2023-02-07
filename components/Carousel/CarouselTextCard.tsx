import { ReactNode } from "react"
import Button from "../layout/Button1"

interface CarouselTextCardProps {
  subTitle: ReactNode;
  title: ReactNode;
  paragraph: ReactNode;
  button: ReactNode;
}

const CarouselTextCard = ({
  subTitle,
  title,
  paragraph,
  button,
}: CarouselTextCardProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 [transform:_translate(-50%,-50%)] w-3/4 md:top-[55%]">
      <h4 className="text-primary-500 text-lg font-bold uppercase mb-2 md:text-2xl md:mb-4">
        {subTitle}
      </h4>
      <h3 className="text-white text-3xl font-bold uppercase mb-6 md:text-[2.75rem] md:leading-[3.5rem] md:mb-8">
        {title}
      </h3>
      <p className="text-white [max-width:_50ch] mb-7 md:mb-9 md:leading-8">
        {paragraph}
      </p>
      <Button>{button}</Button>
    </div>
  )
}

export default CarouselTextCard;
