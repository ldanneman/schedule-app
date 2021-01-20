import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar() {
	return (
		<div>
			<Navbar className="justify-content-around main-navbar">
				<Nav.Item>
					<Button className="bg-primary">
						<Link className="link" to="/">
							Home
						</Link>
					</Button>
				</Nav.Item>
				<Nav.Item>
					<Button className="bg-primary">
						<Link className="link" to="/new-appointment">
							New Appointment
						</Link>
					</Button>
				</Nav.Item>
				<Nav.Item>
					<Button className="bg-primary">
						<Link className="link" to="/calendar">
							Calendar
						</Link>
					</Button>
				</Nav.Item>
			</Navbar>
		</div>
	);
}

export default NavBar;
