import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AddRecipe from './components/AddRecipe.jsx'
import Profile from './components/Profile.jsx'
import Saved from './components/Saved.jsx'
import FetchRecipeById from './components/FetchRecipeById.jsx'
import Detail from './components/Detail.jsx'

const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/add' element={<AddRecipe/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/:id' element={<FetchRecipeById/>} />
        <Route path='/:id' element={<FetchRecipeById/>} />
    </Routes>
  </BrowserRouter >
    </>
  )
}
export default App