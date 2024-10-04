// import Searchbar from '@/components/Searchbar'
import SearchBox from '@/components/SearchBox'
import React from 'react'

export default function Page() {
  return (
    <div className='relative h-screen'>
      <h3 className='absolute top-4 left-[50%] translate-x-[-50%] text-[2.25rem] font-light'>Good afternoon, Brian</h3>
      <SearchBox />
    </div>
  )
}