import React from 'react';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Card } from "react-bootstrap";
// Functional Component
const LoginPage = () => {
//   // You can access props directly here

//   // State can also be managed using React hooks
//   const [count, setCount] = React.useState(0);

//   // Function to handle button click and update count
//   const handleButtonClick = () => {
//     setCount(count + 1);
//   };



  return (
    <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={7} xs={13}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase ">Slasscom Employee Search Engine</h2>
                <p className=" mb-5">Please enter your login and password!</p>
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Dont have an account?{" "}
                      <a href="{''}" className="text-primary fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default LoginPage;