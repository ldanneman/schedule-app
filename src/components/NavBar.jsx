import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="main-navbar p-0 d-flex">
        <Nav.Item className="nav-item p-0 flex-grow-1">
          <Link className="link" to="/">
            <Button variant="primary" className="button1">
              Home
            </Button>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item p-0 flex-grow-1">
          <Link className="link" to="/new-appointment">
            <Button variant="primary" className="button1">
              New Appointment
            </Button>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item p-0 flex-grow-1">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://calendar.google.com/"
          >
            <Button variant="primary" className="button1">
              Calendar
            </Button>
          </a>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default NavBar;
