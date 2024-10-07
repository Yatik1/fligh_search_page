"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

function page() {

  const router = useRouter()
  return (
    <div>
        Searched

   <button onClick={() => router.push('/search/result')}>Go to Result</button>
    </div>
  )
}

export default page