import { useState } from "react"
import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import { generate } from "shortid"

const initialClock = {
  timezone: '',
  title: 'Locak Clock',
  offset: 0,
  date: null
}



function App() {
  const [state, setState] = useState({ ...initialClock })
  const [clocks, setClocks] = useState([])
  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
    	if (clock.id === updatedClock.id) {
    		return updatedClock;
    	}
    	return clock;
    });
    console.log(updatedClocks)
    setClocks(updatedClocks);
    console.log(updatedClock)
   
  };
  const updateLocalClock = (data) => {
    setState({
      ...state,
      ...data
    })
  }
  const deleteClock=(id)=>{
    const deletedClocks=clocks.filter((clock)=>clock.id!==id)
      
    setClocks(deletedClocks)
  
  }
  const createClock = (clock) => {
    clock.id = generate()

    setClocks([...clocks, clock])

  }





  return <div>
    <LocalClock clock={state} creatClock={createClock} updateLocalClock={updateLocalClock} />
    <ClockList deleteClock={deleteClock} updateClock={updateClock} clocks={clocks} />
  </div>



}

export default App
