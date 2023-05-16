import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";


const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

const useClock = (timezone, offset=0) => {
  const [localDate, setLocalDate] = useState(null);
  const [localTimeZone, setLocalTimeZone] = useState(null)
  const [localOffset, setLocalOffset] = useState(0)
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
   
    d = addMinutes(d, lo);
    
    
    setLocalOffset(lo)
   setUtc(d)
   
    
  }, []);



 


  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset
        const timezoneTime = addMinutes(utc, offset)
        
        setLocalDate(timezoneTime)
      
      } else {
        const mashinTime = addMinutes(utc, localOffset)
        const dateStrArr = mashinTime.toUTCString().split(' ')
        setLocalDate(mashinTime)
        setLocalTimeZone(dateStrArr.pop())
        
        
      }
    }
  }, [utc, timezone, offset])

  return {
    
    date: localDate,
    dateUtc: utc,
    timezone: timezone || localTimeZone,
    offset: offset || -localOffset
  }
};

export default useClock;