import * as React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Logo from "./assets/images/logo.jpg";
import "./App.css";
export default function Contact() {
  return (
    <>
      <Row className=" col-12">
        <Col className="col-12">
          <h1>web developer</h1>
          <img src={Logo} alt="logo-image" className="logo" />
          <p>
            Learning programming and writing code in these years has become both
            a hobby and many people consider it an opportunity to enter the job
            market. But the good news is that you can practice and learn online
            through free websites. In the old days, hiring a programmer and
            learning programming was only limited to a certain group, and of
            course, learning it also cost a lot of money for those who are
            interested.
          </p>
        </Col>
        <Col className="Col-12">
          <h1>Work Time</h1>
          <h3>4:20 to 10:00</h3>
          <h1>call us</h1>
          <h3>09216935863</h3>
        </Col>
        <Col className="Col-3">
          <h1>Sign up</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
