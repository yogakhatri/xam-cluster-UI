import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ExamInfoPage from "./ExamInfoPage";
import UserDetailPage from "./UserDetailsPage";
import dummyData from "./dummyData"; // Make sure to import your dummy data

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Exam Info Page Route */}
        <Route
          path="/exam-details/:id"
          element={<ExamInfoPage exams={dummyData.exams} />}
        />

        {/* User Detail Page Route */}
        <Route path="/user-detail" element={<UserDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
