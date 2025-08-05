import React from 'react'

export default function Form() {
  return (
     <div>
      <h2>Form</h2>
      <br />
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <select>
        <option value="AP">AP</option>
        <option value="TN">TN</option>
        <option value="TG">TG</option>
      </select>
      <br />
      <label>
        <input type="radio" name="gender" value="m" /> Male
      </label>
      <label>
        <input type="radio" name="gender" value="f" /> Female
      </label>
      <br />
      <label>
        <input type="checkbox" name="accept" /> Contract Acceptance
      </label>
      <br/>
      <input type="submit" value="Submit" />
    </div>
  )
}
