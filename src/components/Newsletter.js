import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <div>
            <h4>OUR NEWSLETTER</h4>
            <h3>Stay updated with our weekly newsletter</h3>
            <p>a collection of the hottest stock market news sent every week to your email</p>
        </div>
        <div>
            <h4>OUR NEWSLETTER</h4>
            {/* onSubmit={handleSubmit(onSubmitForm)} */}
            <form >
                <input type="email" name="email" placeholder="Your Email Address"/><br/>
                <input  type='submit' value= 'Get Started'/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter