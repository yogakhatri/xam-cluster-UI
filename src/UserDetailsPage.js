import React from "react";
import { Link } from "react-router-dom";
import "./UserDetailPage.css"; // Separate CSS file for styling
import Header from "./Header";
import AboutUs from "./AboutUs";

const UserDetailPage = () => {
  const dummyUserData = {
    id: 1,
    email: "user@example.com",
    role: "user",
    importantExams: [
      {
        id: 1,
        heading: "Exam 1",
        post_date: "2024-08-01",
        brief_description: "Important exam details.",
      },
      {
        id: 2,
        heading: "Exam 2",
        post_date: "2024-09-05",
        brief_description: "Important exam details.",
      },
      {
        id: 3,
        heading: "Exam 3",
        post_date: "2024-09-12",
        brief_description: "Important exam details.",
      },
    ],
  };

  const { email, role, importantExams } = dummyUserData;

  return (
    <div>
      <Header />
      <div className="user-detail-container">
        <div className="user-detail-box">
          <h2 className="title">User Details</h2>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
        </div>

        <div className="important-exams-box">
          <h3 className="title">Important Exams</h3>
          <ul className="exams-list">
            {importantExams.map((exam) => (
              <li key={exam.id} className="exam-item">
                <Link to={`/exam-details/${exam.id}`} className="exam-link">
                  <strong>{exam.heading}</strong> - {exam.post_date}
                </Link>
                <p>{exam.brief_description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default UserDetailPage;
