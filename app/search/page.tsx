
import CardDetails from '@/components/CardDetails'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-y-5 mt-8 items-center justify-start'>
      
        <CardDetails />
        <CardDetails /> 
        <CardDetails />

    </div>
  )
}

export default page