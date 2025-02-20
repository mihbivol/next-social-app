import AddPost from '@/components/AddPost'
import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Stories from '@/components/Stories'
import React from 'react'

function Homepage() {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[15%]">
        <LeftMenu/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[60%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[25%]">
        <RightMenu/>
      </div>
    </div>
  )
}

export default Homepage