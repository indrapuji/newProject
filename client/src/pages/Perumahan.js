import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <>
      <Navigation />
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Perumahan</p>
          <p>
            Yayasan mengelola dana program pemilikan rumah bagi karyawan Perum Perhutani yang masih
            aktif khususnya Karyawan Golongan I dan Golongan II. Penyaluran dana bantuan pemilikan
            rumah ini diberikan secara selektif di seluruh Wilayah kerja Perum Perhutani yaitu di
            Jawa Timur, Jawa Tengah, serta Jawa Barat dan Banten.
            <br style={{ marginBottom: 10 }} />
            Bantuan ini diberikan secara regular setiap dua tahun, dan diberikan dalam bentuk
            pinjaman tanpa bunga yang pengembaliannya akan diangsur oleh karyawan dalam waktu lima
            tahun.
            <br style={{ marginBottom: 10 }} />
            Pada saat Karyawan memasuki masa pensiun, atau meninggal sebelum waktu pensiun, akan
            menerima pengembalian Uang Perumahan yang nilainya ditentukan berdasar Golongan saat
            pensiun.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};
