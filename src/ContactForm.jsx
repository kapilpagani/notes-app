import React from 'react'
import Header from './Header';

const ContactForm = () => {
  return (
    <>
    <Header />
    <div className='container' style={{border: '5px solid green'}}> 
    <h1 className='mt-5 text-center'>Name : Komal Jamnani</h1> 
    <h2 className='mt-3 text-center'>Email Address: KJAMNANI95@GMAIL.COM</h2>
    <h2 className='my-3 text-center'>University Name: The Maharaja Sayajirao University of Baroda</h2>
  </div>
  </>
  )
}

export default ContactForm;
