import React from 'react'
import ClockDisplay from '../shared/clock-dilsplay'
import ClockActions from '../shared/clock-actions'
import useClock from '../../hooks/useClock'

const ClockListItem = ({ clock,updateClock,deleteClock}) => {
    

    const { date, offset, timezone } = useClock(clock.timezone, clock.offset)
    if (!date) return null;

    return (<>
    {date&& <ClockDisplay title={clock.title} date={date} offset={offset} timezone={timezone} />}
        
        <ClockActions deleteClock={deleteClock} updateClock={updateClock} clock={clock}/>
    </>

    )
}

export default ClockListItem