import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='grid grid-flow-col m-2 p-2'>
        <Sidebar/>
        <Outlet/>  
        {/* MainCOntainer or videoCards */}
    </div>
  )
}

export default Body