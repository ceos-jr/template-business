import { KeyboardEvent, ReactNode, useState, CSSProperties } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import CarouselSlide from "./CarouselSlide"
import SlideImage from "./SlideImage"
import CarouselTextCard from "./CarouselTextCard"
import Button from "../layout/Button1"

interface WrapperProps {
  children: ReactNode
  currentItem: number
}

const NUM_OF_ITEMS = 3

const Wrapper = ({ children, currentItem }: WrapperProps) => {
  const wrapperStyle = {
    transform: `translateX(-${(currentItem % NUM_OF_ITEMS) * 100}%)`,
  } as CSSProperties

  return (
    <div
      className="w-full h-full [transition:_transform_1s_ease-out]"
      style={wrapperStyle}
    >
      {children}
    </div>
  )
}

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0)

  // Create an array of numbers starting from 1 and going to N.
  const numbers = Array.from({ length: NUM_OF_ITEMS }, (_, index) => index + 1)

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    callback: () => void
  ) => {
    if (e.key !== "Enter") return
    callback()
  }

  const moveToNext = () => {
    if (activeItem === NUM_OF_ITEMS - 1) return
    setActiveItem((previous) => previous + 1)
  }

  const moveToPrevious = () => {
    if (activeItem === 0) return
    setActiveItem((previous) => previous - 1)
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <Wrapper currentItem={activeItem}>
        <CarouselSlide position={0}>
          <SlideImage number={1} />
          <CarouselTextCard
            subTitle={"We are ready to help"}
            title={
              <span>
                Financial analisys <br />& consulting
              </span>
            }
            paragraph={
              "This finance HTML template is 100% free of charge provided by TemplateMo. This is one-page version added in 2021 February"
            }
            button={"Contact Us"}
          />
        </CarouselSlide>
        <CarouselSlide position={1}>
          <SlideImage number={2} />
          <CarouselTextCard
            subTitle={"We are here to support you"}
            title={
              <span>
                Accounting <br />& Management
              </span>
            }
            paragraph={
              "You are allowed to use this template for your company websites. You are NOT allowed to re-distribute this template ZIP file on any template download website. Please contact TemplateMo for more detail."
            }
            button={"Our Services"}
          />
        </CarouselSlide>
        <CarouselSlide position={2}>
          <SlideImage number={3} />
          <CarouselTextCard
            subTitle={"We have a solid background"}
            title={
              <span>
                Market Analisys & <br /> Statistics
              </span>
            }
            paragraph={
              "You can download, edit and use this finance business layout for your commercial websites You just need to put class='external' if you wish to link to external URLs in the main menu."
            }
            button={"Learn More"}
          />
        </CarouselSlide>
      </Wrapper>
      {activeItem !== 0 && (
        <button
          className="absolute top-1/2 md:top-[57%] left-2 md:left-8"
          onClick={() => moveToPrevious()}
          onKeyDown={(e) => handleKeyDown(e, moveToPrevious)}
        >
          <HiOutlineChevronLeft className="text-white w-7 h-8" />
        </button>
      )}
      {activeItem !== NUM_OF_ITEMS - 1 && (
        <button
          className="absolute top-1/2 md:top-[57%] right-2 md:right-8"
          onClick={() => moveToNext()}
          onKeyDown={(e) => handleKeyDown(e, moveToNext)}
        >
          <HiOutlineChevronRight className="text-white w-7 h-8" />
        </button>
      )}
    </div>
  )
}

export default Carousel
