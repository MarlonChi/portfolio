"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSlideButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
}

const WorkSlideButtons = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: WorkSlideButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSlideButtons;
