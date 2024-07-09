import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import Shop from "./Shop";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col className="col-2">
          <Sidebar />
        </Col>
        <Col className="col-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}
