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
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Visi & Misi</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>Visi</p>
          <p>
            Menjadi Yayasan pengelola fasilitas kesejahteraan yang sehat, kuat dan bermanfaat bagi
            pesertanya.
          </p>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>Misi</p>
          <ol style={{ marginLeft: -20 }}>
            <li>
              Mengembangkan peran yayasan dalam bidang pendidikan, perumahan dan kesehatan secara
              berkualitas.
            </li>
            <li>
              Berusaha meningkatkan kesejahteraan dengan membantu meringankan beban para pesertanya.
            </li>
            <li>Menjadikan “nilai” yayasan sebagai harapan pesertanya.</li>
            <li>Bekerja berdasarkan nilai kebersamaan, saling merasakan dan saling menghargai.</li>
          </ol>
          <p style={{ fontWeight: "bold", marginBottom: 0 }}>Bidang Kegiatan</p>
          <ol style={{ marginLeft: -20 }}>
            <li>Bidang Pendidikan</li>
            <li>Bidang Sosial dan Kemanusiaan</li>
            <li>Bidang Perumahan</li>
            <li>Bidang Kesehatan</li>
          </ol>
        </div>
      </Container>
      <Footer />
    </>
  );
};
