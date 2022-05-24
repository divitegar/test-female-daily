import React from "react";
import Right from "../Banner/Right";
import HeaderCard from "../Molecules/HeaderCard";
import SwiperReview from "./Swiper";
import { useSelector } from "react-redux";

export default function Review() {
  const dataList = useSelector((state) => state.dataList);
  const { loading, error, data } = dataList;
  return (
    <div className="container-header mt-10 md:mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="col-span-2">
          <HeaderCard
            title="Latest Reviews"
            subtitle="So you can make better purchase decision"
            link="/"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        <div className="col-span-2">
          <SwiperReview data={data} />
        </div>
        <Right />
      </div>
    </div>
  );
}
