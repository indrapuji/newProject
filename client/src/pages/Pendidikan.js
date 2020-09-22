import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Pendidikan from "../assets/image/pendidikan3.jpg";
import useFetch from "../hooks/useFetch";
import host from "../hooks/host";

export default () => {
  const apiUrl = `${host}/content`;
  const [data, loading] = useFetch(apiUrl);

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
      {/* {JSON.stringify(data)} */}
      <div style={{ position: "relative" }}>
        <div data-aos="zoom-in" style={{ position: "absolute", left: "-30", zIndex: -1, top: 50 }}>
          <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 150 }} />
        </div>
        <div data-aos="fade-up" style={{ position: "absolute", left: 1200, zIndex: -1, top: 200 }}>
          <Image src={require("../assets/landingpage/leaf_top_large.png")} style={{ width: 200 }} />
        </div>
        <Container>
          <div style={{ marginTop: 20 }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Pendidikan</p>
          </div>
          {data.map((file) => {
            return (
              <div key={file.id}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                  {/* <Image src={Pendidikan} rounded style={{ height: 400, width: 600 }} /> */}
                  <Image src={file.image_url} rounded style={{ height: 400, width: 600 }} />
                </div>
                <div style={{ marginTop: 20 }}>
                  <p style={{ fontWeight: "bold", marginBottom: 0 }}>{file.text}</p>
                  {/* <p style={{ fontWeight: "bold", marginBottom: 0 }}>Beberapa kegiatan dibidang pendidikan yang diselenggarakan oleh Yayasan di antaranya:</p> */}
                  <ol style={{ marginLeft: -20 }}>
                    <li>Memberikan bantuan biaya pendidikan kepada putra/putri karyawan dan pensiunan peruma perhutani yang berprestasi.</li>
                    <li>mengelola Wisma Putra Rimba untuk membantu menyediakan tempat tinggal bagi putra/putri karyawan/pensiunan Perum Perhutani yang melanjutkan pendidikan di Surabaya.</li>
                    <li>Membantu pengembangan dan pembinaan lembaga Pendidikan dilingkup Perum Perhutani.</li>
                    <li>Menyelenggarakan Pendidikan Non-formal (TK/TPA/PAUD)</li>
                  </ol>
                </div>
                <div style={{ marginTop: 20 }}>
                  <p style={{ display: "flex", justifyContent: "center", marginTop: 30, fontWeight: "bold", fontSize: 30 }}>Bantuan Pendidikan</p>
                  <p style={{ fontWeight: "bold", marginBottom: 0 }}>Peruntukan</p>
                  <ul style={{ marginLeft: -20 }}>
                    <li>Putra/Putri Siswa/Mahasiswa dari Pensiunan atau Janda Pensiunan Karyawan Perum Perhutani</li>
                    <li>Karyawan, Golongan A dan Golongan I, Golongan II yang tidak menjabat</li>
                    <li>Guru Sekolah Taruna Rimba yang sedang menempuh S1 bidang pendidikan</li>
                  </ul>
                  <p style={{ fontWeight: "bold", marginBottom: 0 }}>Manfaat</p>
                  <ul style={{ marginLeft: -20 }}>
                    <li>Bantuan Pendidikan dengan nilai</li>
                    <table>
                      <tr>
                        <td>Tingkat SD</td>
                        <td>Rp. 50.000,- /bln.</td>
                      </tr>
                      <tr>
                        <td>Tingkat SLTP</td>
                        <td>Rp . 60.000,-/bln.</td>
                      </tr>
                      <tr>
                        <td>Tingkat SLTA</td>
                        <td>Rp. 75.000,-/bln.</td>
                      </tr>
                      <tr>
                        <td>Perguruan Tinggi</td>
                        <td>Rp 100.000,/bln.</td>
                      </tr>
                    </table>
                    {/* <ul>Tingkat SD {"          "}Rp. 50.000,- /bln.</ul>
              <ul>Tingkat SLTP Rp . 60.000,-/bln.</ul>
              <ul>Tingkat SLTA Rp. 75.000,-/bln.</ul>
              <ul>Perguruan Tinggi Rp 100.000,/bln.</ul> */}
                  </ul>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <Footer />
    </motion.div>
  );
};
