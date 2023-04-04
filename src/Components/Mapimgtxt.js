import React from 'react'
import map from '../assets/mapImg.png'

function Mapimgtxt() {
  return (
    <>
        <div className='m-12 '>
            <div className=''>
                <h3>Create your class in few clicks</h3>
                <p>Share location Feature will help you to monitor attendance of class attendees</p>
                <img 
                    className='transform h-80 w-80' 
                    src={map}
                    alt='map'
                />
            </div>
        </div>
    </>
  )
}

export default Mapimgtxt
