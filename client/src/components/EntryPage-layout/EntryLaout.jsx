import React from 'react'
import { Outlet } from 'react-router-dom'
function EntryLaout() {
  return (
    <div className='h-screen w-full'>
        <Outlet/>
    </div>
  )
}

export default EntryLaout