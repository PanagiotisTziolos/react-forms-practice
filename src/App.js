import { useState } from "react";
import "./App.css";

export default function App() {
  
  //TODO: Add your state fields here

  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')
  const [contactType, setContactType] = useState(null)
  const [consent, setConsent] = useState(false)


  return (
    <>
      <form className="form" onSubmit={(e) => {
            e.preventDefault()
            console.log(
              {
                fullName, 
                address,
                phone,
                email,
                complaint,
                contactType,
                consent
              }
            )
          }}
      >
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required 
              onChange={e => { setFullName(e.target.value) }} 
            />
          </label>
          <label>
            Address
            <input type="text" name="address" 
              onChange={e => { setAddress(e.target.value) }} 
            />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone"
              onChange={e => { setPhone(e.target.value) }} 
            />
          </label>

          <label>
            Email
            <input type="email" name="email"
              onChange={e => { setEmail(e.target.value) }} 
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={e => { setComplaint(e.target.value) }} 
            ></textarea>
          </label>

          <div className="form__radio-group" onChange={(e) => {
              setContactType(e.target.value)
            }}
          >
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={(e) => {
                setConsent(e.target.checked)
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
