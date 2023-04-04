import React from 'react'
import Mapimgtxt from '../Components/Mapimgtxt'
import Form1 from '../Components/Form1'

function ClassForm() {
  return (
    <>
        <div className="my-6">
            <div className='md:flex md:space-x-8'>
                <div className='grid md:grid-cols-2 gap-5 md:w-full'>
                    <div className=''>
                        <Mapimgtxt />
                    </div>
                    <div>
                        <Form1 />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ClassForm
