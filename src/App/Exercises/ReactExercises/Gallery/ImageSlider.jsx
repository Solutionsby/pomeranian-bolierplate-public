import { useEffect, useState } from 'react';
import './styles.css';

export const ImageSlider = ({ GalleryImg }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? GalleryImg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === GalleryImg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStyles = {
    backgroundImage: `url(${GalleryImg[currentIndex].src})`,
  };
  return (
    <div className="slider-wrapper">
      <div className="leftArrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="RightArrow" onClick={goToNext}>
        ❱
      </div>
      <div></div>
      <div className="slider-photo" style={slideStyles}></div>
      <div className="dots-wrapper">
        {GalleryImg.map((slide, slideIndex) => (
          <div
            className="dots"
            kay={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
