import footerlogo from "../assets/footerlogo.png";
import {Link} from "react-router-dom";

function Footer(){
  return(
    <footer style={{
      display:"flex"
    }}>
      <img src={footerlogo} alt="footerlogo"/>
      <div>
        <h3>Doormat navigation</h3>
        <ul>
          <li><Link to="/" className="link">HOME</Link></li>
          <li><Link to="/About" className="link">ABOUT</Link></li>
          <li><Link to="/Menu" className="link">MENU</Link></li>
          <li><Link to="/Reservation" className="link">RESERVATION</Link></li>
          <li><Link to="/Online Order" className="link">ONLINE ORDER</Link></li>
          <li><Link to="Login" className="link">LOGIN</Link></li>
        </ul>
      </div>
      <section>
        <article>
          <h3>Contact</h3>
          <p>Chicago</p>
          <p>+123 456 7890</p>
          <p>info@littlelemon.com</p>
        </article>
        <article>
          <h3>Social media links</h3>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-snapchat"></i>
        </article>
      </section>
    </footer>
  )
}

export default Footer;