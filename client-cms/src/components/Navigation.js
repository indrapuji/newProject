import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { IoIosLogOut } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { useHistory } from "react-router-dom";

export default (props) => {
  const history = useHistory();

  function handdleLogout() {
    localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/" style={{ fontWeight: "bolder" }}>
        Jati Sejahtera CMS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey={props.activePath}>
          <Nav.Link href="/kematian">Kematian</Nav.Link>
          <Nav.Link href="/login">Manfaat</Nav.Link>
          <Nav.Link href="#home">Kesehatan</Nav.Link>
          <Nav.Link href="#link">Perumahan</Nav.Link>
          <Nav.Link href="#home">Pendidikan</Nav.Link>
          <Nav.Link href="#link">Histori</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>

        {localStorage.token ? (
          <Nav style={{ marginLeft: 20 }}>
            <IoIosLogOut color="green" size="30" onClick={handdleLogout} />
          </Nav>
        ) : (
          <Nav style={{ marginLeft: 20 }}>
            <IoIosLogIn color="green" size="30" />
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
