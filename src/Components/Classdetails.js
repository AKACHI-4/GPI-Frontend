import React, { useState, useEffect } from 'react';

function Classdetails() {
  const [classData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/class-room')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <ul className='flex flex-col gap-2'>
        {/* {classData.map((item) => (
          <li className="text-white font-bold text-xl" key={item._id}>
            {Object.entries(item).map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))}
            {item.name}: {item.value}
          </li>

        ))} */}

        {classData.map((item) => (
          <li className="text-white font-bold text-xl" key={item._id}>
            <div>Course: {item.course}</div>
            <div>Section: {item.section}</div>
            <div>Subject: {item.subject}</div>
            <div>Subject Code: {item.subjectCode}</div>
            <div>Faculty Name: {item.name}</div>
          </li>
        ))}

        {/* <li className="text-white font-bold text-xl">Course :  </li>
        <li className="text-white font-bold text-xl">Section : </li>
        <li className="text-white font-bold text-xl">Subject : </li>
        <li className="text-white font-bold text-xl">Subject Code : </li>
        <li className="text-white font-bold text-xl">Faculty Name : </li> */}

      </ul>
    </div>
  );
}

export default Classdetails;
