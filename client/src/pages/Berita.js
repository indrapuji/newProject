import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Col, Row, Container, Image } from "react-bootstrap";
import Silaturahmi from "../assets/image/silaturahmi.png";
import Sosialisasi from "../assets/image/sosialisasi.png";
import Yatim from "../assets/image/yatim.png";
import Covid from "../assets/image/covid.png";
import { motion } from "framer-motion";

export default () => {
  const pageTransition = {
    init: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <Container>
        <p style={{ fontWeight: "bold", textAlign: "center", fontSize: 50 }}>Berita</p>
        <Container>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Silaturahmi} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Yayasan Jati Sejahtera (YKP3JS) Silaturahmi Di Jawa Barat</p>
                <p>Yayasan jati sejahtera (YKP3JS) mengadakan kegiatan Silaturahmi bersama perwakilan yayasan jati sejahtera di jawa barat</p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Sosialisasi} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Sosialisasi Pensiunan Perhutani Jawa Tengah Semarang</p>
                <p>Pensiunan perhutani jawa tengah semarang melakukan sosialisasi mengenai biaya bantuan rawat inap dan santunan kematian bagi pensiunan Perhutani.</p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Yatim} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Yayasan Jati Sejahtera Terima Anak Yatim</p>
                <p>
                  Panti Asuhan Rimba Bakti di Ngepos II/7 Jrakah Tugurejo, Semarang yang didirikan tahun 1986 saat ini masih menerima anak yatim atau yatim piatu . Mereka diberi pendidikan minimal
                  sampai lulus SMK. Khusus yang prestasinya bagus bisa melanjutkan sampai lulus perguruan tinggi. Kini sudah 4 anak asuh lulus perguruan tinggi dan 2 anak lagi masih kuliah. Karena
                  sumber dana utama dari Perum Perhutani dan sumbangan sukarela para karyawannya, untuk sementara hanya mengasuh anak putra-putri, pensiunan karyawan dan mitra kerja Perhutani.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Covid} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Kegiatan Bhakti Sosial YKP3JS dalam rangka Peduli COVID-19</p>
                <p>Yayasan (YKP3JS), melakukan kegiatan pembagian Sembako di lingkungan internal (YKP3JS)</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </motion.div>
  );
};
