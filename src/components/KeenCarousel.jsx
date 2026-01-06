import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./KeenCarousel.scss";

/*
  3D carousel plugin
  FIXES:
  - Always shows exactly 3 slides
  - Hides slides behind the camera
  - Smooth angle-based visibility
*/
const carousel3D = (slider) => {
  const z = 400;

  function updateSlides() {
    const progress = slider.track.details.progress;
    const totalSlides = slider.slides.length;
    const anglePerSlide = 360 / totalSlides;
    const rotation = 360 * progress;

    /* Rotate the full carousel */
    slider.container.style.transform = `
      translateZ(-${z}px) rotateY(${-rotation}deg)
    `;

    slider.slides.forEach((slide, index) => {
      const slideAngle = anglePerSlide * index - rotation;

      /* Normalize angle to -180 to 180 */
      let angle = slideAngle % 360;
      if (angle > 180) angle -= 360;
      if (angle < -180) angle += 360;

      /*
        Visibility logic
        ±90° = visible (3 slides)
      */
      const isVisible = Math.abs(angle) <= 90;

      /* Front slide */
      const isFront = Math.abs(angle) <= 10;

      slide.classList.toggle("is-visible", isVisible);
      slide.classList.toggle("is-front", isFront);
    });
  }

  slider.on("created", () => {
    const angle = 360 / slider.slides.length;

    /* Place slides in 3D circle */
    slider.slides.forEach((slide, index) => {
      slide.style.transform = `
        rotateY(${angle * index}deg) translateZ(${z}px)
      `;
    });

    updateSlides();
  });

  slider.on("detailsChanged", updateSlides);
};

const KeenCarousel = ({ images }) => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel3D]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {images.map((img, index) => (
            <div key={index} className={`carousel__cell number-slide${index + 1}`}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeenCarousel;
