import Image from "next/image";
import React from "react";

function Comments() {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/27977839/pexels-photo-27977839/free-photo-of-portrait-for-fisher-man.jpeg"
          }
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            className="bg-transparent outline-none flex-1"
            placeholder="Write a comment..."
          />
          <Image
            src={"/emoji.png"}
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src={
              "https://images.pexels.com/photos/19195396/pexels-photo-19195396/free-photo-of-blonde-hair-model-bitting-necklace.jpeg"
            }
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Fox</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  width={12}
                  height={12}
                  alt=""
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">474 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src={"/more.png"}
            width={16}
            height={16}
            alt=""
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
