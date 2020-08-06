import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";

export default () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <img alt="" src={Logo} width="80" height="80" />
      </div>
      <p style={{ textAlign: "center", marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
        Jati Sejahtera
      </p>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-around">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <NavDropdown title="Profile">
            <NavDropdown.Item>
              <Link to="/profile/about">Tentang Kami</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/kepengurusan">Kepengurusan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/cabang">Alamat Kantor Cabang</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/sejarah">Sejarah Singkat Yayasan</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Program">
            <NavDropdown.Item>
              <Link to="/program/pendidikan">Pendidikan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/program/sosial">Sosial</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/program/perumahan">Perumahan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/program/kesehatan">Kesehatan</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Data">
            <NavDropdown.Item>
              <Link to="/data/realisasi">Data Realisasi</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/data/peserta">Data Peserta</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/data/update">Pengkinian Data</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Link to="/berita">Berita</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/galery">Galery</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Kontak</Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
