"use client";

import { useState } from "react";

export default function HeritageCard({
  name,
  location,
  description,
  images,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  function handleExplore() {
    setCurrentImage(0);
    setShowDetails(true);
  }

  function handleClose() {
    setShowDetails(false);
  }

  function handlePrevious() {
    setCurrentImage((current) => {
      if (current === 0) {
        return images.length - 1;
      }

      return current - 1;
    });
  }

  function handleNext() {
    setCurrentImage((current) => {
      if (current === images.length - 1) {
        return 0;
      }

      return current + 1;
    });
  }

  return (
    <>
      {/* HERITAGE CARD */}
      <article className="heritage-card">

        <img
          src={images[0]}
          alt={name}
          className="heritage-card-image"
        />

        <div className="heritage-card-content">

          <h3>{name}</h3>

          <p className="heritage-location">
            📍 {location}
          </p>

          <p className="heritage-description">
            {description}
          </p>

          <button
            type="button"
            className="button"
            onClick={handleExplore}
          >
            Explore More
          </button>

        </div>
      </article>

      {/* EXPLORE POPUP */}
      {showDetails && (
        <div
          className="heritage-details"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${name}-title`}
        >
          <div className="heritage-details-content">

            {/* IMAGE SLIDER */}
            <div className="heritage-slider">

              <img
                src={images[currentImage]}
                alt={`${name} - image ${currentImage + 1}`}
                className="heritage-details-image"
              />

              {/* Previous Button */}
              <button
                type="button"
                className="slider-button slider-button-left"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                type="button"
                className="slider-button slider-button-right"
                onClick={handleNext}
                aria-label="Next image"
              >
                ›
              </button>

              {/* Image Indicators */}
              <div className="slider-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={
                      index === currentImage
                        ? "slider-dot active"
                        : "slider-dot"
                    }
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* DETAILS */}
            <div className="heritage-details-body">

              <h3 id={`${name}-title`}>
                {name}
              </h3>

              <p className="heritage-location">
                📍 {location}
              </p>

              <p>
                {description}
              </p>

              <button
                type="button"
                className="button"
                onClick={handleClose}
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}