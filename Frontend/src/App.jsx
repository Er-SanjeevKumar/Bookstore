import React from "react";
import Home from "./home/Home";
// import Course from './components/Course'
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";

export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}
