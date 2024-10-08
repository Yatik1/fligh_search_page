"use client"

import { SearchContextType, useSearchContext } from '@/utils/SearchContext'
import {airports} from '@/data'
import React from 'react'
import { dateFormatter } from '@/utils/dateFormatter'
import { Separator } from './ui/separator'
import Icon from './Icon'
import { Search, X } from 'lucide-react'


const SearchNav = () => {
  
  const {whereFrom,whereTo,departure,returnDate} = useSearchContext() as SearchContextType

  const FromCode = airports.find(airport => airport.name === whereFrom)?.code
  const ToCode = airports.find(airport => airport.name === whereTo)?.code


  return (
   <>
    { whereFrom && whereTo && departure && returnDate && (
      <div className='py-7 px-[10rem] border-b border-[#E6E8EB] flex items-center justify-between'>
        <div className="w-fit flex items-center justify-center gap-5 border border-[#E6E8EB] rounded-full py-2 px-6 text-md tracking-tight">
          <div className="flex items-start justify-center gap-[0.5rem] text-[15px]">
            <p>{FromCode}</p>
            <p className='text-[#787B80] font-extralight'>{whereFrom}</p>
          </div>

          <Separator orientation='vertical' className='h-[1.5rem]'/>

          <div className="flex items-start justify-center gap-[0.5rem] text-[15px]">
            <p>{ToCode}</p>
            <p className='text-[#787B80] font-extralight'>{whereTo}</p>
          </div>

          <Separator orientation='vertical' className='h-[1.5rem]'/>

          <div className="flex items-start justify-center gap-[0.5rem] text-[15px]">
            <p>
              {dateFormatter(departure)} - {dateFormatter(returnDate)}
            </p>
          </div>

          <Separator orientation='vertical' className='h-[1.5rem]'/>

          <Icon 
            icon={<Search />}
            bg={true}
            className='w-4 h-4 text-[#003E39] cursor-pointer'
          />

        </div>

        <Icon 
          icon={<X />}
          bg={true}
          border={true}
        />
      </div>
    )
    }
   </>
  )
}

export default SearchNav