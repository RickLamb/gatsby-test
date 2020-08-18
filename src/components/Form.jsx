
import React from "react"

import "./Form.scss";

const Form = () => {
  return (
    <div className='backend'>
      <form name="register" method="POST" netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha="true" >
        <input type="hidden" name="form-name" value="register" />
        <p className="hidden">
          <input name="bot-field" id="bot-field" />
        </p>
        <p>
          <input type="text" name="email" id="email" />
        </p>
        <div data-netlify-recaptcha="true" />
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </div>
  )
}

export default Form