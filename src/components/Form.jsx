
import React from "react"

import "./Form.scss";

const Form = () => {
  return (
    <div className='backend'>
      <form name="register" method="POST" data-netlify="true"  >
        <input type="hidden" name="form-name" value="register" />
        <p>
          <input type="text" name="email" id="email" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </div>
  )
}

export default Form