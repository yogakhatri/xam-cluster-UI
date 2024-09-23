import React, { useState } from "react";
import Header from "./Header";
import { Modal, Button, Table } from "react-bootstrap"; // Import Bootstrap components
import AboutUs from "./AboutUs";

const AdminExamPage = () => {
  const [exams, setExams] = useState([
    {
      id: 1,
      heading: "Engineering Entrance Exam",
      post_date: "2024-01-15",
      total_vacancy: 150,
      brief_description: "An entrance exam for various engineering courses.",
      adv_no: "EE2024/01",
      application_fee_general: 500.0,
      application_fee_women: 250.0,
      application_fee_obc: 300.0,
      application_fee_st_sc: 200.0,
      starting_date_apply_online: "2024-02-01",
      last_date_apply: "2024-03-01",
      last_date_payment_fee: "2024-03-05",
      age_limit_minimum: 18,
      age_limit_maximum: 25,
      notification_link: "https://example.com/engineering-notify",
      apply_online_link: "https://example.com/engineering-apply",
      official_website_link: "https://example.com/engineering",
      admit_card: {
        title: "Engineering Entrance Admit Card",
        description: "Admit card for the Engineering Entrance Exam 2024.",
        download_link: "https://example.com/download-engineering-admit-card",
      },
      result: {
        title: "Engineering Entrance Exam Results",
        description: "Results for the Engineering Entrance Exam 2024.",
        results_link: "https://example.com/engineering-results",
      },
    },
    // Add more exams as needed
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingExam, setEditingExam] = useState(null);
  const [newExamData, setNewExamData] = useState({
    heading: "",
    post_date: "",
    total_vacancy: "",
    brief_description: "",
    adv_no: "",
    application_fee_general: "",
    application_fee_women: "",
    application_fee_obc: "",
    application_fee_st_sc: "",
    starting_date_apply_online: "",
    last_date_apply: "",
    last_date_payment_fee: "",
    age_limit_minimum: "",
    age_limit_maximum: "",
    notification_link: "",
    apply_online_link: "",
    official_website_link: "",
    admit_card: {
      title: "",
      description: "",
      download_link: "",
    },
    result: {
      title: "",
      description: "",
      results_link: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("admit_card.") || name.startsWith("result.")) {
      const [parent, child] = name.split(".");
      setNewExamData({
        ...newExamData,
        [parent]: { ...newExamData[parent], [child]: value },
      });
    } else {
      setNewExamData({ ...newExamData, [name]: value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingExam) {
      setExams(
        exams.map((exam) =>
          exam.id === editingExam.id ? { ...editingExam, ...newExamData } : exam
        )
      );
    } else {
      setExams([...exams, { ...newExamData, id: exams.length + 1 }]);
    }
    setShowForm(false);
    setEditingExam(null);
    resetForm();
  };

  const handleEditClick = (exam) => {
    setEditingExam(exam);
    setNewExamData(exam);
    setShowForm(true);
  };

  const resetForm = () => {
    setNewExamData({
      heading: "",
      post_date: "",
      total_vacancy: "",
      brief_description: "",
      adv_no: "",
      application_fee_general: "",
      application_fee_women: "",
      application_fee_obc: "",
      application_fee_st_sc: "",
      starting_date_apply_online: "",
      last_date_apply: "",
      last_date_payment_fee: "",
      age_limit_minimum: "",
      age_limit_maximum: "",
      notification_link: "",
      apply_online_link: "",
      official_website_link: "",
      admit_card: {
        title: "",
        description: "",
        download_link: "",
      },
      result: {
        title: "",
        description: "",
        results_link: "",
      },
    });
  };

  return (
    <div>
      <Header />
      <div className="admin-exam-container">
        <h2>All Exams</h2>
        <Button variant="primary" onClick={() => setShowForm(true)}>
          Add New Exam
        </Button>

        <Table striped bordered hover className="exam-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Heading</th>
              <th>Post Date</th>
              <th>Total Vacancy</th>
              <th>Brief Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.heading}</td>
                <td>{exam.post_date}</td>
                <td>{exam.total_vacancy}</td>
                <td>{exam.brief_description}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEditClick(exam)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showForm} onHide={() => setShowForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingExam ? "Edit Exam" : "Add New Exam"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleFormSubmit} className="exam-form">
              <div className="mb-3">
                <label>Heading:</label>
                <input
                  type="text"
                  name="heading"
                  value={newExamData.heading}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Post Date:</label>
                <input
                  type="date"
                  name="post_date"
                  value={newExamData.post_date}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Total Vacancy:</label>
                <input
                  type="number"
                  name="total_vacancy"
                  value={newExamData.total_vacancy}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Brief Description:</label>
                <textarea
                  name="brief_description"
                  value={newExamData.brief_description}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Advertisement Number:</label>
                <input
                  type="text"
                  name="adv_no"
                  value={newExamData.adv_no}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Application Fee (General):</label>
                <input
                  type="number"
                  name="application_fee_general"
                  value={newExamData.application_fee_general}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Application Fee (Women):</label>
                <input
                  type="number"
                  name="application_fee_women"
                  value={newExamData.application_fee_women}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Application Fee (OBC):</label>
                <input
                  type="number"
                  name="application_fee_obc"
                  value={newExamData.application_fee_obc}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Application Fee (ST/SC):</label>
                <input
                  type="number"
                  name="application_fee_st_sc"
                  value={newExamData.application_fee_st_sc}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Starting Date to Apply Online:</label>
                <input
                  type="date"
                  name="starting_date_apply_online"
                  value={newExamData.starting_date_apply_online}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Last Date to Apply:</label>
                <input
                  type="date"
                  name="last_date_apply"
                  value={newExamData.last_date_apply}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Last Date for Payment Fee:</label>
                <input
                  type="date"
                  name="last_date_payment_fee"
                  value={newExamData.last_date_payment_fee}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Age Limit Minimum:</label>
                <input
                  type="number"
                  name="age_limit_minimum"
                  value={newExamData.age_limit_minimum}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Age Limit Maximum:</label>
                <input
                  type="number"
                  name="age_limit_maximum"
                  value={newExamData.age_limit_maximum}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Notification Link:</label>
                <input
                  type="url"
                  name="notification_link"
                  value={newExamData.notification_link}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Apply Online Link:</label>
                <input
                  type="url"
                  name="apply_online_link"
                  value={newExamData.apply_online_link}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Official Website Link:</label>
                <input
                  type="url"
                  name="official_website_link"
                  value={newExamData.official_website_link}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <h4>Admit Card</h4>
              <div className="mb-3">
                <label>Title:</label>
                <input
                  type="text"
                  name="admit_card.title"
                  value={newExamData.admit_card.title}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Description:</label>
                <textarea
                  name="admit_card.description"
                  value={newExamData.admit_card.description}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Download Link:</label>
                <input
                  type="url"
                  name="admit_card.download_link"
                  value={newExamData.admit_card.download_link}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <h4>Result</h4>
              <div className="mb-3">
                <label>Title:</label>
                <input
                  type="text"
                  name="result.title"
                  value={newExamData.result.title}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Description:</label>
                <textarea
                  name="result.description"
                  value={newExamData.result.description}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Results Link:</label>
                <input
                  type="url"
                  name="result.results_link"
                  value={newExamData.result.results_link}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <Button type="submit" variant="primary">
                {editingExam ? "Update Exam" : "Add Exam"}
              </Button>
              <Button variant="secondary" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      <AboutUs />
    </div>
  );
};

export default AdminExamPage;
