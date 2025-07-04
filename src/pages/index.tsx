import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { Mail } from "lucide-react";

const index = () => {
  return (
    <div>
      <div className="bg-gray-200 w-screen h-fit py-3 px-4 flex items-center justify-between">
        <Navbar />
        <div className="flex items-center gap-3 justify-center">
          <div className="flex ">
            <Mail className="w-[15px] h-[15px]" />
            <p className="text-nowrap text-[14px] cursor-default">
              ramelopanisjr.06@gmail.com
            </p>
          </div>
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
