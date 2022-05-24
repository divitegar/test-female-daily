import React from "react";

export default function Top() {
  return (
    <>
      <div className="flex justify-center p-2 mt-3">
        <div className="bg-gray-300 border-2 border-gray-500 w-[970px] h-[50px]">
          <div className="flex justify-center items-center h-full">
            <p className="font-bold text-2xl text-gray-400 font-poppins">
              Top Frame 970x50
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2 mt-6">
        <div className="bg-gray-300 border-2 border-gray-500 w-[970px] h-[250px]">
          <div className="flex justify-center items-center h-full">
            <p className="font-bold text-2xl text-gray-400 font-poppans">
              Billboard 970x250
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
