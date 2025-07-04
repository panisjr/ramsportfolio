import React from "react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <div className="bg-gray-200 w-screen h-fit py-3 px-4 flex items-center justify-between">
        <Navbar/>
        <div className="flex items-center gap-3 justify-center">
          <p className="text-nowrap text-[14px] cursor-default">Ramel Panis Jr.</p>
          <div className="relative w-[30px] h-[30px]">
            <Image
              src={"/assets/images/profile.png"}
              alt="Profile Picture"
              fill
              sizes="w-[200px] h-[200px]"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
