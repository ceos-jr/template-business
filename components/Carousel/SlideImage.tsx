import ExportedImage from "next-image-export-optimizer";

interface SlideImageProps {
  number: number;
}

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

export default SlideImage;
