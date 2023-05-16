import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from '../shared/clock-dilsplay/index'
import ClockActions from "../shared/clock-actions/index";


const LocalClock = ({ clock, updateLocalClock, creatClock }) => {
    // console.log(clock)

    const { date, offset, timezone } = useClock(clock.timezone, clock.offset)


    useEffect(()=>{
           
    },[date,offset,timezone])




    return <div>

        {date && (<ClockDisplay date={date} offset={offset} timezone={timezone} title={clock.title} />)}
        <ClockActions  creatClock={creatClock} local={true} clock={clock} updateClock={updateLocalClock} />

    </div>;
};

export default LocalClock;