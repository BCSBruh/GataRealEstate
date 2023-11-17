import React, { useEffect, useState } from "react";

function Carousel(props) {
  const data = props.data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <img
            src={`./images/House${item}.jpg`}
            alt="house-1"
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          ></img>
        );
      })}
    </div>
  );
}

export default Carousel;
