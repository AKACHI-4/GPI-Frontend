  import React, { useState, useEffect } from 'react';
  import yaml from 'js-yaml';
  import { useNavigate } from 'react-router';

  function Form2() {
    
    const navigate = useNavigate(); 
    
    const [studentData, setData] = useState({
      name: '',
      rollno: 0, 
      studentid: '',
      latitude: 0.0, 
      longitude: 0.0
    })

    useEffect(() => { 
      navigator.geolocation.getCurrentPosition((position) => {
        setData(prevData => ({
          ...prevData, 
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude
        }));
      });
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();

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
        <form onSubmit={handleSubmit} className="relative border-4 border-gray-700 rounded-2xl p-10 px-6 w-11/12 lg:w-3/12">
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="rollno"
              type="text"
              value={studentData.rollno}
              onChange={(e) => setData({...studentData, rollno: e.target.value})}
              placeholder="Enter Roll no"
              inputMode="numeric"
              style={{ MozAppearance: "textfield", appearance: "textfield" }}
              pattern="[0-9]*"
            /> 
          </div>
          {/* Student ID */}
          <div className="mb-12">
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

  export default Form2