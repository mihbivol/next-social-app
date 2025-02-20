import Image from "next/image";
import React from "react";

function Post() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/3140079/pexels-photo-3140079.jpeg"
            }
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Mike Brown</span>
        </div>
        <Image src={"/more.png"} width={16} height={16} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/30646397/pexels-photo-30646397/free-photo-of-woman-in-vibrant-blue-window-frame.jpeg"
            }
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              113K <span className="hidden md:inline">Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              1k <span className="hidden md:inline">Comments</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/share.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              564 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
