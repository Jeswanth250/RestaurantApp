import React from 'react'
import '../styles/contact.css'

const Contact=()=>{
  return (
    <div className='contact'>
      <div className='leftSide'>
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contact-form' method="POST">
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter Full Name...' type='text'/>
          <label htmlFor='name'>Email Id</label>
          <input name='email' placeholder='Enter Email id...' type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea rows="6" placeholder='Enter Message...' name="message" required></textarea>
          <button type='submit'>Send Message</button>
        </form>
        
      </div>
    </div>
  )
}

export default Contact