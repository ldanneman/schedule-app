import React from "react";
import "./home.css"
import Login from "../Login";
import { Container, Row } from "react-bootstrap";
import logo from "../../shift-logo.png";

function Home() {
  return (
      <Container fluid className="w-75 mt-5">
        <Row className="d-flex justify-content-center">
          <img className="main-logo ml-2" src={logo} alt="logo" />
        </Row>
      <Row >
        <h1 className="home-header p-3 mt-5">
          Your time is valuable
        </h1>
      </Row>
      <Row >
        <h4 className="pt-5">Login to access our smart scheduling and say goodbye to late cancellations and missed appointments</h4>
      </Row>
      <Login />
      </Container>
  );
}

export default Home;
