import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Jati Sejahtera</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Kematian</Nav.Link>
          <Nav.Link href="#link">Manfaat</Nav.Link>
          <Nav.Link href="#home">Kesehatan</Nav.Link>
          <Nav.Link href="#link">Perumahan</Nav.Link>
          <Nav.Link href="#home">Pendidikan</Nav.Link>
          <Nav.Link href="#link">Histori</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
