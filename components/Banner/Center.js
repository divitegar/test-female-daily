import React from "react";

export default function Center() {
  return (
    <div className="flex justify-center mt-14">
      <div className="bg-gray-300 border-2 border-gray-500 w-[970px] h-[250px]">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="font-bold text-3xl text-gray-400 font-poppins">
            Horizontal 970x250
          </p>
          <p className="font-bold text-xl md:text-4xl text-gray-400 font-poppins">
            (Internal Campaign Only)
          </p>
        </div>
      </div>
    </div>
  );
}
