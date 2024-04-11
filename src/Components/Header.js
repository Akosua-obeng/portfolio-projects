import logo from "../assets/logo.png";
import Nav from "../Components/Nav.js";
import "./Compo.css";

function Header(){
  return(
    <>
      <header>
        <img src={logo} alt="logo" class="logo"/>
        <Nav/>
      </header>
    </>
  )
};

export default Header;