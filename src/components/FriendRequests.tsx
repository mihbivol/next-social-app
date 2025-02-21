import Image from "next/image";
import Link from "next/link";
import React from "react";

function FriendRequests() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
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
          <Image
            src={
              "/accept.png"
            }
            width={20}
            height={20}
            className="cursor-pointer"
            alt=""
          />
          <Image
            src={
              "/reject.png"
            }
            width={20}
            height={20}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
