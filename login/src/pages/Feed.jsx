import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Getfeed } from '../store/Feed/Action'
const Feed = () => {
  const dispatch=useDispatch()
  const {data,loading,error}=useSelector((state)=>state.Feed.getFeed)

  

  useEffect(() => {
   if(data.length==0)
   {
    dispatch(Getfeed())
   }
  }, [])
  
if(loading)
{
  return <div>Loading....</div>
}
else if(error)
{
  return <div>Something Went Wrong</div>
}
  return (
    <div>
      HOME
        {data.map((e)=>{
          return <div key={e.id} style={{border:"1px solid black",width:"300px",margin:"auto"}}>
            <h4>{e.title}</h4>
            <h4>{e.description}</h4>
            </div>
        })}
    </div>
  )
}

export default Feed