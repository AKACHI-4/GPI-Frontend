import React, { useState } from 'react';
import yaml from 'js-yaml';
import { useNavigate } from 'react-router';

function Form1() {

  const [studentData, setData] = useState({
    name: 'name',
    rollno: 'rollno', 
    studentid: 'studentid'
  })

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(studentData);

    const yamlData = yaml.dump(studentData);

    fetch('/student-data', { 
      method : 'POST', 
      headers : { 
        'Content-type' : 'application/x-yaml'
      }, 
      body: yamlData,
    }) 
    .then((res) => res.json())
    .then((result) => {
      console.log(result); 
    })
    .catch((err) => { 
      console.error(err); 
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={studentData.name}
            onChange={(e) => setData({...studentData, name: e.target.value})}
            placeholder="Enter your name"
          />
        </div>
        {/* Roll No */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Roll no:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rollno"
            type="number"
            value={studentData.rollno}
            onChange={(e) => setData({...studentData, rollno: e.target.value})}
            placeholder="Enter Roll no"
          /> 
        </div>
        {/* Student ID */}
        <div className="mb-8">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Student ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Studentid"
            type="string"
            value={studentData.studentid}
            onChange={(e) => setData({...studentData, studentid: e.target.value})}
            placeholder="Enter Student ID"
          />
        </div>
        {/* Location Generate */}
        <div className="mb-10 flex items-center justify-center gap-2 md:gap-4">
          <p className="block text-gray-700 font-bold text-center">
            Share Coordinates (Required)
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="generateloc">
            Generate Location
          </button>
        </div>
        {/* Submit */}
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default Form1;
