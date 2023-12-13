import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="col-span-11 p-2 m-2">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer