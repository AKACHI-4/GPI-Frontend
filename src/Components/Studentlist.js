import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";

function Studentlist() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-white text-lg">
          <thead className="text-gray-600 border-b-4 border-gray-700 bg-blue-200 font-bold text-center">
            <tr>
              <th scope="col" className="">S.No</th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">Name</th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">Roll no.</th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">Student ID</th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">Attendes Status</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center text-gray-700 font-bold">
                1
              </td>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center">
                Student 01
              </td>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center">
                01
              </td>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center">
                123 456
              </td>
              <td scope="col" className="flex px-6 py-3 md:py-4 md:px-8 justify-center mt-3 md:mt-0">
                <XCircleIcon className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </td>
            </tr>
          </tbody>
          <tbody className="">
            <tr>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center text-gray-700 font-bold">
                2
              </td>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center">
                Student 02
              </td>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center">
                02
              </td>
              <td scope="col" className="px-6 py-3 md:py-4 md:px-8 text-center">
                123 457
              </td>
              <td scope="col" className="flex px-6 py-3 md:py-4 md:px-8 justify-center mt-3 md:mt-0">
                <CheckCircleIcon className="w-7 h-7 md:w-8 md:h-8 text-green-500" />
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>
    </>
  )
}

export default Studentlist