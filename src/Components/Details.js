import React from "react";
import Classdetails from "./Classdetails";
import student from "../assets/student.png";

function Details() {
  return (
    <div className="flex flex-col justify-center m-6 border-4 border-gray-700 rounded-2xl p-10 gap-3">
      <h3 class="text-white font-bold text-3xl">Class Details</h3>
      <div class='mb-6'>
        <Classdetails />
      </div>
      <img
        className="max-w-full h-52 mx-auto md:max-w-md lg:max-w-lg"
        src={student}
        alt="student"
      />
    </div>
  );
}

export default Details;
