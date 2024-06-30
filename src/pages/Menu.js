import "../Components/Compo.css";
import greeksalad from "../assets/greeksalad.png"
import bruschetta from "../assets/bruschetta.png"
import lemondesert from "../assets/lemondesert.png"
import pita from "../assets/pita.png"
import pasta from "../assets/pasta.jpg"
import falafel from "../assets/falafel.png"

function Menu(){
  return(
    <>
      <div className="menu-background">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-content">
        <h2>Special Menu Offer</h2>
        <p>
        Join us this week for an exclusive culinary 
        delight! Enjoy a 3-course gourmet meal at a 
        special price of just $29.99. Indulge in our 
        chef’s handpicked selections, including a 
        delightful appetizer, a mouth-watering main 
        course, and a decadent dessert. Hurry, this 
        offer is available for a limited time only. 
        Reserve your table now and treat yourself to 
        an unforgettable dining experience!📞 Call us 
        at +123 456 8900 to book your table today! 📞Bon 
        appétit! 🍽️✨
        </p>
      </div>
      <div className="menu-articles">
        <article>
          <img src={pasta} alt="image"/>
          <div>
            <h4>Pasta</h4>
            <p>$12.00</p>
          </div>
        </article>
        <article>
          <img src={greeksalad} alt="image"/>
          <div>
            <h4>Greek Salad</h4>
            <p>$12.00</p>
          </div>
        </article>
        <article>
          <img src={bruschetta} alt="image"/>
          <div>
            <h4>Bruschetta</h4>
            <p>$12.00</p>
          </div>
        </article>
        <article>
          <img src={lemondesert} alt="image"/>
          <div>
            <h4>Lemon Desert</h4>
            <p>$12.00</p>
          </div>
        </article>
        <article>
          <img src={pita} alt="image"/>
          <div>
            <h4>Pita Bread</h4>
            <p>$12.00</p>
          </div>
        </article>
        <article>
          <img src={falafel} alt="image"/>
          <div>
            <h4>Falafel</h4>
            <p>$12.00</p>
          </div>
        </article>
      </div>
    </>
  )
}
export default Menu;