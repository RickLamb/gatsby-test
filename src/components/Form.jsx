
import React from "react"

import "./Form.scss";

const Form = () => {
  return (
    <div className='backend'>
      <form name="register" netlify >
        <p>
          <label htmlFor="name">Your Name: <input type="text" id="name" name="name" /></label>
        </p>
        <p>
          <label htmlFor="email">Your Email: <input type="email" id="email" name="email" /></label>
        </p>
        <p>
          <input type='submit' value='Send' />
        </p>
      </form>
    </div>
  )
}

export default Form