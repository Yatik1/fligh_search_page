"use client";

import React, { useState, useEffect } from 'react'
import Icon from './Icon'
import { ArrowLeftRight, Search } from 'lucide-react'
import Searchbar from './SearchBar'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';

const SearchBox = () => {

  const [whereFrom, setWhereFrom] = useState<string>("")
  const [whereTo, setWhereTo] = useState<string>("")
  const [departure, setDeparture] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")

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
      console.log("Search parameters:", { whereFrom, whereTo, departure, returnDate })
      // router.push(`/search?whereFrom=${whereFrom}&whereTo=${whereTo}&departure=${departure}&returnDate=${returnDate}`)
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
        <Icon icon={<ArrowLeftRight/>} bg={true} />
        <Searchbar label="Where to?" type='select' value={whereTo} onChange={setWhereTo}/>
        
        <Searchbar label="Departure" type='date' value={departure} onChange={setDeparture}/>
        <Searchbar label="Return" type='date' value={returnDate} onChange={setReturnDate}/>

      </div>
      
     <div className="flex justify-end mt-6">
       <Button 
         className={`w-[15.6rem] flex items-center bg-[#003E39] justify-center ${disable ? 'cursor-not-allowed' : 'cursor-pointer'}`} 
         onClick={handleSearch} 
       >
        <Icon icon={<Search/>} />
        Search flights
      </Button>
     </div>
    </div>
  )
}

export default SearchBox
