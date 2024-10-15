import React from 'react'

interface CardSectionProps {
    airline: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    flightDuration: string;
    stopDuration?: string;
    stop: string;
}

const CardSection = ({ airline, flightNumber, departureTime, arrivalTime, departureAirport, arrivalAirport, flightDuration, stopDuration, stop }: CardSectionProps) => {
  return (
    <div className="flex items-start justify-between p-3">
                <div className="flex flex-col leading-6">
                    <p className='text-[#787B80] text-xs'>{airline} . AT {flightNumber}</p>
                    <h4 className='text-lg'>{departureTime} - {arrivalTime}</h4>
                </div>

                <div className="flex items-start justify-between gap-[5rem]">
                    <div className="flex flex-col leading-6">
                        <p className='text-[#787B80] text-xs'>{departureAirport}-{arrivalAirport}</p>
                        <h4 className='text-lg'>{flightDuration}</h4>
                    </div>

                    <div className="flex flex-col leading-6">
                        <div className={`${stopDuration ? 'visible' : 'invisible'} text-[#787B80] text-xs`}>
                            {stopDuration ? stopDuration : 'EJHlkfien'}
                        </div>
                        <h4 className='text-lg'>{stop}</h4>
                    </div> 
                </div>
    </div>
  )
}

export default CardSection