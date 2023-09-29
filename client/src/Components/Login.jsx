import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [name,setName] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3002/login',{name,password})
    .then(result => {console.log(result)
      if(result.data === "success"){
        navigate('/home')
      }else{
        alert("sorry account not found")
      }
      })
    .catch(err => console.log(err))
  }
  return (
    
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} /> <br />
        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/> <br />
        <input type="submit" className="sub" />
        <h5>Create New Account?  <Link to="/">Signup</Link></h5>
      
      </form>
    </div>
   
  )
}

export default Login