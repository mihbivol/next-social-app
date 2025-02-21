import Image from "next/image";
import React from "react";

function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src={"/more.png"} width={16} height={16} alt="" />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={
              "https://images.pexels.com/photos/30649137/pexels-photo-30649137/free-photo-of-fresh-berry-yogurt-bowl-on-elegant-setting.jpeg"
            }
            fill
            alt=""
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30649137/pexels-photo-30649137/free-photo-of-fresh-berry-yogurt-bowl-on-elegant-setting.jpeg"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Ad;
