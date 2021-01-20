import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="main-navbar p-0">
        <Nav.Item className="nav-item p-0">
          <Link className="link" to="/">
            <Button variant="primary" className="button1">
              Home
            </Button>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item p-0">
          <Link className="link" to="/new-appointment">
            <Button variant="primary" className="button1">
              New Appointment
            </Button>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item p-0">
          <Link className="link" to="/calendar">
            <Button variant="primary" className="button1">
              Calendar
            </Button>
          </Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default NavBar;
