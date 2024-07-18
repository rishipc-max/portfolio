import React from 'react';
import "./footer.css"; // Assuming you have a CSS file for styling


const Nl = () => {
  return (
    <div className='ty'>
        <form
          className='sub'
          action="https://gmail.us9.list-manage.com/subscribe/post?u=a1fe6b966f09af6cdf2c16697&amp;id=a18a5a1261&amp;f_id=002c2be1f0"
          method="POST"
          //className="contact__form"
        >
          <div className="form-container"> 
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="email-field"
                placeholder="Your Email"
                required
              />
            </div>
          
         <input type="submit" value="Subscribe" className="btn-newsletter" />
        </div>
        </form>
    </div>
  )
}

export default Nl