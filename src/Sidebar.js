import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import "./App.css";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col className="sidebar">
          <div className="d-grid mt-6">
            <Button
              variant="outline-secondary"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Button>

            <Button
              variant="outline-secondary"
              onClick={() => {
                navigate("/shop");
              }}
            >
              frontend
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => {
                navigate("/shop");
              }}
            >
              website
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
