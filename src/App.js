import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';



function App() {

  return (
    <BrowserRouter>
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
