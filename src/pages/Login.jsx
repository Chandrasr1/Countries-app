import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button,Alert } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must be 8+ characters, include 1 uppercase, 1 number, and 1 symbol"
      );
      return;
    }
    
    navigate("/Home");
  };

  return (
     <Container fluid className="signin-container">
        <Row className="justify-content-center align-items-center vh-100">
          <Col xs={10} sm={8} md={6} lg={4} className="signin-form">
            <h2 className="mb-3">Sign In</h2>
            <p>
              New user? <a href="#">Create an account</a>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" value={email} placeholder="Username or email" onChange={(e)=>setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Sign In
              </Button>
            </Form>
            {error && <Alert variant="danger" className="error-message">{error}</Alert>}
            <p className="text-center mt-3">Or Sign In With</p>
            <div className="social-icons text-center">
              <FaGoogle className="icon" />
              <FaFacebook className="icon" />
              <FaLinkedin className="icon" />
              <FaTwitter className="icon" />
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default Login;
