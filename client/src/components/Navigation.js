import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="navbarText">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-around">
          <Link to="/">Home</Link>
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
              <Link to="/data/update">Pengkinian Data</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="https://jatisejahtera-93bab.firebaseapp.com/" style={{ color: "blue" }}>
              Pengajuan
            </NavDropdown.Item>
            <NavDropdown.Item href="https://jaticms.firebaseapp.com/" style={{ color: "blue" }}>
              Admin
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/data/cms">All Data</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/berita">Berita</Link>
          <Link to="/galery">Galery</Link>
          <Link to="/contact">Kontak</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
