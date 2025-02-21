import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserMediaCard({ userId }: { userId: string }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">My media</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src={"https://images.pexels.com/photos/17941534/pexels-photo-17941534/free-photo-of-sony-walkman-with-earphones.jpeg"} alt="" fill className="object-cover rounded-md"/>
        </div>
      </div>
    </div>
  );
}

export default UserMediaCard;
