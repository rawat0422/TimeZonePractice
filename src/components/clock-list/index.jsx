import React from 'react'
import ClockListItem from '../clock-list-item/clock-llist-item'

const ClockList = ({clocks,updateClock,deleteClock}) => {
  return <div>
  Other Clocks
  <hr />

  {clocks.length === 0 ? (
    <p>There is no clock, please create one</p>
  ) : (
    <div>
      {clocks.map((clock) => (
        <ClockListItem
          key={clock.id}
          clock={clock}
          updateClock={updateClock}
          deleteClock={deleteClock}

        />
      ))
      
      }
    </div>
  )}
</div>;
}

export default ClockList