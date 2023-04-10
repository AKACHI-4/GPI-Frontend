import { Subject } from '@mui/icons-material';
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
      <form onSubmit={handleSubmit} class="mt-4 max-w-md mx-auto">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            // value={name}
            // onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Course:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="course"
            type="text"
            // value={course}
            // onChange={(event) => setCourse(event.target.value)}
            placeholder="Enter Course"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Section:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="section"
            type="text"
            // value={section}
            // onChange={(event) => setName(event.target.value)}
            placeholder="Enter Section"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Subject:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            // value={subject}
            // onChange={(event) => setName(event.target.value)}
            placeholder="Enter Subject"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Subject Code:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subjectcode"
            type="text"
            // value={subjectcode}
            // onChange={(event) => setName(event.target.value)}
            placeholder="Enter Subject Code"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Max Radius(in meter):
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="maxradius"
            type="text"
            // value={maxradius}
            // onChange={(event) => setName(event.target.value)}
            placeholder="Enter Max Radius"
          />
        </div>
        <div class="mt-6 flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default Form1
