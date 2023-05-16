
import { TIMEZONE_OFFSET } from "../constants/timezone"
export const getOffset=(start=-11.5,ending=12)=>{

    const offset=[]
    for(let i=start;i<=ending;i+=0.5){
        offset.push(i)
    }
    return offset
}
export const getTimezone=()=>{
    return ['UTC','GMT',...Object.keys(TIMEZONE_OFFSET)]
}