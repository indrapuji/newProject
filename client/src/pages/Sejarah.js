import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
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
      <div style={{ position: "relative" }}>
        <div data-aos="zoom-in" style={{ position: "absolute", left: "-30", zIndex: -1, top: 50 }}>
          <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 150 }} />
        </div>
        <div data-aos="fade-up" style={{ position: "absolute", left: 1200, zIndex: -1, top: 100 }}>
          <Image src={require("../assets/landingpage/leaf_top_large.png")} style={{ width: 200 }} />
        </div>
        <Container>
          <div style={{ marginTop: 50 }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>SEJARAH SINGKAT YAYASAN</p>
            <p>
              <span style={{ fontWeight: "bold" }}>“Yayasan Jati Sejahtera”</span> didirikan pada tanggal 24 April 1987 oleh Pendiri yayasan (seperti tersebut dibawah) dengan Akte Notaris Roenastiti
              Prayitno, SH, MA, No: 21 Tanggal: 24 April 1987 . Pada awal pendirian, Yayasan ini mempunyai maksud dan tujuan menyelenggarakan usaha bidang sosial dalam rangka melakukan upaya
              peningkatan kesejahteraan dan pendidikan bagi putra putri karyawan/pensiunan Perum Perhutani. Yayasan berkedudukan di Jakarta dan memiliki Kantor Perwakilan di wilayah Jawa Timur, Jawa
              Tengah, serta Jawa Barat dan Banten. Di awal pendirian, Yayasan diurus oleh suatu pengurus yang ditunjuk dan diangkat oleh salah satu Direktur Perhutani selaku Ketua Pembina.
              <br style={{ marginBottom: 10 }} />
              Pada tahun 2008, yayasan melakukan perubahan Anggaran Dasar yang sangat mendasar dalam rangka menyesuaikan dengan Undang-Undang Yayasan yang dikeluarkan oleh Pemerintah yaitu
              Undang-Undang No: 16 Tahun 2001, dan Undang-undang No 28 Tahun 2004. Perubahan Anggaran dasar ini menyangkut susunan organ yayasan dan memperluas kegiatan nya yaitu dibidang Sosial dan
              Kemanusiaan. Perubahan ini di legalkan dengan Akte Notaris Etty Purwaningsih SH, No: 08 Tanggal 24 September 2008.
              <br style={{ marginBottom: 10 }} />
              Seiring berjalan nya waktu, yayasan mengalami perubahan anggaran dasar yang berkaitan dengan pergantian pengurus, khusus perubahan pada Tahun 2010, perubahan anggaran dasarnya disertai
              dengan perubahan Nama Yayasan menjadi “Yayasan Kesejahteraan Pegawai Perum Perhutani Jati Sejahtera (YKP3JS), serta penambahan kegiatan yaitu program bantuan pemilikan rumah dan program
              kesehatan
              <br style={{ marginBottom: 10 }} />
              Pendirian Yayasan Kesejahteraan Pegawai Perum Perhutani (YKP3) “JATI SEJAHTERA” mempunyai maksud dan tujuan untuk membantu meningkatkan kesejahteraan seluruh pensiunan dan karyawan Perum
              Perhutani. Pengurus selalu memegang komitmen untuk terus meningkatkan kinerja dalam mengelola dan mengembangkan Yayasan dengan mengoptimalkan sumberdaya yang ada guna memberikan manfaat
              sebesar-besarnya bagi seluruh peserta.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </motion.div>
  );
};
