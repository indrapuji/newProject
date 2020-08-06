import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import pengurus from "../assets/image/pengurus.png";
import { motion } from "framer-motion";

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
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
            Struktur Organisasi
          </p>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, marginTop: -20 }}>
            YAYASAN KESEJAHTERAAN PEGAWAI PERUM PERHUTANI (YKP3)
          </p>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, marginTop: -20 }}>
            Jati Sejahtera
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img alt="" src={pengurus} width="1011" height="624" />
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
