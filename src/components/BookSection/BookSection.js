import React, { useRef } from 'react';
import './BookSection.css';

export default function BookSection() {
  const currentDate = new Date().toISOString().slice(0, 10);
  
  const formSubmissionStatusRef = useRef();
  const numberInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const phoneInputRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Validate number of people
    const numberOfPeople = parseInt(numberInputRef.current.value);
    if (numberOfPeople <= 0 || numberOfPeople > 9) {
      formSubmissionStatusRef.current.textContent = 'Invalid number of people';
      return;
    }

    // Gather form data
    const formData = {
      numberOfPeople,
      selectedDate: dateInputRef.current.value,
      selectedTime: timeInputRef.current.value,
      phoneNumber: phoneInputRef.current.value,
    };
    
    // Do something with formData (e.g., send to a backend server)
    console.log('Form data:', formData);
    
    // Reset form and submission status
    formSubmissionStatusRef.current.textContent = 'Form submitted successfully - We will call you for verification';
    event.target.reset();
  };

  return (
    <div className="BookSection">
      <h3>Book Your Table.</h3>
      <form className='form' onSubmit={handleFormSubmit}>
        <input
          className="bookInput"
          type="number"
          min={1}
          max={9}
          required
          pattern="[0-9]+"
          placeholder='Number of people'
          ref={numberInputRef}
        />
        <input
          className="bookInput"
          type="date"
          defaultValue={currentDate}
          ref={dateInputRef}
          required
        />
        <input
          className="bookInput"
          type="text"
          required
          placeholder='Time'
          ref={timeInputRef}
        />
        <input
          className="bookInput"
          type="tel"
          pattern="[0-9]*"
          required
          placeholder='Phone'
          title="Enter only digits for the phone number"
          ref={phoneInputRef}
        />
        <button className='bookInput' type="submit">Book</button>
      </form>
      {formSubmissionStatusRef && <div className="formStatus" ref={formSubmissionStatusRef}></div> }
    </div>
  );
}
