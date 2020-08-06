import React from "react";
import { Card, Container, CardDeck } from "react-bootstrap";
import CarauselCard from "../components/CarauselCard";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Pendidikan from "../assets/image/pendidikan.jpeg";
import Sosial from "../assets/image/sosial.jpeg";
import Perumahan from "../assets/image/perumahan.jpeg";
import Kesehatan from "../assets/image/kesehatan.jpeg";
import { FcAbout } from "react-icons/fc";
import { FaEye, FaBuilding } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import Penanaman from "../assets/image/penanamanjagung.jpeg";
import BangunKemandirian from "../assets/image/bangunkemandirian.jpeg";
import BriDukung from "../assets/image/bridukungjati.jpeg";
import Santunan from "../assets/image/santunan.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

export default () => {
  const pageTransition = {
    init: {
      x: -300,
    },
    in: {
      x: 0,
    },
    out: {
      opacity: 0,
    },
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <CarauselCard />
      <Container>
        <motion.div variants={container} initial="hidden" animate="visible">
          <hr style={{ marginTop: 50 }} />
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: -10,
              marginBottom: -10,
              fontSize: 20,
            }}
          >
            Program kami
          </p>
          <hr />

          <motion.div variants={item}>
            <CardDeck>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Pendidikan} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title>Pendidikan</Card.Title>
                  <Card.Text>
                    Education Is The Most Powerful Weapon Which You Can Use To Change The World{" "}
                    <br />
                    <span style={{ fontWeight: "bold" }}>- Nelson Mandel</span>
                  </Card.Text>
                  <Link to="/program/pendidikan">Selengkapnya</Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Sosial} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title>Sosial</Card.Title>
                  <Card.Text>
                    People don't care how much you know until they know how much you care
                    <br />
                    <span style={{ fontWeight: "bold" }}>- John C mAxwell</span>
                  </Card.Text>
                  <Link to="/program/sosial">Selengkapnya</Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Perumahan} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title>Perumahan</Card.Title>
                  <Card.Text>
                    A House Is a Machine For Living in
                    <br />
                    <span style={{ fontWeight: "bold" }}>- LE CORBUSIER</span>
                  </Card.Text>
                  <Link to="/program/perumahan">Selengkapnya</Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Kesehatan} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title>Kesehatan</Card.Title>
                  <Card.Text>
                    He who has health , has hope ; and he who has hope, has everything
                    <br />
                    <span style={{ fontWeight: "bold" }}>- Arabian Proverb</span>
                  </Card.Text>
                  <Link to="/program/kesehatan">Selengkapnya</Link>
                </Card.Body>
              </Card>
            </CardDeck>
          </motion.div>
        </motion.div>
      </Container>
      <div style={{ backgroundColor: "#d7dbd8", padding: 10, marginTop: 50 }}>
        <Container>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>Profile Kami</p>
          <div className="row w-150" style={{ paddingBottom: 30 }}>
            <div className="col-md-3">
              <Link to="/profile/about">
                <motion.div
                  className="card mx-sm-1 p-3"
                  whileHover={{ color: "#45fc03", scale: 1.2 }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center" }}>
                      <FcAbout color="blue" size="25" />
                    </span>
                  </div>
                  <div className="text-info text-center mt-3">
                    <h4>Tentang Kami</h4>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="profile/visi">
                <motion.div
                  className="card border-success mx-sm-1 p-3"
                  whileHover={{ color: "#45fc03", scale: 1.2 }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center" }}>
                      <FaEye color="green" size="25" />
                    </span>
                  </div>
                  <div className="text-success text-center mt-3">
                    <h4>Visi & Misi</h4>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="profile/cabang">
                <motion.div
                  className="card border-danger mx-sm-1 p-3"
                  whileHover={{ color: "#45fc03", scale: 1.2 }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center" }}>
                      <FaBuilding color="red" size="25" />
                    </span>
                  </div>
                  <div className="text-danger text-center mt-3">
                    <h4>Kantor Cabang</h4>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="profile/sejarah">
                <motion.div
                  className="card border-warning mx-sm-1 p-3"
                  whileHover={{ color: "#45fc03", scale: 1.2 }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center" }}>
                      <BsClockHistory color="yellow" size="25" />
                    </span>
                  </div>
                  <div className="text-warning text-center mt-3">
                    <h4>Sejarah</h4>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="card border-danger golge">
            <div className="card-header">
              <h5 className="text-center m-2">Berita</h5>
            </div>
            <div className="card-body">
              <div className="carousel vert slide" data-ride="carousel" data-interval="2000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <ul className="timeline">
                      <li>
                        <Link to="/berita">
                          Yayasan Jati Sejahtera (YKP3JS) Silaturahmi Di Jawa Barat
                        </Link>
                        <p className="article">
                          Yayasan jati sejahtera (YKP3JS) mengadakan kegiatan Silaturahmi bersama
                          perwakilan yayasan jati sejahtera di jawa barat
                        </p>
                      </li>
                      <li>
                        <Link to="/berita">
                          Sosialisasi Pensiunan Perhutani Jawa Tengah Semarang
                        </Link>
                        <p>
                          Pensiunan perhutani jawa tengah semarang melakukan sosialisasi mengenai
                          biaya bantuan rawat inap dan santunan kematian bagi pensiunan Perhutani.
                        </p>
                      </li>
                      <li>
                        <Link to="/berita">Yayasan Jati Sejahtera Terima Anak Yatim</Link>
                        <p>
                          Panti Asuhan Rimba Bakti di Ngepos II/7 Jrakah Tugurejo, Semarang yang
                          didirikan tahun 1986 saat ini masih menerima anak yatim atau yatim piatu .
                          Mereka diberi pendidikan minimal sampai lulus SMK. Khusus yang prestasinya
                          bagus bisa melanjutkan sampai lulus perguruan tinggi. Kini sudah 4 anak
                          asuh lulus perguruan tinggi dan 2 anak lagi masih kuliah.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 50 }}>
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>GALERY</p>
      </div>
      <div style={{ padding: 10 }}>
        <div className="container mt-40">
          <div className="row mt-30">
            <div className="col-md-3 col-sm-6">
              <div className="box15">
                <img src={Penanaman} style={{ height: "10rem" }} alt="" />
                <div className="box-content">
                  <h3 className="title" style={{ textAlign: "center" }}>
                    Penanaman Jagung
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box15">
                <img src={BangunKemandirian} style={{ height: "10rem" }} alt="" />
                <div className="box-content">
                  <h3 className="title" style={{ textAlign: "center" }}>
                    Bangun Kemandirian Desa
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box15">
                <img src={BriDukung} style={{ height: "10rem" }} alt="" />
                <div className="box-content">
                  <h3 className="title" style={{ textAlign: "center" }}>
                    Program Jati Sejahtera
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box15">
                <img src={Santunan} style={{ height: "10rem" }} alt="" />
                <div className="box-content">
                  <h3 className="title" style={{ textAlign: "center" }}>
                    Santunan Yatim Piatu
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};
