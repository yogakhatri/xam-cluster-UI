import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save email and password to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Fake a role for this example
    const role = email === "admin@example.com" ? "admin" : "user";

    // Update auth state
    setAuth({ isAuthenticated: true, role });

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin-page");
    } else {
      navigate("/user-detail");
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="pb-5">Welcome to Xam Cluster</h1>
      <Row>
        <Col>
          <div className="border p-5 rounded shadow-sm">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="my-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
