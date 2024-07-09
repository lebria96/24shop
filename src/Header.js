import { Col, Row, Container, Nav, Navbar } from "react-bootstrap";
import Profile from "./assets/images/66.jpg";
import Logo from "./assets/images/logo.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Header() {
  return (
    <>
      <Container>
        <Row className="header">
          <Col>
            <img src={Profile} alt="profile_image" className="guest-picture" />
          </Col>
          <Col className="text-center">
            <img src={Logo} alt="logo-image" className="logo" />
          </Col>
          <Col>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchOutlinedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField id="input-with-sx" label="Search" variant="standard" />
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
}
