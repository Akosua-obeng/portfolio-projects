import logo from "../assets/logo.png";
import Nav from "../Components/Nav.js";
import "./Compo.css";
import { Link } from 'react-router-dom';

function Header(){
  return(
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" class="logo"/>
        </Link>
        
        <Nav/>
      </header>
    </>
  )
};

export default Header;