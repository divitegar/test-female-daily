import React from "react";
import ProductCard from "../Card/ProductCard";
import HeaderCard from "../Molecules/HeaderCard";
import DataTrending from "../../data/DataTrending.json";
import SwiperTrending from "./Swiper";

export default function Trending() {
  return (
    <div className="container-header mt-20 hidden md:block">
      <HeaderCard
        title="Trending This Week"
        subtitle="See our weekly reviewed products"
      />

      <SwiperTrending data={DataTrending} />
    </div>
  );
}
