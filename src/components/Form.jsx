
import React from "react"

import "./Form.scss";

const Form = () => {
  return (
    <div className='backend'>
      <form name="register" method="POST" data-netlify="true" >
        <p>
          <label htmlFor="name">Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label htmlFor="email">Your Email: <input type="email" name="email" /></label>
        </p>

        <input placeholder='Poem title' name='title' />
        <input placeholder='Excerpt' name='excerpt' />
        <input placeholder='Poem author' name='author' />

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form