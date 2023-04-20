import { useState } from "react";
import "./App.css";

const initialData = {
  name: '',
  address: '',
  phone: '',
  email: '',
  complaint: '',
  contact: '',
  consent: false,
}

export default function App() {
  
  //TODO: Add your state fields here

  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')
  const [contactType, setContactType] = useState(null)
  const [consent, setConsent] = useState(false)

  // Or create one object to hold all the values
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox')
      setFormData({...formData, [name]: checked })
    else
      setFormData(Object.assign({}, formData, { [name]: value }))

    // Object.assign({}, obj, obj2, ...) === {...obj1, ...obj2, ...}
  }

  return (
    <>
      <form className="form" onSubmit={(e) => {
            e.preventDefault()
            console.log(formData)
          }}
      >
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required 
              onChange={e => { handleChange(e) }} 
            />
          </label>
          <label>
            Address
            <input type="text" name="address" 
              onChange={e => { handleChange(e) }} 
            />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone"
              onChange={e => { handleChange(e) }} 
            />
          </label>

          <label>
            Email
            <input type="email" name="email"
              onChange={e => { handleChange(e) }} 
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
              onChange={e => { handleChange(e) }} 
            ></textarea>
          </label>

          <div className="form__radio-group" onChange={(e) => {
              handleChange(e)
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
                handleChange(e)
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
