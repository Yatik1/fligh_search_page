"use client"
import React, { useState } from 'react'
import Icon from './Icon'
import { Calendar as CalendarIcon, Target } from 'lucide-react'
import { airports } from '@/data'

import { Calendar } from './ui/calendar'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const Searchbar = ({label,type}: {label: string, type: "select" | "date"}) => {
 
    const [date, setDate] = useState<Date | undefined>();
    const [calendarOpen, setCalendarOpen] = useState(false);

    return (
        <div className='flex items-center gap-2 border border-[#E6E8EB] p-2 rounded-[6px]'>
            {type === "select" ? (
                <>
                    <Icon icon={<Target />} />
                    <SelectScrollable label={label} />
                </>
            ) : (
                <div className='flex items-center justify-center py-1'>
                    <Icon icon={<CalendarIcon />} />
                    <div className="relative text-sm">
                        <input
                            type="text"
                            value={date ? date.toLocaleDateString() : label}
                            readOnly
                            className="w-[250px] cursor-pointer"
                            onClick={() => setCalendarOpen(!calendarOpen)}
                            placeholder={label}
                        />
                        {calendarOpen && (
                            <div className="absolute top-full left-0 z-10 bg-white outline-none">
                                <Calendar
                                    mode='single'
                                    selected={date}
                                    onSelect={(newDate) => {
                                        setDate(newDate);
                                        setCalendarOpen(false);
                                    }}
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

export function SelectScrollable({label}: {label: string}) {
  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className='bg-white'>

          {airports.map((airport) => (
            <SelectItem key={airport.code} value={airport.code}>
              {airport.name}
            </SelectItem>
          ))}

      </SelectContent>
    </Select>
  )
}
