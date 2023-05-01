import React, { useState } from 'react';

function Form1() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div className="border-4 border-gray-700 rounded-2xl p-10 m-2">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            // value={name}
            // onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Roll no:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rollno"
            type="number"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Roll no"
          /> 
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Student ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Studentid"
            type="string"
            // value={course}
            // onChange={(event) => setCourse(event.target.value)}
            placeholder="Enter Student ID"
          />
        </div>
        <div className="mb-10 flex items-center justify-center gap-2 md:gap-4">
          <p className="block text-gray-700 font-bold text-center">
            Share Coordinates (Required)
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="generateloc">
            Generate Location
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form1;
