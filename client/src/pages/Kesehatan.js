import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Kesehatan from "../assets/image/kesehatan2.jpg";

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
        <div style={{ marginTop: 20 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Kesehatan</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <Image src={Kesehatan} rounded style={{ height: 400, width: 600 }} />
        </div>
        <div style={{ marginTop: 20 }}>
          <p>
            Yayasan mengelola dana program kesehatan yang disalurkan kepada seluruh pensiunan Perum
            Perhutani dalam bentuk program kesehatan sesuai dengan ketentuan.yang berlaku.
            <br style={{ marginBottom: 10 }} />
            Ketentuan tersebut diantaranya memenuhi batasan kepesertaan dan jenis perawatan yang
            ditanggung. Batasan kepesertaan program kesehatan adalah bagi pensiunan direksi dan
            pegawai Perum Perhutani beserta istri/suami (pasangan) dan satu anak yang jmasih menjadi
            tanggunan yaitu usia maximum 25 tahun dan belum menikah. Perincian jenis perawatan
            kesehatan yang ditanggung ditetapkan tersendiri.
            <br style={{ marginBottom: 10 }} />
            Masa manfaat program kesehatan ditetapkan selama 15 tahun terhitung sejak pegawai
            memasuki masa pension normal 56 th. Apabila dalam masa perlindungan tersebut peserta
            belum pernah mengajukan klaim program kesehatan, diakhir masa perlindungan akan
            diberikan “Manfaat Nilai Hidup” yang besarnya ditetapkan tersendiri. Apabila dalam masa
            perlindungan peserta meninggal dunia, akan diberikan “santunan kematian” yang nilainya
            akan diatur tersendiri.
          </p>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};