import { Subject } from '@mui/icons-material';
import React, { useState, useEffect, Component } from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate, useLocation } from 'react-router';
import yaml from 'js-yaml';
import { toast } from 'react-toastify'; 

function Form1() {
        
  const navigate = useNavigate();
      
  const [classData, setData] = useState({
    name: '', 
    email: '', 
    admin_id: '',
    course: '', 
    section: '', 
    subject: '', 
    subjectCode: '', 
    radius: 0.0,
    latitude: 0.0, 
    longitude: 0.0
  });      

  useEffect(() => { 
    navigator.geolocation.getCurrentPosition((position) => {
      setData(prevData => ({
        ...prevData, 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }));
    });
  }, []);
  
  function toStudentForm(e) {
    e.preventDefault(); 

    fetch(`/generate-link/${classData.admin_id}`)
      .then(response => response.json())
      .then(data => {
        navigator.clipboard.writeText(data.link)
        .then(() => {
          toast.success("Class link has been copied!");
        })
        .catch(err => {
          toast.error("Could not copy unique link to clipboard: ", err);
        }) 
      })
      .catch(err => {
        console.error("Could not generate unique link: ", err);
      })
  }

  function handleSubmit(e) {
    e.preventDefault();        
    const yamlData = yaml.dump(classData)
    fetch('/class-data', { 
      method : 'POST', 
      headers : { 
        'Content-type' : 'application/x-yaml'
      }, 
      body: yamlData,
    }) 
    .then((res) => res.text())
    .then((result) => {
      console.log(result); 
    })
    .catch((err) => { 
      console.error(err); 
    })
  }

  return (
    <>  
      <form onSubmit={handleSubmit} className="my-8 max-w-md mx-2">
              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={classData.name}
                  onChange={(e) => setData({...classData, name: e.target.value})}
                  placeholder="Enter your name"
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={classData.email}
                  onChange={(e) => setData({...classData, email: e.target.value})}
                  placeholder="Enter your email"
                />
              </div>
              {/* ID */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                  Admin-ID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Admin_id"
                  type="text"
                  value={classData.admin_id}
                  onChange={(e) => setData({...classData, admin_id: e.target.value})}
                  placeholder="Enter Admin ID"
                />
              </div>
              {/* Course */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Course:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="course"
                  type="text"
                  value={classData.course}
                  onChange={(e) => setData({...classData, course: e.target.value})}
                  placeholder="Enter Course"
                />
              </div>
              {/* Section */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Section:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="section"
                  type="text"
                  value={classData.section}
                  onChange={(event) => setData({...classData, section: event.target.value})}
                  placeholder="Enter Section"
                />
              </div>
              {/* Subject */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Subject:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  value={classData.subject}
                  onChange={(event) => setData({...classData, subject: event.target.value})}
                  placeholder="Enter Subject"
                />
              </div>
              {/* Subject Code */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Subject Code:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subjectcode"
                  type="text"
                  value={classData.subjectCode}
                  onChange={(event) => setData({...classData, subjectCode: event.target.value})}
                  placeholder="Enter Subject Code"
                />
              </div>
              {/* Max Radius */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Max Radius(in meter):
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="maxradius"
                  type="number"
                  value={classData.radius}
                  onChange={(event) => setData({...classData, radius: parseFloat(event.target.value)})}
                  placeholder="Enter Max Radius"
                />
              </div>
              <div className="flex items-center justify-center gap-8">
                {/* Copy Student Form link */}
                <div className="mt-6 flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={toStudentForm}>
                    <ContentPasteIcon className="mt-3/5 h-5 w-5 fill-white" /> 
                    Generate Class Link
                  </button>
                  {/* <div className="fixed bottom-4 right-4 z-50">
                    {isLinkCopied && 
                    <div className="bg-green-500 text-white text-sm py-2 px-4 rounded shadow">        
                      {flashMessage}
                    </div>
                    }
                  </div> */}
                </div>
                {/* Submit */}
                <div className="mt-6 flex items-center justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                  </button>
                </div>
              </div>
      </form>
    </>
  )
}
    
export default Form1
