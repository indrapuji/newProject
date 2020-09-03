import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image, Table } from "react-bootstrap";
import { motion } from "framer-motion";
import Aos from "aos";
import useFetch from "../hooks/useFetch";
import "aos/dist/aos.css";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const apiUrl = `http://localhost:3001/data`;
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
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
        <Navigation />
        {/* {JSON.stringify(data)} */}
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>No Induk</th>
                <th>Email</th>
                <th>tanggal Lahir</th>
                <th>No KTP</th>
                <th>No BPJS</th>
                <th>Nama Bank</th>
                <th>No Rekening</th>
                <th>Satuan Kerja</th>
                <th>Golongan</th>
                <th>No Telp</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {data.map((file, idx) => {
                return (
                  <tr key={file.id}>
                    <td>{idx + 1}</td>
                    <td>{file.nama}</td>
                    <td>{file.no_induk}</td>
                    <td>{file.email}</td>
                    <td>{file.tgl_lahir}</td>
                    <td>{file.no_ktp}</td>
                    <td>{file.no_bpjs}</td>
                    <td>{file.nama_bank}</td>
                    <td>{file.no_rekening}</td>
                    <td>{file.satuan_kerja}</td>
                    <td>{file.golongan_pangkat}</td>
                    <td>{file.no_telp}</td>
                    <td>{file.alamat}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </motion.div>
    );
  }
};
