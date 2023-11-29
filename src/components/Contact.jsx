import React from 'react'
// import '../styles/contact.scss'
// import '../styles/media.scss'

function Contact() {
  return (
    <div className='contact'>
     <main>
        <h1>Contact Us</h1>
        <form >

          <div>
            <label >Name</label>
            <input type="text"  required placeholder='abc'/>
          </div>
          <div>
            <label >Email</label>
            <input type="email"  required placeholder='abc@xyz.com'/>
          </div>
          <div>
            <label >Message</label>
            <input type="text"  required placeholder='Tell Us about your Query ....'/>
          </div>
        <button type="submit">Send</button>
        </form>

     </main>
    </div>
  )
}

export default Contact
