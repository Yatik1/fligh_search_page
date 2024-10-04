import SearchBox from '@/components/SearchBox'
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-start mt-[6.7rem] gap-6'>
      <h3 className='flex items-center justify-center text-[2.25rem] poppins tracking-tighter'>Good afternoon, Brian</h3>
      <SearchBox />
    </div>
  )
}