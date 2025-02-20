import Image from 'next/image'
import React from 'react'

function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/3140079/pexels-photo-3140079.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className='font-medium'>Mihail</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className='font-medium'>Andreea</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/30755651/pexels-photo-30755651/free-photo-of-young-woman-relaxing-with-book-in-urban-setting.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className='font-medium'>Chan</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/3071458/pexels-photo-3071458.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className='font-medium'>Eva</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/11668303/pexels-photo-11668303.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className='font-medium'>Holly</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/4653710/pexels-photo-4653710.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className='font-medium'>Britney</span>
        </div>
      </div>
    </div>
  )
}

export default Stories