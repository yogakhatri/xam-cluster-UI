// src/ExamInfoPage.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ExamInfoPage.css"; // Import the CSS file for custom styles
import Header from "./Header";
import AboutUs from "./AboutUs";
import dummyData from "./dummyData";

const ExamInfoPage = () => {
  const { id } = useParams();
  const exam = dummyData.exams.find((e) => e.id === parseInt(id, 10)); // Find the exam by ID

  if (!exam) {
    return (
      <div className="text-center my-4">
        <h2>No exam data available.</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container my-4">
        <header className="text-center mb-4">
          <h1>Exam Details</h1>
        </header>

        <div className="exam-info-container">
          <div className="exam-info">
            <h2 className="text-center mb-4">{exam.heading}</h2>
            <p className="text-center">
              <strong>Post Date:</strong> {exam.post_date || "-"}
            </p>

            {/* Description Section */}
            <section className="section mb-4">
              <h5>Description</h5>
              <p>{exam.brief_description || "-"}</p>
            </section>

            {/* Details Section */}
            <section className="section mb-4">
              <h5>Details</h5>
              <p>
                <strong>Adv. No:</strong> {exam.adv_no || "-"}
              </p>
              <p>
                <strong>Total Vacancy:</strong> {exam.total_vacancy || "-"}
              </p>
              <p>
                <strong>Application Fee (General):</strong>{" "}
                {formatFee(exam.application_fee_general)}
              </p>
              <p>
                <strong>Application Fee (Women):</strong>{" "}
                {formatFee(exam.application_fee_women)}
              </p>
              <p>
                <strong>Application Fee (OBC):</strong>{" "}
                {formatFee(exam.application_fee_obc)}
              </p>
              <p>
                <strong>Application Fee (ST/SC):</strong>{" "}
                {formatFee(exam.application_fee_st_sc)}
              </p>
            </section>

            {/* Important Dates Section */}
            <section className="section mb-4">
              <h5>Important Dates</h5>
              <p>
                <strong>Starting Date to Apply:</strong>{" "}
                {exam.starting_date_apply_online || "-"}
              </p>
              <p>
                <strong>Last Date to Apply:</strong>{" "}
                {exam.last_date_apply || "-"}
              </p>
              <p>
                <strong>Last Date for Fee Payment:</strong>{" "}
                {exam.last_date_payment_fee || "-"}
              </p>
            </section>

            {/* Age Limit Section */}
            <section className="section mb-4">
              <h5>Age Limit</h5>
              <p>
                <strong>Min:</strong> {exam.age_limit_minimum || "-"}
              </p>
              <p>
                <strong>Max:</strong> {exam.age_limit_maximum || "-"}
              </p>
            </section>

            {/* Links */}
            <section className="section mb-4">
              <h5>Links</h5>
              {exam.notification_link && (
                <p>
                  <strong>Notification Link:</strong>{" "}
                  <a
                    href={exam.notification_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exam-link"
                  >
                    View Notification
                  </a>
                </p>
              )}
              {exam.apply_online_link && (
                <p>
                  <strong>Apply Online Link:</strong>{" "}
                  <a
                    href={exam.apply_online_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exam-link"
                  >
                    Apply Online
                  </a>
                </p>
              )}
              {exam.official_website_link && (
                <p>
                  <strong>Official Website:</strong>{" "}
                  <a
                    href={exam.official_website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exam-link"
                  >
                    Visit Website
                  </a>
                </p>
              )}
            </section>

            {/* Back to Home Button */}
            <div className="text-center mt-4">
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

// Helper function to format application fee
const formatFee = (fee) => (fee ? `₹${fee}` : "-");

export default ExamInfoPage;
