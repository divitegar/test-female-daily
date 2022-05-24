import Link from "next/link";
import React from "react";
import ProductRating from "../Molecules/ProductRating";

export default function ProductCard({
  profile,
  editor,
  role,
  image,
  altImg,
  rating,
  name,
  description,
  border,
  matchType,
  total,
}) {
  return (
    <Link href="#">
      <div
        className={`${
          border && "border border-gray-200"
        } bg-white rounded-lg w-full h-full cursor-pointer`}
      >
        {profile ? (
          <div className="-mt-[52px]">
            <div className="flex ml-5 gap-2">
              <img
                src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
                className="rounded-full object-cover w-10 h-10 md:w-14 md:h-14 mt-[6px]"
                alt={editor}
              />
              <div className="flex flex-col">
                <div className="text-gray-400 text-xs md:text-lg font-bold">
                  {editor}
                </div>
                <div className="text-gray-300 text-xs md:text-base">{role}</div>
              </div>
            </div>
          </div>
        ) : null}
        <img
          src={image}
          className="object-cover w-full h-40 md:h-56 rounded-lg p-4"
          alt={altImg}
        />
        {matchType ? (
          <p className="text-primary-red text-xs md:text-base px-1 md:px-2">
            Match Skin Type
          </p>
        ) : null}
        <div className="grid grid-cols-4 gap-2 p-2">
          <div className="col-span-3">
            <div className="grid grid-cols-1 gap-2">
              <ProductRating rating={rating} total />
              <div className="uppercase font-bold text-base hover:text-primary-red">
                {name}
              </div>
              <p className="line-clamp-2">{description}</p>
            </div>
          </div>
          <div className="col-span-1 font-bold">({total ? total : 10})</div>
        </div>
      </div>
    </Link>
  );
}
