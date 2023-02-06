import { KeyboardEvent, ReactNode, useState, CSSProperties } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ExportedImage from "next-image-export-optimizer";
import Button from "../layout/Button1";

interface WrapperProps {
  children: ReactNode;
  currentItem: number;
}

interface CarouselSlideProps {
  children: ReactNode;
  position: number;
  className?: string;
}

interface SlideImageProps {
  number: number;
}

const NUM_OF_ITEMS = 3;

const Wrapper = ({ children, currentItem }: WrapperProps) => {
  const wrapperStyle = {
    transform: `translateX(-${(currentItem % NUM_OF_ITEMS) * 100}%)`,
  } as CSSProperties;

  return (
    <div
      className="w-full h-full [transition:_transform_1s_ease-out]"
      style={wrapperStyle}
    >
      {children}
    </div>
  );
};

const CarouselSlide = ({
  children,
  position,
  className,
}: CarouselSlideProps) => {
  const itemStyle = {
    left: `${position * 100}%`,
  } as CSSProperties;

  return (
    <div
      className={`absolute flex items-center justify-center top-0 left-0 w-full h-full ${className}`}
      style={itemStyle}
    >
      {children}
    </div>
  );
};

const SlideImage = ({ number }: SlideImageProps) => {
  return (
    <ExportedImage
      className="object-cover"
      src={`/images/Hero/slide_${number.toString().padStart(2, "0")}.jpg`}
      alt={`carousel slide ${number}`}
      key={`slide-${number}`}
      fill
    />
  );
};

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  // Create an array of numbers starting from 1 and going to N.
  const numbers = Array.from({ length: NUM_OF_ITEMS }, (_, index) => index + 1);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    callback: () => void
  ) => {
    if (e.key !== "Enter") return;
    callback();
  };

  const moveToNext = () => {
    if (activeItem === NUM_OF_ITEMS - 1) return;
    setActiveItem((previous) => previous + 1);
  };

  const moveToPrevious = () => {
    if (activeItem === 0) return;
    setActiveItem((previous) => previous - 1);
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Wrapper currentItem={activeItem}>
        <CarouselSlide position={0}>
          <SlideImage number={1} />
          <div className="absolute top-1/2 left-1/2 [transform:_translate(-50%,-50%)] w-3/4 md:top-[55%]">
            <h4 className="text-primary-500 text-lg font-bold uppercase mb-2 md:text-2xl md:mb-4">
              We are ready to help
            </h4>
            <h3 className="text-white text-3xl font-bold uppercase mb-6 md:text-[2.75rem] md:leading-[3.5rem] md:mb-8">
              Financial analisys <br />& consulting
            </h3>
            <p className="text-white [max-width:_50ch] mb-7 md:mb-9 md:leading-8">
              This finance HTML template is 100% free of charge provided by
              TemplateMo. This is one-page version added in 2021 February.
            </p>
            <Button>Contact Us</Button>
          </div>
        </CarouselSlide>
        <CarouselSlide position={1}>
          <SlideImage number={2} />
          <div className="absolute top-1/2 left-1/2 [transform:_translate(-50%,-50%)] w-3/4 md:top-[55%]">
            <h4 className="text-primary-500 text-lg font-bold uppercase mb-2 md:text-2xl md:mb-4">
              We are here to support you
            </h4>
            <h3 className="text-white text-3xl font-bold uppercase mb-6 md:text-[2.75rem] md:leading-[3.5rem] md:mb-8">
              Accounting <br />& Management
            </h3>
            <p className="text-white [max-width:_50ch] mb-7 md:mb-9 md:leading-8">
              You are allowed to use this template for your company websites.
              You are NOT allowed to re-distribute this template ZIP file on any
              template download website. Please contact TemplateMo for more
              detail.
            </p>
            <Button>Contact Us</Button>
          </div>
        </CarouselSlide>
        <CarouselSlide position={2}>
          <SlideImage number={3} />
          <div className="absolute top-1/2 left-1/2 [transform:_translate(-50%,-50%)] w-3/4 md:top-[55%]">
            <h4 className="text-primary-500 text-lg font-bold uppercase mb-2 md:text-2xl md:mb-4">
              We have a solid background
            </h4>
            <h3 className="text-white text-3xl font-bold uppercase mb-6 md:text-[2.75rem] md:leading-[3.5rem] md:mb-8">
              Market Analisys & <br /> Statistics
            </h3>
            <p className="text-white [max-width:_50ch] mb-7 md:mb-9 md:leading-8">
              You can download, edit and use this finance business layout for
              your commercial websites. You just need to put class="external" if
              you wish to link to external URLs in the main menu.
            </p>
            <Button>Contact Us</Button>
          </div>
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
  );
};

export default Carousel;
