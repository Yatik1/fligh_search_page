import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import CardSection from './CardSection'

function CardDetails() {
  return (
    <div className="w-[80%] h-full rounded-lg border border-[#E6E8EB] flex items-stretch justify-start">
        <div className="w-full flex flex-col px-5 py-2">

            <CardSection 
                airline="Emirates"
                flightNumber="4334"
                departureTime="9:45 AM"
                arrivalTime="11:45 AM"
                departureAirport="CDG"
                arrivalAirport="DXB"
                flightDuration="2h 10min"
                stop="Non Stop"
            />

            <CardSection
                airline="Lufthansa" 
                flightNumber='4334'          
                departureTime='11:45 PM'
                arrivalTime='6:45 AM'
                departureAirport='DXB'
                arrivalAirport='CDG'
                flightDuration='4h 10min'
                stopDuration='6h 32min, in P..'
                stop='2h 10min'
            />
            
        </div>

        <Separator orientation='vertical' className='h-auto' />

        <div className="w-[20%] flex flex-col items-start justify-end p-5 ">
            <div className='text-[#787B80] text-xs'>from</div>
            <h4 className='text-lg'>AED 2,456.90</h4>
            <Button className='w-full bg-[#003E39]'>Select</Button>
        </div>
    </div>

  )
}

export default CardDetails