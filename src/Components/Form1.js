import React, { useState } from 'react';

function Form1() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted!");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      // Do something with the form data, such as sending it to a server or updating state
    };

  return (
    <>  
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form1
