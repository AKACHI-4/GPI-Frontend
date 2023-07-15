import React, { useState, useEffect } from "react";

function Classdetails() {
  const [classData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/getClassData")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {classData.length > 0 ? (
          classData.map((item) => (
            <li
              key={item._id}
              className="text-white font-bold text-xl leading-8"
            >
              <p>Course: {item.course}</p>
              <p>Section: {item.section}</p>
              <p>Subject: {item.subject}</p>
              <p>Subject Code: {item.subjectCode}</p>
              <p>Faculty Name: {item.name}</p>
            </li>
          ))
        ) : (
          <li className="text-white font-bold text-xl leading-8">
            No class data available
          </li>
        )}
      </ul>
    </div>
  );
}

export default Classdetails;
