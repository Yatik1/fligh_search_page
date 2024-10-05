"use client";

import React, { useState } from 'react'
import Icon from './Icon'
import { Calendar as CalendarIcon, Target } from 'lucide-react'
import { Calendar } from './ui/calendar'

import { airports } from '@/data'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

const Searchbar = ({label,type,value,onChange}: {label: string, type: "select" | "date",value:string,onChange:(value:string)=>void}) => {
 
    const [calendarOpen, setCalendarOpen] = useState(false);

    const handleDateChange = (newDate : Date | undefined) => {
      if(newDate){
        onChange(newDate.toLocaleDateString())
        setCalendarOpen(false)
      }
    }

    return (
        <div className='flex items-center border border-[#E6E8EB] p-2 rounded-[6px]'>
            {type === "select" ? (
                <div className='flex items-center w-[265px]'>
                    <Icon icon={<Target />} />
                    <SelectScrollable label={label} value={value} onChange={onChange} />
                </div>
            ) : (
                <div className='flex items-center justify-center'>
                    <Icon icon={<CalendarIcon />} />
                    <div className="relative text-sm">
                        <Input
                            type="text"
                            value={value || label}
                            readOnly
                            className="w-[177px] cursor-pointer"
                            onClick={() => setCalendarOpen(!calendarOpen)}
                            placeholder={label}
                        />
                        {calendarOpen && (
                            <div className="absolute top-full left-0 z-10 bg-white outline-none">
                                <Calendar
                                    mode='single'
                                    selected={value ? new Date(value) : undefined}
                                    onSelect={handleDateChange}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Searchbar

export function SelectScrollable({label , value, onChange}: {label: string, value:string, onChange:(value:string)=>void}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className='bg-white mt-4 p-[0.5rem]'>

          {airports.map((airport) => (
            <SelectItem key={airport.code} value={airport.name} className='w-full'>
              
             <div className="flex items-start w-[150px] justify-between">
                <div className="flex flex-col items-start justify-start text-[0.9rem]">
                  <p>{airport.city}</p>
                  <p className="text-[#484a4db9] text-[0.8rem] mt-[-0.25rem]">
                    {airport.country}
                  </p>
                </div>
              
                <div className="flex items-start justify-end">
                  <p className='font-thin'>{airport.code}</p>
                </div>
             </div>

            </SelectItem>
          ))}

      </SelectContent>
    </Select>
  )
}
