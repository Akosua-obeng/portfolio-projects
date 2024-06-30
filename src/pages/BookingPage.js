import BookingForm from "../Components/BookingForm";
import "./bookingPage.css"
import "../Components/Compo.css"
import chef1 from "../assets/chef1.png";

function BookingPage({availableTimes, dispatch}){

  return(
    <>
      <section className="Section"  >
        <article style={{marginLeft:"5pc"}} >
          {/* <h3 className="little-lemon">PRIVATE MOMENTS</h3> */}
        </article>
      </section>
      <div class="right-col">
        <h3>BOOK A TABLE</h3>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </div>
      
      
    </>
  )
}
export default BookingPage;