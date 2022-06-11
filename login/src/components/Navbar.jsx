import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/Login/Action'

const Navbar = () => {
    const {isAuth}=useSelector((state)=>state.Login)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const HandleLogout=()=>{
         dispatch(logout())
         navigate("/login")
    }

    console.log(isAuth)

  return (
    <div style={{display:"flex",gap:"100px",marginLeft:"50px",justifyContent:"center",marginBottom:"100px"}}>
        <Link to="/">Logo</Link>
        <Link to="/login">Login</Link>
        <button onClick={HandleLogout}>{isAuth ? "Logout":"Login"}</button>
    </div>
  )
}

export default Navbar