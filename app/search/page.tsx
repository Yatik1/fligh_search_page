"use client"

import { SearchContextType, useSearchContext } from '@/utils/SearchContext'
import React from 'react'

function page() {

    const {whereFrom,whereTo,departure,returnDate} = useSearchContext() as SearchContextType

  return (
    <div>
        <h1>Search page</h1>
        <p>Where from: {whereFrom}</p>
        <p>Where to: {whereTo}</p>
        <p>Departure: {departure}</p>
        <p>Return date: {returnDate}</p>    
    </div>
  )
}

export default page