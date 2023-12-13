import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='grid grid-flow-col m-2 p-2'>
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body