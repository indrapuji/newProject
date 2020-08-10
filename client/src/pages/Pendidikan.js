import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Pendidikan from "../assets/image/pendidikan3.jpg";

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
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <Container>
        <div style={{ marginTop: 20 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Pendidikan</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <Image src={Pendidikan} rounded style={{ height: 400, width: 600 }} />
        </div>
        <div style={{marginTop: 20}}>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>
            Beberapa kegiatan dibidang pendidikan yang diselenggarakan oleh Yayasan di antaranya:
          </p>
          <ol style={{ marginLeft: -20 }}>
            <li>
              Memberikan bantuan biaya pendidikan kepada putra/putri karyawan dan pensiunan peruma
              perhutani yang berprestasi.
            </li>
            <li>
              mengelola Wisma Putra Rimba untuk membantu menyediakan tempat tinggal bagi putra/putri
              karyawan/pensiunan Perum Perhutani yang melanjutkan pendidikan di Surabaya.
            </li>
            <li>
              Membantu pengembangan dan pembinaan lembaga Pendidikan dilingkup Perum Perhutani.
            </li>
            <li>Menyelenggarakan Pendidikan Non-formal (TK/TPA/PAUD)</li>
          </ol>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
