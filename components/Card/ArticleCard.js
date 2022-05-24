import Link from "next/link";
import React from "react";

export default function ArticleCard({ title, author, published, img }) {
  return (
    <div className="grid grid-cols-1 font-poppins">
      <Link href="/">
        <a>
          <img
            src={img ?? "/assets/image/female.png"}
            className="w-full h-56 object-cover rounded-xl"
            alt="article image"
          />
          <p className="mt-5 font-bold text-xs md:text-2xl hover:text-primary-red">
            {title}
          </p>
          <p className="mt-5 text-gray-700 capitalize">
            {author} <span className="text-gray-300">| {published}</span>
          </p>
        </a>
      </Link>
    </div>
  );
}
