import Link from "next/link";
import React from "react";

export default function HeaderCard({ title, subtitle, link }) {
  return (
    <>
      <div className="flex">
        <h3 className="text-xs md:text-2xl font-bold">{title}</h3>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <h3 className="text-gray-200 text-xs md:text-xl">{subtitle}</h3>
        </div>
        {link ? (
          <Link href={link ?? `#`}>
            <a className="text-primary-red">
              <div className="flex items-center">
                <p className="text-xs md:text-base">See More</p>
                <img
                  src="/assets/icon/arrow-right.png"
                  className="w-5 h-5 ml-0 md:ml-4"
                  alt="arrow right"
                />
              </div>
            </a>
          </Link>
        ) : null}
      </div>
    </>
  );
}
