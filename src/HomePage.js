import React from "react";
import { Link } from "react-router-dom";
import dummyData from "./dummyData";
import Header from "./Header";
import AboutUs from "./AboutUs";

const HomePage = () => {
  const formatFee = (fee) => (fee ? `₹${fee}` : "-");

  const renderExams = (exams) => (
    <ul className="list-unstyled">
      {exams.map((exam) => (
        <li key={exam.id} className="mb-2">
          <Link
            to={`/exam-details/${exam.id}`}
            className="text-decoration-none text-dark"
          >
            <strong>{exam.heading}</strong>
          </Link>
        </li>
      ))}
    </ul>
  );

  const recentExams = dummyData.exams.slice(0, 10);
  const recentAdmitCards = dummyData.exams
    .filter((exam) => exam.admit_card)
    .slice(0, 10);
  const recentResults = dummyData.exams
    .filter((exam) => exam.result)
    .slice(0, 10);

  return (
    <div>
      <Header />
      <div className="container my-4">
        {/* New Updates Section */}
        <div className="mb-4">
          <h2>Latest Updates</h2>
          <div className="card mb-3 border-primary">
            <div className="card-body">
              {recentExams.length > 0 ? (
                <div className="row">
                  {recentExams.map((exam) => (
                    <div key={exam.id} className="col-lg-4 col-md-6 mb-4">
                      <div className="card border-primary">
                        <div className="card-body">
                          <h5 className="card-title">{exam.heading}</h5>
                          <p className="card-text">
                            <strong>Post Date:</strong> {exam.post_date} <br />
                            <strong>Description:</strong>{" "}
                            {exam.brief_description || "-"}
                          </p>
                          <Link to={`/exam-details/${exam.id}`}>
                            View Details >>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No new updates available</p>
              )}
              <Link to="/new-updates" className="btn btn-primary mt-3">
                View All Updates
              </Link>
            </div>
          </div>
        </div>

        {/* Admit Cards Section */}
        <div className="mb-4">
          <h2>Admit Cards</h2>
          <div className="card mb-3 border-primary">
            <div className="card-body">
              {recentAdmitCards.length > 0 ? (
                <div className="row">
                  {recentAdmitCards.map((exam) => (
                    <div key={exam.id} className="col-lg-4 col-md-6 mb-4">
                      <div className="card border-primary">
                        <div className="card-body">
                          <h5 className="card-title">{exam.heading}</h5>
                          <p className="card-text">
                            <strong>Post Date:</strong> {exam.post_date} <br />
                            <strong>Description:</strong>{" "}
                            {exam.brief_description || "-"}
                          </p>
                          <Link to={`/exam-details/${exam.id}`}>
                            View Details >>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No admit cards available</p>
              )}
              <Link to="/admit-cards" className="btn btn-primary mt-3">
                View All Admit Cards
              </Link>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-4">
          <h2>Results</h2>
          <div className="card mb-3 border-primary">
            <div className="card-body">
              {recentResults.length > 0 ? (
                <div className="row">
                  {recentResults.map((exam) => (
                    <div key={exam.id} className="col-lg-4 col-md-6 mb-4">
                      <div className="card border-primary">
                        <div className="card-body">
                          <h5 className="card-title">{exam.heading}</h5>
                          <p className="card-text">
                            <strong>Post Date:</strong> {exam.post_date} <br />
                            <strong>Description:</strong>{" "}
                            {exam.brief_description || "-"}
                          </p>
                          <Link to={`/exam-details/${exam.id}`}>
                            View Details >>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No results available</p>
              )}
              <Link to="/results" className="btn btn-primary mt-3">
                View All Results
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default HomePage;
