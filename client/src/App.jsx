import { useState } from 'react'
import './Components/Style.css'
import Signup  from './Components/Signup'
import Login  from './Components/Login'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  

  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
