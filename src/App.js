import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ExamInfoPage from "./ExamInfoPage";
import AdminPage from "./AdminPage";
import Login from "./Login";
import SignUp from "./SignUp";
import UserDetailPage from "./UserDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/exam-details/:id" element={<ExamInfoPage />} />

        {/* Unprotected routes for both user detail and admin page */}
        <Route path="/user-detail" element={<UserDetailPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
