import React, { useState, useEffect } from "react";
import "../styles/global.css";


function Form() {
    const [formData, setFormData] = useState({ continue: true, name: "" });


    const handleInputChange = event => {
        console.log(formData);
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // const name = event.target.name;
        // const value = event.target.value;
    
        // 3. expand the functionality to check for inputs on the password field
        if (name === "firstName") {
          setFormData({ firstName: value, lastName: formData.lastName, password: formData.password });
        } else if (name === "surname") { // must be the lastName field
          setFormData({ firstName: formData.firstName, lastName: value, password: formData.password });
        } else {
          if (value.length < 15) {
            setFormData({ firstName: formData.firstName, lastName: formData.lastName, password: value });
          // This makes it so you cannot type in the box when it exceeds 14 characters
          }
        }
      };
    
      const handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    
        // 5. add validation logic here (first name exists, last name exists, password is long enough)
        if (!formData.firstName || !formData.lastName) {
          alert("WHO IS THIS?!??!?!?");
        } else if (formData.password.length < 6) {
          alert(`Choose a more secure password, ${formData.firstName} ${formData.lastName}`);
        } else {
          alert(`Hello ${formData.firstName} ${formData.lastName}. Your password is ${formData.password}`);
          setFormData({
            firstName: "",
            lastName: "",
            password: ""
          });
        }
        // 4. add password handling here
      };
    
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
          <p>
            Hello {formData.firstName} {formData.lastName}
          </p>
          <form className="form">
            <input
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={formData.lastName}
              name="surname"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              type="text"
              placeholder="PaSsWoRd"
            />
            {/* DONE: copy one of these input blocks and make it a password */}
            <button onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
      );
    }
    
    export default Form;




