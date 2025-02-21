import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserInfoCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">About me</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">Lloyd Wright</span>
          <span className="text-sm">@lloyd</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} />
          <span className="">
            Living in <b>London</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span className="">
            Went to <b>Heathland School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span className="">
            Works at <b>Google Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link
              href={"https://www.google.com"}
              className="text-blue-500 font-medium"
            >
              google.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
          <Image src={"/date.png"} alt="" width={16} height={16} />
          <span className="">Joined Nov 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block user</span>
      </div>
    </div>
  );
}

export default UserInfoCard;
