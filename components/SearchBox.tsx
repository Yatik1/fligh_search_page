import React from 'react'
import Icon from './Icon'
import { ArrowLeftRight, Search } from 'lucide-react'
import Searchbar from './SearchBar'
import { Button } from './ui/button'

const SearchBox = () => {
  return (
    <div className='absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-[#E6E8EB] p-4 rounded-2xl shadow-lg'>
      <div className='bg-[#F5F7FA] p-3 rounded-[6px] w-[7.85rem] flex items-center justify-center'>
         <h2 className='text-[1rem]'>Flights</h2>
      </div>

      <div className="flex flex-row items-center justify-between gap-2 mt-[1.5rem]">
        
        <Searchbar label="Where from?" type='select'/>
        <Icon icon={<ArrowLeftRight/>} />
        <Searchbar label="Where to?" type='select'/>

        <Searchbar label="Departure" type='date'/>
        <Searchbar label="Return" type='date'/>

        
      </div>
      
     <div className="flex items-center justify-end mt-6">
       <Button className='flex items-center bg-[#003E39] justify-center'>
        <Icon icon={<Search/>} />
        Search flights
      </Button>
     </div>

    </div>
  )
}

export default SearchBox
