"use client"

import { SearchContextType, useSearchContext } from '@/utils/SearchContext'
import React from 'react'


const SearchNav = () => {
    const {whereFrom,whereTo,departure,returnDate} = useSearchContext() as SearchContextType

  return (
    <div className='px-10  py-7 border-b border-[#E6E8EB]'>
        <div className="w-fit flex items-center gap-8 border border-[#E6E8EB] rounded-full p-4 text-md tracking-tight">
            <div className="flex items-start justify-center">{whereFrom}</div>
            <div className="flex items-start justify-center">{whereTo}</div>
            <div className="flex items-start justify-center">{departure}</div>
            <div className="flex items-start justify-center">{returnDate}</div>

        </div>
    </div>

  )
}

export default SearchNav