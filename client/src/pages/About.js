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
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Tentang Kami</p>
          <p>
            <span style={{ fontWeight: "bold" }}>“Yayasan Jati Sejahtera”</span> didirikan pada
            tanggal 24 April 1987 oleh Pendiri yayasan (seperti tersebut dibawah) dengan Akte
            Notaris Roenastiti Prayitno, SH, MA, No: 21 Tanggal: 24 April 1987 . Pada awal
            pendirian, Yayasan ini bergerak di bidang pendidikan yaitu membantu biaya pendidikan
            kepada putra putri karyawan/pensiunan Perum Perhutani. Yayasan berkedudukan di Jakarta
            dan memiliki Kantor Perwakilan di wilayah Jawa Timur, Jawa Tengah, serta Jawa Barat dan
            Banten. Di awal pendirian, Yayasan diurus oleh suatu pengurus yang ditunjuk dan diangkat
            oleh salah satu Direktur Perhutani selaku Ketua Pembina.
            <br style={{ marginBottom: 10 }} />
            Pada tahun 2008, yayasan melakukan perubahan Anggaran Dasar yang sangat mendasar dalam
            rangka menyesuaikan dengan Undang-Undang Yayasan yang dikeluarkan oleh Pemerintah yaitu
            Undang-Undang No: 16 Tahun 2001, dan Undang-undang No 28 Tahun 2004. Perubahan Anggaran
            dasar ini menyangkut susunan organ yayasan dan memperluas kegiatan nya yaitu dibidang
            Sosial dan Kemanusiaan. Perubahan ini di legalkan dengan Akte Notaris Etty Purwaningsih
            SH, No: 08 Tanggal 24 September 2008.
            <br style={{ marginBottom: 10 }} />
            Seiring berjalan nya waktu, yayasan mengalami perubahan anggaran dasar yang berkaitan
            dengan pergantian pengurus, khusus perubahan pada Tahun 2010, perubahan anggaran
            dasarnya disertai dengan perubahan Nama Yayasan menjadi “Yayasan Kesejahteraan Pegawai
            Perum Perhutani Jati Sejahtera (YKP3JS), serta penambahan kegiatan yaitu program bantuan
            pemilikan rumah dan program kesehatan.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};
