import { Route, Routes } from "react-router-dom"
import { useEffect,useReducer, useState } from "react"
import { fetchAPI } from './api'; 
//pages
import Home from "../pages/Home.js"
import About from "../pages/About.js"
import Menu from "../pages/Menu.js"
import BookingPage from "../pages/BookingPage.js"
import OnlineOrder from "../pages/OnlineOrder.js"
import Login from "../pages/Login.js"
import BookingForm from "./BookingForm.js"


function Main(){


  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route
          path="/Reservation"
          element={
          <BookingPage   />}
        />
        <Route path="/OnlineOrder" element={<OnlineOrder/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default Main;