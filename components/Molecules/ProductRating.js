import React from "react";

export default function ProductRating({ rating, total }) {
  const starsComponent = [];

  const ratingCountFloored = Math.floor(rating);
  const ratingUnactive = 5 - ratingCountFloored;

  for (let i = 0; i < ratingCountFloored; i++) {
    starsComponent.push(
      <img
        key={i}
        src="/assets/icon/star-active.png"
        className="w-4 h-4 object-fit my-auto"
        alt="star"
      />
    );
  }

  if (ratingUnactive > 0) {
    for (let i = 0; i < ratingUnactive; i++) {
      starsComponent.push(
        <img
          key={i + "unactive"}
          src="/assets/icon/star-unactive.png"
          className="w-4 h-4 my-auto object-cover"
          alt="star"
        />
      );
    }
  }

  return (
    <div className="flex">
      <span className="mr-2 font-bold">{total ? rating : null}</span>{" "}
      {starsComponent}{" "}
    </div>
  );
}
