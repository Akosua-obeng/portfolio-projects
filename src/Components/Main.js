import { Route, Routes } from "react-router-dom"
import { useEffect,useReducer, useState } from "react"

//pages
import Home from "../pages/Home.js"
import About from "../pages/About.js"
import Menu from "../pages/Menu.js"
import BookingPage from "../pages/BookingPage.js"
import OnlineOrder from "../pages/OnlineOrder.js"
import Login from "../pages/Login.js"
import BookingForm from "./BookingForm.js"


function Main(){

  // function to update availableTimes based on selected date
  function updateTimes(state, action){
    if(action.selectedDate === "2024-03-19"){
      return {...state ,times: ['16:00', '17:00', '18:00', '19:00', '21:00', '22:00']};
    }
    if(action.selectedDate === "2024-02-14"){
      return {...state, times: ['16:00', '17:00', '18:00', '19:00']};
    }
    return state;
  }

  // function to initialize availbleTimes state
  const initializeTimes = () => {
    return {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  }

  // //updating initialize times
  // const fetchData = () => {
  //   fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
  //   .then((response) => response.json())
  //   .then(data => console.log(data))
  // }
  // useEffect(() =>{
  //   fetchData()
  // },[])

  // useReducer hook
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // useEffect(() =>{
  //   dispatch({selectedDate: "20-02-2024"})
  // }, [])

  // useEffect(() =>{
  //   console.log("available times", availableTimes)
  //   dispatch({selectedDate: "20-02-2024"})
  // }, [])


  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route
          path="/Reservation"
          element={
          <BookingPage 
          availableTimes={availableTimes} 
          dispatch={dispatch}  />}
        />
        <Route path="/OnlineOrder" element={<OnlineOrder/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default Main;