"use client";

import React, { useState, useEffect } from 'react'
import Icon from './Icon'
import { ArrowLeftRight, Search } from 'lucide-react'
import Searchbar from './SearchBar'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { SearchContextType, useSearchContext } from '@/utils/SearchContext';

const SearchBox = () => {

   const {
      whereFrom,setWhereFrom,
      whereTo,setWhereTo,
      departure,setDeparture,
      returnDate,setReturnDate
   } = useSearchContext() as SearchContextType

  const [disable, setDisable] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    if (whereFrom && whereTo && departure && returnDate) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [whereFrom, whereTo, departure, returnDate])

  const handleSearch = () => {
    if (whereFrom && whereTo && departure && returnDate) {
      // console.log("Search parameters:", { whereFrom, whereTo, departure, returnDate })
      router.push('/search')
    }
  }

  return (
    <div className='border border-[#E6E8EB] px-7 py-8 rounded-2xl shadow-lg'>
      <div className='bg-[#F5F7FA] px-3 py-2 rounded-[6px] w-[7.85rem] flex items-center justify-center'>
         <h2 className='text-[1rem]'>Flights</h2>
      </div>

      <div className="flex flex-row items-center justify-between gap-3 mt-[1.5rem]">

        <Searchbar label="Where from?" type='select' value={whereFrom} onChange={setWhereFrom}/>
        
        <Icon 
          icon={<ArrowLeftRight/>} 
          bgStyle='bg-[#F5F7FA] rounded-full w-9 h-9 flex items-center justify-center'
          iconStyle='w-[15px] h-[15px] text-[#003E39] cursor-pointer flex items-center justify-center'
        />

        <Searchbar label="Where to?" type='select' value={whereTo} onChange={setWhereTo}/>
        
        <Searchbar label="Departure" type='date' value={departure} onChange={setDeparture}/>
        <Searchbar label="Return" type='date' value={returnDate} onChange={setReturnDate}/>

      </div>
      
     <div className="flex items-center justify-end mt-6">
       <Button 
         className={`w-[15.6rem] flex items-center bg-[#003E39] justify-center gap-1 ${disable ? 'cursor-not-allowed' : 'cursor-pointer'}`} 
         onClick={handleSearch} 
       >
        <Icon 
          icon={<Search/>} 
          bgStyle='flex items-center justify-center'
          iconStyle='w-[16px] h-[16px] text-[#C9CACC] cursor-pointer flex items-center justify-center'
        />
        Search flights
      </Button>
     </div>
    </div>
  )
}

export default SearchBox
