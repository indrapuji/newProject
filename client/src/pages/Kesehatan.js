import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Kesehatan from "../assets/image/kesehatan2.jpg";
import TabelKesehatan from "../assets/image/tabel_kesehatan.png";
import SantunanKematian from "../assets/image/santunan_kematian.jpg";
import SantunanNilaiHidup from "../assets/image/santunan_nilaihidup.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
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
          <p style={{ textAlign: "justify" }}>
            Yayasan mengelola dana program kesehatan yang disalurkan kepada seluruh pensiunan Perum Perhutani dalam bentuk program kesehatan sesuai dengan ketentuan.yang berlaku.
            <br style={{ marginBottom: 10 }} />
            Ketentuan tersebut diantaranya memenuhi batasan kepesertaan dan jenis perawatan yang ditanggung. Batasan kepesertaan program kesehatan adalah bagi pensiunan direksi dan pegawai Perum
            Perhutani beserta istri/suami (pasangan) dan satu anak yang masih menjadi tanggunan yaitu usia maximum 25 tahun dan belum menikah. Perincian jenis perawatan kesehatan yang ditanggung
            ditetapkan tersendiri.
            <br style={{ marginBottom: 10 }} />
            Masa manfaat program kesehatan ditetapkan selama 15 tahun terhitung sejak pegawai memasuki masa pensiun normal 56 th. Apabila dalam masa perlindungan tersebut peserta belum pernah
            mengajukan klaim program kesehatan, diakhir masa perlindungan akan diberikan “Manfaat Nilai Hidup” yang besarnya ditetapkan tersendiri. Apabila dalam masa perlindungan peserta meninggal
            dunia, akan diberikan “santunan kematian” yang nilainya akan diatur tersendiri.
          </p>
        </div>
        <div data-aos="fade-up" style={{ marginTop: 20 }}>
          <p style={{ fontWeight: "bold", marginBottom: 10 }}>MASA PERLINDUNGAN BANTUAN KESEHATAN</p>
          <p style={{ textAlign: "justify" }}>
            Bagi Karyawan yang pensiun usia 56 tahun (normal) atau diatas usia 56 tahun diberikan masa perlindungan bantuan kesehatan selama 15 tahun.
            <br style={{ marginBottom: 10 }} />
            Bagi Karyawan yang pensiun dipercepat karena Meninggal Dunia / Mengundurkan Diri / Diberhentikan / Catat Total, diberikan masa perlindungan Bantuan Kesehatan sesuai masa iuran yang
            bersangkutan, dengan detail sebagai berikut:
          </p>
          <ol type="a">
            <li>Masa Iuran 1 bulan - 5 tahun masa perlindungan 4 tahun.</li>
            <li>Masa Iuran {">"} 5 - 10 tahun masa perlindungan 8 tahun.</li>
            <li>Masa Iuran {">"} 10 tahun masa perlindungan 15 tahun.</li>
          </ol>
        </div>
        <div data-aos="fade-up" style={{ marginTop: 20 }}>
          <p style={{ fontWeight: "bold", marginBottom: 10 }}>BESARAN PENGGANTIAN BANTUAN KESEHATAN</p>
          <p>Besaran penggantian bantuan kesehatan ditetapkan sesuai masa iuran yang bersangkutan :</p>
          <ol style={{ marginLeft: -10, marginTop: -10 }}>
            <li>Masa Iuran 1 bulan - 5 tahun sebesar 70% dari biaya yang disyahkan.</li>
            <li>Masa Iuran {">"} 5 tahun sebesar 100% dari biaya yang disyahkan.</li>
          </ol>
        </div>
        <div data-aos="zoom-in" style={{ marginTop: 20 }}>
          <Image src={TabelKesehatan} rounded style={{ height: 700, width: 800 }} />
        </div>
        <div data-aos="zoom-in" style={{ marginTop: 20 }}>
          <Image src={SantunanNilaiHidup} rounded style={{ height: 100 }} />
        </div>
        <div data-aos="zoom-in" style={{ marginTop: 20 }}>
          <Image src={SantunanKematian} rounded style={{ height: 100 }} />
        </div>
        <div data-aos="flip-left" style={{ marginTop: 20 }}>
          <p>Mekanisme Pengajuan Penggantian Biaya</p>
          <ul style={{ marginLeft: -10, marginTop: -10 }}>
            <li>Kwitansi dan syarat – syarat lengkap dikirim ke kantor YKP3 Jati Sejahtera Pusat melalui satuan kantor Perum Perhutani terdekat.</li>
            <li>Satuan Kantor Perum Perhutani terdekat meneruskan / mengirim ke kantor YKP3 Jati Sejahtera Pusat.</li>
            <li>Pembayaran melalui satuan kantor perum Perhutani terdekat setelah menerima kiriman dari kantor YKP3 Jati Sejahtera Pusat.</li>
            <li>Metode penggantian biaya rawat inap dan pembedahan adalah dengan reimbursement.</li>
            <li>
              Pensiunan yang selama 15 tahun tidak pernah mengajukan Klaim Rawat Inap dapat mengajukan surat permohonan Nilai Hidup kepada kantor YKP3 Jati Sejahtera Pusat melalui Satuan Kerja Perum
              Perhutani terdekat.
            </li>
            <li>
              Ahli Waris atau keluarga Pensiunan mengajukan surat permohonan Santunan Kematian atau santunan cacat kepada kantor YKP3 Jati Sejahtera Pusat melalui satuan kerja Perum Perhutani
              terdekat.
            </li>
          </ul>
        </div>
        <div data-aos="flip-left" style={{ marginTop: 20 }}>
          <p>MEKANISME PEMBAYARAN</p>
          <ul style={{ marginLeft: -10, marginTop: -10 }}>
            <li>Dengan sistem Restitusi Paling Lama 14 hari sejak pengajuan.</li>
            <li>3 bulan masa tunda kwitansi sejak permohonan.</li>
          </ul>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
