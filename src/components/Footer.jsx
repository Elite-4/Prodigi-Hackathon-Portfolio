import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer_div'>
    <p class="footer1">Reach out to us</p>
    <p class="footer">Contact us regarding any doubts and to know more about the idea or to just know us.
    We will ensure that we will get back to you as early as possible.</p>
    <form>
      <input class="text" type="text" name="" value="harsh.singh2020@vitbhopal.ac.in" disabled/>
      <button class="button" type="button">Send</button>
    </form>
    </div>
  )
}

export default Footer