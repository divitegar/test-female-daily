import ProductCard from "../Card/ProductCard";
import React from "react";
import { useSelector } from "react-redux";

export default function ProductMatches() {
  const dataList = useSelector((state) => state.dataList);
  const { loading, error, data } = dataList;

  return (
    <div className="bg-pink-200 w-screen h-full py-20 md:py-0 md:h-[430px] mt-20 font-poppins">
      <div className="flex flex-col md:flex-row items-center h-full">
        <div className="px-3 md:px-0 mr-0 md:mr-[18px] w-full md:w-[820px]">
          <div className="grid grid-cols-1 gap-8 ml-0 md:ml-[100px]">
            <p className="font-bold text-2xl">
              Looking for products that are just simply perfect for you?
            </p>
            <p className="text-xl text-justify">
              Here are some products that we believe match your skin, hair and
              body! Have we mentionedthat they solve your concerns too?
            </p>
            <div className="w-full">
              <button className="text-white font-thin font-roboto bg-primary-red px-7 py-3 float-right rounded-xl hover:text-primary-red hover:bg-white">
                See My Matches
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4 mr-40">
            {data?.["editor's choice"]?.slice(0, 3)?.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  editor={item?.editor}
                  role={item?.role}
                  image={item?.product?.image}
                  rating={item?.product?.rating}
                  name={item?.product?.name}
                  description={item?.product?.description}
                  alt={item?.product?.name}
                  matchType
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
