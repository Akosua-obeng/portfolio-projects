import Header from "./Components/Header.js";
import Nav from "./Components/Nav.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import {useMediaQuery } from 'react-responsive';
import './App.css';
import { Route, Routes } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const isMobile = useMediaQuery({maxWidth: 700});

  return (
    <>
      {isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
