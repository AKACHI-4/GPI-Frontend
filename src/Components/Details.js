import React from "react";
import Classdetails from "./Classdetails";
import student from "../assets/student.png";

function Details() {
  return (
    // <div className="flex flex-col justify-center m-6 border-4 border-gray-700 p-6 gap-3 max-w-2xl mx-auto bg-transparent rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
    //   <h3 class="text-white font-bold text-3xl">Class Details</h3>
    //   <div class='mb-6'>
    //     <Classdetails />
    //   </div>
    //   <img
    //     className="h-36 mx-auto"
    //     src={student}
    //     alt="student"
    //   />
    // </div>
    <div class="flex w-80 cursor-default border-4 border-gray-700 flex-col p-6 justify-center gap-8 rounded-xl bg-transparent transition-all duration-500 ease-in-out hover:shadow-slate-900/20 ">
      <h1 class="text-3xl font-bold leading-8 text-white">Class Details</h1>
      {/* <p class="mt-2 w-60 text-center text-sm font-normal leading-4 text-gray-600">Slate helps you see how many more days you need to work to reach. Slate helps you see how many more days.</p> */}
      <Classdetails />
      {/* <button class="mt-2 rounded-full bg-slate-900 px-8 py-2 text-center font-sans text-lg font-normal text-gray-400 transition-all disabled:bg-gray-400">Try for free</button> */}
      
      <img
        className="h-36 mt-8 mx-auto"
        src={student}
        alt="student"
      />

    </div>
  );
}

export default Details;
