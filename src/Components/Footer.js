import footerlogo from "../assets/footerlogo.png";
import {NavLink} from "react-router-dom";

function Footer(){
  return(
    <footer style={{
      display:"flex"
    }}>
      <img src={footerlogo} alt="footerlogo"/>

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