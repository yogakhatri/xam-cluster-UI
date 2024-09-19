import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="pb-5">Welcome to Xam Cluster</h1>
      <Row>
        <Col>
          <div className="border p-5 rounded shadow-sm">
            <h2 className="text-center mb-4">Register</h2>
            <Form>
              <Form.Group className="my-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
