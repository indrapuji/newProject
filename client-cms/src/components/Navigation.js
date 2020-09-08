import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { IoIosLogOut } from "react-icons/io";
import { useHistory, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default (props) => {
  const history = useHistory();

  function handdleLogout() {
    Swal.fire({
      title: "Logout?",
      text: "Yakin ingin logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        history.push("/login");
      }
    });
  }

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/" style={{ fontWeight: "bolder" }}>
        Jati Sejahtera CMS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey={props.activePath}>
          <Nav.Link>
            <Link to="/claimkematian">Kematian</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/claimmanfaat">Manfaat</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/claimkesehatan">Kesehatan</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/claimperumahan">Perumahan</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/claimpendidikan">Pendidikan</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav style={{ marginLeft: 20 }}>
          <div onClick={handdleLogout} style={{ cursor: "pointer" }}>
            <IoIosLogOut color="green" size="30" />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
