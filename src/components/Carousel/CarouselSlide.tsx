import { ReactNode, CSSProperties } from "react"

interface CarouselSlideProps {
  children: ReactNode
  position: number
  className?: string
}

const CarouselSlide = ({
  children,
  position,
  className,
}: CarouselSlideProps) => {
  const itemStyle = {
    left: `${position * 100}%`,
  } as CSSProperties

  return (
    <div
      className={`absolute flex items-center justify-center top-0 left-0 w-full h-full ${className}`}
      style={itemStyle}
    >
      {children}
    </div>
  )
}

export default CarouselSlide
