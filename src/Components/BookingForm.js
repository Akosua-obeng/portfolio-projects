import { useEffect, useState } from "react";
import "./bookingForm.css";
import dinning from "../assets/dinning.png";



const BookingForm = () => {
  
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState('')

  

  const getIsFormValid = () => { 
    return ( 
      name && 
      phoneNumber.value.length >= 10 && 
      email && 
      date &&
      guests &&
      occasion 
    ); 
  }; 
  
  const clearForm = () => { 
    setName(""); 
    setPhoneNumber(""); 
    setEmail(""); 
    setDate(""); 
    setGuests("1"); 
    setOccasion("Birthday")
  }; 
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Table booked, you will soon receive an email with your details"); 
    clearForm(); 
  }; 

  
  return(
    <>
      <form onSubmit={handleSubmit}>
          <div>
            <label for="res-name">Name</label>
            <input type="text" id="res-name" required value={name} onChange={e => setName(e.target.value)}></input>
          </div>
          <div>
            <label for="res-phone">Phone Number</label>
            <input type="number" id="res-time" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
          </div>  
        

        
          <div>
            <label for="res-email">Email</label>
            <input type="email" id="res-email" required value={email} onChange={e => setEmail(e.target.value)}></input>
          </div>

          <div>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)}></input>
          </div>
        
        
      
          <div>
            <label for="res-time">Choose time</label>
            <select id="res-time" value={availableTimes} onChange={e => setAvailableTimes(e.target.value)}>
              <option>12:00</option>
              <option>13:00</option>
              <option>15:00</option>
              <option>17:00</option>
            </select>
          </div>
          
          <div>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}></input>
          </div>
        

        <div>
          <label for="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        
        <input type="submit" value="Make Your reservation" disabled={!getIsFormValid}></input>
      </form>
    </>
  )
}

export default BookingForm;