import React from 'react'
import Details from '../Components/Details'
import Attendeeslist from '../Components/Attendeeslist'

function classroom() {
  return (
    <div className="flex flex-row bg-transparent w-full overflow-hidden justify-center gap-8 p-6">
      <Details/>
      <Attendeeslist />

    </div>
  )
}

export default classroom;
