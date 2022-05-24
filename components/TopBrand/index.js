import React from "react";
import HeaderCard from "../Molecules/HeaderCard";

export default function TopBrand() {
  const data = [
    "https://image.femaledaily.com/dyn/172/images/brands-pics/brands_1552546717_Nivea_Logo_800x800.png",
    "https://image.femaledaily.com/dyn/172/images/brands-pics/brands_1553842734_Laneige_Lo_800x800.png",
    "https://image.femaledaily.com/dyn/172/images/brands-pics/brands_1551817430_Garnier_Lo_800x800.png",
    "https://image.femaledaily.com/dyn/172/images/brands-pics/brands_1542081653_tbs_800x800.png",
    "https://image.femaledaily.com/dyn/172/images/brands-pics/brands_1554971171_Ponds_Logo_800x800.png",
    "https://image.femaledaily.com/dyn/172/images/brands-pics/brands_1542081250_wardah_800x800.png",
  ];
  return (
    <div className="container-header mt-20">
      <HeaderCard title="Top Brands" subtitle="We all know and love" link="#" />
      <div className="grid grid-cols-6 gap-3 mt-10">
        {data.map((item, index) => {
          return <img key={index} src={item} alt="brand" />;
        })}
      </div>
      <div className="mt-10">
        <p className="font-bold text-base md:text-2xl font-poppins">
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </p>
        <p className="text-xs md:text-xl font-poppins mt-4 text-justify">
          Product Reviews, Tips & Tricks, Experts and Consumer Opinions, Beauty
          Tutorials, Discussions, Beauty Workshops, anything! <br />
          We are here to be your friendly solution to all things beauty, inside
          and out!
        </p>
      </div>
    </div>
  );
}
