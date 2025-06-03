import React from "react";

const images = [
  "/bspwm/1.png",
  "/bspwm/2.png",
  "/bspwm/3.png",
  "/bspwm/4.png",
  "/bspwm/5.png",
  "/bspwm/6.png",
  "/bspwm/7.png",
  "/bspwm/8.png",
  "/bspwm/9.png",
  "/bspwm/10.png",
  "/bspwm/11.png",
  "/bspwm/12.png",
  "/bspwm/13.png",
  "/bspwm/14.png",
  "/bspwm/15.png",
  "/bspwm/16.png",
  "/bspwm/17.png",
  "/bspwm/18.png",
  "/bspwm/19.png",
  "/bspwm/20.png",
  "/bspwm/21.png",
  "/bspwm/22.png",
  "/bspwm/23.png",
  "/bspwm/24.png",
  "/bspwm/25.png",
  "/bspwm/26.png",
  "/bspwm/27.png",
  "/bspwm/28.png",
  "/bspwm/29.png",
  "/bspwm/30.png",
  "/bspwm/31.png",
  "/bspwm/32.png",
  "/bspwm/33.png",
  "/bspwm/34.png",
  "/bspwm/35.png",
  "/bspwm/36.png",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black size-10 rounded-full opacity-75 flex text-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`cursor-pointer top-1/2 -translate-y-1/2 ${arrowStyle} ${
        isLeft ? "left-2" : "right-2"
      }`}
    >
      <span
        role="img"
        className="w-full"
        aria-label={`Arrow ${isLeft ? "left" : "right"}`}
      >
        {isLeft ? "<" : ">"}
      </span>
    </button>
  );

  return (
    <div className="p-4 flex justify-center h-[calc(100vh-256px)] w-full items-center">
      <div className="relative w-full h-full overflow-hidden aspect-video items-center flex justify-center">
        <div className="inline-flex aspect-video overflow-x-hidden h-full carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div
              className="h-full aspect-video flex-shrink-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              key={img}
              ref={refs[i]}
            >
              <img src={img} className="w-full h-full rounded-xl object-contain" />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <style>
        {`
          .carousel {
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              -ms-overflow-style: none;
          }`}
      </style>
    </div>
  );
}
