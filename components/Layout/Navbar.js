import Link from "next/link";
import React from "react";

export default function Navbar() {
  const menu = [
    "skincare",
    "make up",
    "body",
    "hair",
    "fragrance",
    "nails",
    "tools",
    "brands",
  ];

  return (
    <div className="container-navbar">
      <div className="flex flex-row border-b h-14">
        <div className="md:w-[350px] py-1 md:py-3">
          <div className="flex items-center h-full">
            <img
              src="/assets/icon/hamburger.png"
              alt="hamburger"
              className="px-5 w-[70px] h-6"
            />
            <Link href="/">
              <a>
                <img
                  src="https://app.femaledaily.com/wp-content/uploads/2018/07/FD-Logo-Pink.png"
                  className="max-w-[180px] h-[35px] hidden md:block"
                  alt="logo femaledaily"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full py-1 md:py-2">
          <div className="border mr-2 md:mr-10 h-full rounded">
            <div className="flex flex-row items-center justify-center h-full">
              <img
                src="/assets/icon/search.png"
                className="float-left px-auto mx-3 w-5 h-5"
                alt="hamburger"
              />
              <input
                type="text"
                placeholder="Seach products, articles, topics, brands, etc"
                className="w-full outline-none font-roboto"
              />
            </div>
          </div>
        </div>
        <div className="w-[320px] hidden md:block">
          <div className="bg-primary-red h-full cursor-pointer flex flex-row justify-center items-center">
            <img
              src="/assets/icon/profile-woman.png"
              className="w-5 h-5 mr-4"
              alt="profile"
            />
            <button className="text-white font-normal font-poppins opacity-80">
              LOGIN / SIGNUP
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen overflow-auto">
        <div className="flex justify-center border-none md:border-b-2">
          {menu.map((item, index) => {
            return (
              <Link key={index} href="#">
                <a className="text-center font-poppins font-bold text-black uppercase mx-2 md:mx-4 my-auto md:my-3 hover:text-primary-red">
                  {item}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
