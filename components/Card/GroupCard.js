import Link from "next/link";
import React from "react";

export default function GroupCard({ data }) {
  return (
    <Link href="/">
      <a>
        <div className="border rounded-lg w-full h-full py-4 shadow-xl">
          <img
            src={data}
            className="w-[180px] h-[180px] mx-auto object-cover"
            alt="profile"
          />
          <p className="text-center font-bold text-2xl mt-5">
            Embrace the Curl
          </p>
          <div className="grid grid-cols-3 gap-2 px-7 mt-10 mb-2">
            <div>
              <img
                src="assets/icon/menu-profile.png"
                className="w-7 h-7 mx-auto"
                alt="menu-profile"
              />
            </div>
            <div>
              <img
                src="assets/icon/hamburger.png"
                className="w-7 h-7 mx-auto"
                alt="hamburger"
              />
            </div>
            <div>
              <img
                src="assets/icon/chat.png"
                className="w-7 h-7 mx-auto"
                alt="chat"
              />
            </div>
          </div>
          <p className="px-7 text-center mb-7">
            May our curls pop and never stop!
          </p>
        </div>
      </a>
    </Link>
  );
}
