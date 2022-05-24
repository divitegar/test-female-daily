import React from "react";
import HeaderCard from "../Molecules/HeaderCard";

export default function LatestVideo() {
  return (
    <div className="container-header mt-20">
      <HeaderCard
        title="Latest Video"
        subtitle="Watch and learn, ladies"
        link="/"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-3 mt-6">
        <div className="col-span-2">
          <iframe
            src="https://www.youtube.com/embed/UzVvUGLvjKo"
            title="YouTube video player"
            frameBorder="0"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 mt-2 md:mt-0">
            <iframe
              src="https://www.youtube.com/embed/op8E5BNeC94"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-56"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/05Sb-sLJO2g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-56"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
