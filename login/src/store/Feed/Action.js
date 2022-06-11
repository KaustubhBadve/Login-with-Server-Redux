import { ERROR_FEEDS, LOADING_FEEDS, SUCCESS_FEEDS } from "./Action.type"
import axios from 'axios'
export const Getfeed=()=>(dispatch)=>{
    dispatch({type:LOADING_FEEDS})

    axios.get("http://localhost:3003/feeds").then((r)=>{
        dispatch({type:SUCCESS_FEEDS,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:ERROR_FEEDS})
    })
}