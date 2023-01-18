import React from 'react';

interface UseSliderProps {
  numberOfItems: number;
}

export const useSlider = ({ numberOfItems }: UseSliderProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const nextSlide = (): void =>
    setCurrentSlideIndex(Math.min(currentSlideIndex + 1, numberOfItems));

  const prevSlide = (): void =>
    setCurrentSlideIndex(Math.max(currentSlideIndex - 1, 0));

  return {
    currentSlideIndex,
    nextSlide,
    prevSlide,
  };
};
