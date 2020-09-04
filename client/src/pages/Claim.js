import React from "react";
import Navigation from "../components/Navigation";
import { Container, Button } from "react-bootstrap";
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
        <h1 style={{ marginTop: 20, textAlign: "center" }}>Pengajuan Claim</h1>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: 50, marginBottom: 50 }}>
          <Button variant="primary" size="lg" block>
            Perumahan
          </Button>
          <Button variant="primary" size="lg" block>
            Kesehatan
          </Button>
          <Button variant="primary" size="lg" block>
            Manfaat Nilai Hidup
          </Button>
          <Button variant="primary" size="lg" block>
            Santunan Kematian dan Santunan Cacat
          </Button>
          <Button variant="primary" size="lg" block>
            Santunan Pendidikan
          </Button>
        </div>
      </Container>
    </motion.div>
  );
};
