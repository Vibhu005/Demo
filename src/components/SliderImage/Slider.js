import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "../assests/image/net-1.jpg",
    caption: "Slide 1",
  },
  {
    url: "../assests/image/net-2.jpg",
    caption: "Slide 2",
  },
  {
    url: "../assests/image/net-3.jpg",
    caption: "Slide 3",
  },
];

const Slider = () => {
  return (
    <div className="slide_container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each_slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.name})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slider;
