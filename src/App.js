import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ExamInfoPage from "./ExamInfoPage";
import dummyData from "./dummyData"; // Import your dummy data

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/exam-details/:id"
          element={<ExamInfoPage exams={dummyData.exams} />}
        />
        {/* Add routes for other pages here */}
      </Routes>
    </Router>
  );
};

export default App;
