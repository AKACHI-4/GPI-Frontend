import { Subject } from '@mui/icons-material';
import React, { useState, useEffect, Component } from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate } from 'react-router';

function Form1() {
    
  const navigate = useNavigate();
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectCode, setSubCode] = useState('');
  const [radius, setRadius] = useState('');

  function toStudentForm(e) {
    console.log(e); 
    console.log('Student Form');
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    console.log(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Course: ' + course + '\n' +
      'Section: ' + section + '\n' 
    )
    console.log(e); 
  };

  return (
      <>  
        <form onSubmit={handleSubmit} class="my-8 max-w-md mx-auto">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={course}
              onChange={(e) => setCourse(e.target.value)}
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
              value={section}
              onChange={(event) => setSection(event.target.value)}
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
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
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
              value={subjectCode}
              onChange={(event) => setSubCode(event.target.value)}
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
              value={radius}
              onChange={(event) => setRadius(event.target.value)}
              placeholder="Enter Max Radius"
            />
          </div>
          <div class="flex items-center justify-center gap-8">
            <div class="mt-6 flex items-center justify-center">
              <button class="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={toStudentForm}>
                <ContentPasteIcon class="mt-3/5 h-5 w-5 fill-white" /> 
                Generate Class Link
              </button>
            </div>
            <div class="mt-6 flex items-center justify-center">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    )
}

export default Form1
