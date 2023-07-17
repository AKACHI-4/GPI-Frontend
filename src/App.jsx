import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ClassForm from "./Pages/ClassForm";
import StudentForm from "./Pages/StudentForm";
import ClassRoom from "./Pages/ClassRoom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/student-form/:admin_id/:unique_id"
            element={<StudentForm />}
          />
          <Route path="/class-form" element={<ClassForm />} />
          <Route path="/class-room" element={<ClassRoom />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
