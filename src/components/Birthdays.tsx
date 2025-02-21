import Image from "next/image";
import Link from "next/link";
import React from "react";

function Birthdays() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/28262879/pexels-photo-28262879/free-photo-of-a-man-in-a-hat-sitting-on-a-chair.jpeg"
            }
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <span className="font-semibold">Wayne B.</span>
        </div>
        <div className="flex justify-end gap-3">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg">
        <Image src={"/gift.png"} width={24} height={24} alt="" />
        <Link href={"/"} className="flex flex-col gap-1 text-xs">
        <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
        <span className="text-gray-500"> See other 16 have upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
}

export default Birthdays;
