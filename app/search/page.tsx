import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Page() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className="w-[80%] max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full border border-[#E6E8EB] flex">
          <div className="flex-grow flex">
            <div className="w-1/2 p-4 bg-gray-50">
              {/* First part */}
              <h3 className="text-lg font-semibold mb-4">Departure</h3>
              <div className="space-y-4">
                <FlightInfo airline="Emirates" times="10:00 - 14:00" />
                <FlightInfo airline="Lufthansa" times="12:30 - 16:45" />
              </div>
            </div>
            <div className="w-1/2 p-4">
              {/* Second part */}
              <h3 className="text-lg font-semibold mb-4">Flight Details</h3>
              <div className="space-y-4">
                <FlightDetails airline="Emirates" stops="Non Stop" />
                <FlightDetails airline="Lufthansa" stops="2 Stops" />
              </div>
            </div>
          </div>
          <Separator orientation="vertical" className='h-auto bg-gray-200'/>
          <div className="w-1/5 p-4 bg-gray-50 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="font-medium">From $599</p>
              <p className="text-sm text-gray-600">Flight number: AB123</p>
            </div>
            <Button className="w-full mt-4">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FlightInfo({ airline, times } : {airline: string, times: string}) {
  return (
    <div className="flex flex-col">
      <span className="font-medium">{airline}</span>
      <span className="text-sm text-gray-600">{times}</span>
    </div>
  )
}

function FlightDetails({ airline, stops } : {airline: string, stops: string}) {
  return (
    <div className="flex justify-between">
      <span className="font-medium">{airline}</span>
      <span className="text-sm text-gray-600">{stops}</span>
    </div>
  )
}

export default Page