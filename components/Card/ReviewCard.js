import React, { useState } from "react";
import ProductRating from "../Molecules/ProductRating";

export default function ReviewCard({ item }) {
  const [readMore, setReadMore] = useState(true);

  function ReadLess() {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  }

  return (
    <div className="border w-full h-full rounded-xl mb-[180px] md:mb-32">
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-3 border-b mx-1 md:mx-4 px-1 md:py-4">
          <div className="col-span-1">
            <img
              src={item?.product?.image}
              className="w-40 h-24 object-cover"
              alt={item?.product?.name}
            />
          </div>
          <div className="col-span-2">
            <p className="font-bold text-xs md:text-xl hover:text-primary-red">
              {item?.product?.name}
            </p>
            <p className="text-xs md:text-base">{item?.product?.desc}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start md:justify-between py-2 px-1 md:px-4">
          <ProductRating rating={item?.star} />
          <p className="text-gray-300 ml-2 md:ml-0">2 hours ago</p>
        </div>
        <div className="px-4 py-2">
          <p className={readMore ? "line-clamp-2" : ""}>{item?.comment}</p>
          <button
            onClick={() => ReadLess()}
            className="text-primary-red mb-10 md:mb-0"
          >
            {readMore ? "Read More" : "Read Less"}
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute text-center w-full -mt-5">
          <img
            src="/assets/image/female.png"
            className="w-10 h-10 mx-auto rounded-full"
            alt="tes"
          />
          <p>{item?.user}</p>
          <div className="flex flex-col md:flex-row justify-center">
            {item?.profile?.map((i, index) => {
              return (
                <div key={index} className="text-gray-300">
                  {i} {index - 3 ? "," : ""}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
