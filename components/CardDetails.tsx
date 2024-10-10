import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function CardDetails() {
  return (
    <div className="w-[80%] h-full rounded-lg border border-[#E6E8EB] flex items-stretch justify-start">
        <div className="w-full flex flex-col px-5 py-2">

            <div className="flex items-start justify-between p-3">
                <div className="flex flex-col leading-6">
                    <p className='text-[#787B80] text-xs'>Emirates . AT 4334</p>
                    <h4 className='text-lg'>9:45 AM - 11:45 AM</h4>
                </div>

                <div className="flex items-start justify-between gap-[5rem]">
                    <div className="flex flex-col leading-6">
                        <p className='text-[#787B80] text-xs'>CDG-DXB</p>
                        <h4 className='text-lg'>2h 10min</h4>
                    </div>

                    <div className="flex flex-col leading-6">
                        <div className='invisible text-[#787B80] text-xs'>EJHlkfien</div>
                        <h4 className='text-lg'>Non Stop</h4>
                    </div> 
                </div>
            </div>

            <div className="flex items-start justify-between p-3">
                <div className="flex flex-col leading-6">
                    <p className='text-[#787B80] text-xs'>Lufthansa . AT 4334</p>
                    <h4 className='text-lg'>11:45 PM - 6:45 AM</h4>
                </div>

                <div className="flex items-start justify-between gap-[5rem]">
                    <div className="flex flex-col leading-6">
                        <p className='text-[#787B80] text-xs'>DXB-CDG</p>
                        <h4 className='text-lg'>4h 10min</h4>
                    </div>

                    <div className="flex flex-col leading-6">
                        <div className='text-[#787B80] text-xs'>6h 32min</div>
                        <h4 className='text-lg'>2h 10min</h4>
                    </div> 
                </div>
            </div>

            
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