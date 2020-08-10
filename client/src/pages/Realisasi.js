import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Peserta from "../assets/data/peserta.png";
import Aset from "../assets/data/aset.png";
import Pendanaan from "../assets/data/pendanaan.png";
import Kesehatan from "../assets/data/pembayaran program kesehatan.png";
import Perumahan from "../assets/data/pengembalian iuran perumahan.png";
import Pinjaman from "../assets/data/pinjaman perumahan.png";

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
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>Realisasi</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
          <Image src={Peserta} rounded style={{ height: 400, width: 600 }} />
        </div>
        <p>
          Setiap karyawan Perum Perhutani yang memasuki masa pensiun, otomatis menjadi
          peserta/anggota Yayasan. Karena masa perlindungan ditetapkan selama 15 bagi pensiun normal
          umur 56 tahun terhitung sejak memasuki masa pensiun, maka jumlah peserta yayasan selalu
          dinamis, setiap saat ada peserta yang telah berakhir masa perlindungan, dan ada penambahan
          dari karyawan Perum Perhutani yang memasuki masa pensiun. Dinamika jumlah peserta dalam 5
          tahun terakhir seperti pada table dan grafik berikut.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40, marginBottom: 20 }}>
          <Image src={Aset} rounded style={{ height: 400, width: 600 }} />
        </div>
        <p style={{ textAlign: "center", marginTop: -10 }}>
          Total Aset Tahun 2015 – 2019 (Tabel dan Grafik)
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40, marginBottom: 20 }}>
          <Image src={Pendanaan} rounded style={{ height: 400, width: 600 }} />
        </div>
        <p style={{ textAlign: "center", marginTop: -10 }}>Komposisi pendanaan</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40, marginBottom: 20 }}>
          <Image src={Kesehatan} rounded style={{ height: 400, width: 600 }} />
        </div>
        <p style={{ textAlign: "center", marginTop: -10 }}>Pembayaran Program Kesehatan</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40, marginBottom: 20 }}>
          <Image src={Perumahan} rounded style={{ height: 400, width: 600 }} />
        </div>
        <p style={{ textAlign: "center", marginTop: -10 }}>Pengembalian Iuran Perumahan</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40, marginBottom: 20 }}>
          <Image src={Pinjaman} rounded style={{ height: 400, width: 600 }} />
        </div>
        <p style={{ textAlign: "center", marginTop: -10 }}>Penyaluran Pinjaman Perumahan</p>
      </Container>
      <Footer />
    </motion.div>
  );
};
