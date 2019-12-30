import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
export const NavHeader: React.FC =() => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Skill Matrix Project</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">EmployeeList</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
}