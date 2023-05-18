import React, {useState, useEffect} from 'react'
import yaml from 'js-yaml';

function Classdetails() {

  const [classData, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('/class-room')
      .then((res) => res.text())
      .then((data) => {
        const parsedData = yaml.load(data)
        setData(parsedData)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div>
      <ul className='flex flex-col gap-2'>

        {Array.isArray(classData) &&
          classData.map((item) => (
            <li className="text-white font-bold text-xl" key={item._id}>
              {item.name} : {item.value}
            </li>
        ))}
      
      </ul>
    </div>
  )
}

export default Classdetails
