import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Card, Button, CardGroup } from "react-bootstrap";
import laptop from "./assets/images/50.jpg";
import laptop2 from "./assets/images/51.jpg";
import laptop3 from "./assets/images/53.jpg";

import "./App.css";
// import Header from "./Header";
// import Home from "./Home";
// import Sidebar from "./Sidebar";
// import { Box } from "@mui/material";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Row className="text-center mt-5">
        <Col>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={laptop} />
              <Card.Body>
                <Card.Title>wordpress</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={laptop2} />
              <Card.Body>
                <Card.Title>Css&html</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={laptop3} />
              <Card.Body>
                <Card.Title>react</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <Card className="text-center">
          <Card.Header>Attention</Card.Header>
          <Card.Body>
            <Card.Title>Join our team now</Card.Title>
            <Card.Text>Register now to join our team</Card.Text>
            <Button variant="primary">Contact Us</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            LeBria programming team
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
}
