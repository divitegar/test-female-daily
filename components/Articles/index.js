import ArticleCard from "../Card/ArticleCard";
import HeaderCard from "../Molecules/HeaderCard";
import React from "react";
import { useSelector } from "react-redux";

export default function Articles() {
  const dataList = useSelector((state) => state.dataList);
  const { loading, error, data } = dataList;

  return (
    <div className="container-header mt-10">
      <HeaderCard
        title="Latest Articles"
        subtitle="So you can make better purchase decision"
        link="/"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {data?.["latest articles"]?.map((item, index) => {
          return (
            <ArticleCard
              key={index}
              title={item?.title}
              img={item?.image}
              author={item?.author}
              published={item?.published_at}
            />
          );
        })}
      </div>
    </div>
  );
}
