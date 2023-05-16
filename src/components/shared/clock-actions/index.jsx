import React, { useState } from 'react'
import ClockForm from '../clock-form/index'

const ClockActions = ({ local=false, clock,updateClock,creatClock ,deleteClock}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  // console.log(clock)
  const handleClock=(value)=>{
    creatClock(value)
  }
  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>

      {local ? <button onClick={() => setIsCreate(!isCreate)}>Create</button> : <button onClick={()=>deleteClock(clock.id)}>Delete</button>}


      {isEdit && <>
        <h3>Edit Clock</h3>
        <ClockForm handleClock={updateClock} edit={true} title={!local} value={clock}/>
      </>}

      {isCreate && <>
        <ClockForm handleClock={handleClock} />
      </>}

    </div>



  )
}

export default ClockActions