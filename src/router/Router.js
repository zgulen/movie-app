import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieCard from '../components/MovieCard'
import Login from '../pages/Login'
import MovieDetails from "../pages/MovieDetail"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieCard />} />
        <Route path='/:id' element={<MovieDetails />} />
        <Route  path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router